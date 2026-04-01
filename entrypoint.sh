#!/usr/bin/env bash
set -euo pipefail

echo "==> Starting PostgreSQL..."
pg_ctlcluster 17 main start || true
sleep 2

echo "==> Running database initialization..."
if ! su - postgres -c "psql -lqt" | grep -q trauth; then
    su - postgres -c "psql -f /docker-entrypoint-initdb.d/init.sql"
    echo "    Databases created."
else
    echo "    Databases already exist, skipping."
fi

echo "==> Starting Redis..."
redis-server --daemonize yes --bind 127.0.0.1

echo "==> Starting NATS JetStream..."
nats-server -c /etc/nats/nats.conf &
sleep 1

echo "==> Starting Mailpit (SMTP capture + web UI)..."
mailpit --smtp 0.0.0.0:1025 --listen 0.0.0.0:8025 \
    --db-file /data/mailpit/mailpit.db &
sleep 1

echo "==> Loading shared environment..."
set -a
# shellcheck disable=SC1091
[ -f /etc/environment ] && source /etc/environment
set +a

echo "==> Running database migrations..."

# Helper: run migrations for a service using the migrator user.
# Usage: run_migrations <migrations_dir> <migrator_db_url> <label>
run_migrations() {
    local dir="$1" db_url="$2" label="$3"
    if [ ! -d "$dir" ] || [ -z "$(ls -A "$dir" 2>/dev/null)" ]; then
        echo "    SKIP $label — no migration files"
        return
    fi
    echo "    Migrating $label..."
    migrate -path "$dir" -database "$db_url" up 2>&1 || true
}

# Migrator URLs use the migrator users (DDL privileges)
AUTH_MIGRATOR_URL="postgres://trt_auth_migrator:dev_password@127.0.0.1:5432/trauth?sslmode=disable"
HASHSTORE_API_MIGRATOR_URL="postgres://trt_hashstore_migrator:dev_password@127.0.0.1:5432/hashstore_api?sslmode=disable"
HASHSTORE_STORAGE_MIGRATOR_URL="postgres://trt_hashstore_storage_migrator:dev_password@127.0.0.1:5432/hashstore_storage?sslmode=disable"
HASHSTORE_CAPACITY_MIGRATOR_URL="postgres://trt_hashstore_capacity_migrator:dev_password@127.0.0.1:5432/hashstore_capacity?sslmode=disable"
HASHSTORE_NOTIFIER_MIGRATOR_URL="postgres://trt_hashstore_notifier_migrator:dev_password@127.0.0.1:5432/hashstore_notification?sslmode=disable"
HASHSTORE_AUDIT_MIGRATOR_URL="postgres://trt_hashstore_audit_migrator:dev_password@127.0.0.1:5432/hashstore_audit?sslmode=disable"
PAYMENTS_MIGRATOR_URL="postgres://trt_payments_migrator:dev_password@127.0.0.1:5432/trtpay?sslmode=disable"

run_migrations /opt/trt-auth/migrations "$AUTH_MIGRATOR_URL" authenticator
run_migrations /opt/trt-hashstore/migrations "$HASHSTORE_API_MIGRATOR_URL" hashstore-api
run_migrations /opt/trt-hashstore-storage/migrations "$HASHSTORE_STORAGE_MIGRATOR_URL" hashstore-storage
run_migrations /opt/trt-hashstore-capacity/migrations "$HASHSTORE_CAPACITY_MIGRATOR_URL" hashstore-capacity
run_migrations /opt/trt-hashstore-notifier/migrations "$HASHSTORE_NOTIFIER_MIGRATOR_URL" hashstore-notifier
run_migrations /opt/trt-hashstore-audit/migrations "$HASHSTORE_AUDIT_MIGRATOR_URL" hashstore-audit
run_migrations /opt/trt-payments/migrations "$PAYMENTS_MIGRATOR_URL" payments

# Override payments DB-seeded server config to use Docker ports.
# The seed migration inserts server.port=8081; we need 50015.
echo "    Patching payments server config..."
su - postgres -c "psql -d trtpay -c \"UPDATE configurations SET value='50015' WHERE key='server.port';\"" 2>/dev/null || true
su - postgres -c "psql -d trtpay -c \"UPDATE configurations SET value='127.0.0.1' WHERE key='server.host';\"" 2>/dev/null || true

echo "==> Starting TRT services..."

# Helper: start a service binary as the given user.
# All TRT_* env vars are already loaded from /etc/environment.
# Extra env vars can be passed after the label argument.
# Usage: start_service <user> <binary> <label> [extra_env ...]
start_service() {
    local user="$1" binary="$2" label="$3"
    shift 3
    if [ ! -x "$binary" ]; then
        echo "    SKIP $label — binary not found"
        return
    fi
    echo "    Starting $label..."
    runuser -u "$user" -- env \
        $(env | grep '^TRT_' | tr '\n' ' ') \
        "$@" \
        "$binary" &
}

# Authenticator (port 50002 — configured via database seed)
start_service trt-auth \
    /opt/trt-auth/bin/authenticator \
    authenticator
sleep 3

# HashStore API (port 50010)
start_service trt-hashstore \
    /opt/trt-hashstore/bin/hashstore-api \
    hashstore-api

# HashStore Storage (port 50012)
start_service trt-hashstore-storage \
    /opt/trt-hashstore-storage/bin/hashstore-storage \
    hashstore-storage

# HashStore Capacity (port 50011)
start_service trt-hashstore-capacity \
    /opt/trt-hashstore-capacity/bin/hashstore-capacity \
    hashstore-capacity

# Payments (port 50015 — generic env var names need explicit override)
# Must run from /opt/trt-payments so the internal migrator finds ./migrations/
echo "    Starting payments..."
if [ -x /opt/trt-payments/bin/payments ]; then
    (cd /opt/trt-payments && runuser -u trt-payments -- env \
        $(env | grep '^TRT_' | tr '\n' ' ') \
        TRT_DATABASE_URL=postgres://trt_payments_app:dev_password@127.0.0.1:5432/trtpay?sslmode=disable \
        TRT_SERVER_PORT=50015 \
        TRT_AUTH_SERVICE_URL=http://127.0.0.1:50002 \
        TRT_ADYEN_API_KEY=dev-adyen-api-key \
        TRT_ADYEN_MERCHANT=TestMerchantAccount \
        TRT_ADYEN_HMAC_KEY=dev-adyen-hmac-key \
        TRT_ADYEN_ENVIRONMENT=test \
        ./bin/payments &)
else
    echo "    SKIP payments — binary not found"
fi

# Wait for API to create NATS streams before starting consumers
sleep 5

# HashStore Notifier (port 50013)
start_service trt-hashstore-notifier \
    /opt/trt-hashstore-notifier/bin/hashstore-notifier \
    hashstore-notifier

# HashStore Audit (port 50014)
start_service trt-hashstore-audit \
    /opt/trt-hashstore-audit/bin/hashstore-audit \
    hashstore-audit

# Notifications API (port 50016 — shares notifier's DB)
start_service trt-hashstore-notifications \
    /opt/trt-hashstore-notifications/bin/hashstore-notifications \
    hashstore-notifications

# Jaspr SSR website (port 50080 via PORT env var, proxied by nginx)
# Must run from /opt/trt-jaspr so the server finds the web/ directory.
echo "    Starting jaspr-website..."
if [ -x /opt/trt-jaspr/bin/app ]; then
    (cd /opt/trt-jaspr && runuser -u trt-jaspr -- env \
        AUTH_BASE_URL="${AUTH_BASE_URL:-http://127.0.0.1:50002}" \
        PAY_BASE_URL="${PAY_BASE_URL:-http://127.0.0.1:50015}" \
        HASH_BASE_URL="${HASH_BASE_URL:-http://127.0.0.1:50010}" \
        PORT=50080 \
        ./bin/app &)
else
    echo "    SKIP jaspr-website — binary not found"
fi

echo "==> Starting Nginx..."
nginx -g 'daemon off;' &

echo "==> All services started. Container is ready."
echo "    Website:  http://localhost:8880"
echo "    Mailpit:  http://localhost:8025"
echo "    APIs:     /h/ (hashstore) /a/ (auth) /p/ (payments) /n/ (notifications)"

# Keep container alive regardless of individual service crashes
tail -f /dev/null

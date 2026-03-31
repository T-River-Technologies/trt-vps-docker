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
HASHSTORE_NOTIFICATION_MIGRATOR_URL="postgres://trt_hashstore_notification_migrator:dev_password@127.0.0.1:5432/hashstore_notification?sslmode=disable"
HASHSTORE_AUDIT_MIGRATOR_URL="postgres://trt_hashstore_audit_migrator:dev_password@127.0.0.1:5432/hashstore_audit?sslmode=disable"

run_migrations /opt/trt-auth/migrations "$AUTH_MIGRATOR_URL" authenticator
run_migrations /opt/trt-hashstore/migrations "$HASHSTORE_API_MIGRATOR_URL" hashstore-api
run_migrations /opt/trt-hashstore-storage/migrations "$HASHSTORE_STORAGE_MIGRATOR_URL" hashstore-storage
run_migrations /opt/trt-hashstore-capacity/migrations "$HASHSTORE_CAPACITY_MIGRATOR_URL" hashstore-capacity
run_migrations /opt/trt-hashstore-notification/migrations "$HASHSTORE_NOTIFICATION_MIGRATOR_URL" hashstore-notification
run_migrations /opt/trt-hashstore-audit/migrations "$HASHSTORE_AUDIT_MIGRATOR_URL" hashstore-audit

echo "==> Starting TRT services..."

# Helper: start a service binary as the given user.
# All TRT_* env vars are already loaded from /etc/environment.
# Each service reads its own service-specific env vars directly.
# Usage: start_service <user> <binary> <label>
start_service() {
    local user="$1" binary="$2" label="$3"
    if [ ! -x "$binary" ]; then
        echo "    SKIP $label — binary not found"
        return
    fi
    echo "    Starting $label..."
    # Export all TRT_* env vars into the sub-shell so the
    # service can read its own prefixed variables.
    runuser -u "$user" -- env \
        $(env | grep '^TRT_' | tr '\n' ' ') \
        "$binary" &
}

# Authenticator (port 50002 — configured via database seed)
start_service trt-auth \
    /opt/trt-auth/bin/authenticator \
    authenticator
sleep 3

# HashStore API (port 8080 — default from TRT_HASHSTORE_API_PORT)
start_service trt-hashstore \
    /opt/trt-hashstore/bin/hashstore-api \
    hashstore-api

# HashStore Storage (port 8082 — default from TRT_HASHSTORE_STORAGE_PORT)
start_service trt-hashstore-storage \
    /opt/trt-hashstore-storage/bin/hashstore-storage \
    hashstore-storage

# HashStore Capacity (port 8081 — default from TRT_HASHSTORE_CAPACITY_PORT)
start_service trt-hashstore-capacity \
    /opt/trt-hashstore-capacity/bin/hashstore-capacity \
    hashstore-capacity

# Wait for API to create NATS streams before starting consumers
sleep 5

# HashStore Notifier (port 8083 — default from TRT_HASHSTORE_NOTIFIER_PORT)
start_service trt-hashstore-notification \
    /opt/trt-hashstore-notification/bin/hashstore-notification \
    hashstore-notifier

# HashStore Audit (port 8084 — set via TRT_HASHSTORE_AUDIT_PORT in dev.env)
start_service trt-hashstore-audit \
    /opt/trt-hashstore-audit/bin/hashstore-audit \
    hashstore-audit

echo "==> Starting Nginx..."
nginx -g 'daemon off;' &

echo "==> All services started. Container is ready."
echo "    HashStore: http://localhost:8880"
echo "    Mailpit:   http://localhost:8025"

# Keep container alive regardless of individual service crashes
tail -f /dev/null

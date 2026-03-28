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

# Helper: start a service with its own TRT_DATABASE_URL and TRT_PORT.
# Usage: start_service <user> <binary> <db_url_var> <port> <label>
start_service() {
    local user="$1" binary="$2" db_url="$3" port="$4" label="$5"
    if [ ! -x "$binary" ]; then
        echo "    SKIP $label — binary not found"
        return
    fi
    echo "    Starting $label on :$port"
    TRT_DATABASE_URL="$db_url" TRT_PORT="$port" \
        su - "$user" -s /bin/bash -c "
            export TRT_DATABASE_URL='$db_url'
            export TRT_PORT='$port'
            export TRT_JWT_SECRET='${TRT_JWT_SECRET:-}'
            export TRT_MFA_SECRET='${TRT_MFA_SECRET:-}'
            export TRT_CONFIG_ENCRYPTION_KEY='${TRT_CONFIG_ENCRYPTION_KEY:-}'
            export TRT_BACKUP_ENCRYPTION_KEY='${TRT_BACKUP_ENCRYPTION_KEY:-}'
            export TRT_NATS_URL='${TRT_NATS_URL:-}'
            export TRT_REDIS_URL='${TRT_REDIS_URL:-}'
            export TRT_AUTHENTICATOR_URL='${TRT_AUTHENTICATOR_URL:-}'
            export TRT_STORAGE_SERVICE_URL='${TRT_STORAGE_SERVICE_URL:-}'
            export TRT_STORAGE_BASE_PATH='${TRT_STORAGE_BASE_PATH:-}'
            export TRT_ADMIN_TOKEN='${TRT_ADMIN_TOKEN:-}'
            export TRT_DSAR_ENCRYPTION_KEY='${TRT_DSAR_ENCRYPTION_KEY:-}'
            export TRT_EXPORT_ENCRYPTION_KEY='${TRT_EXPORT_ENCRYPTION_KEY:-}'
            exec $binary
        " &
}

# Authenticator
start_service trt-auth \
    /opt/trt-auth/bin/authenticator \
    "$AUTH_DATABASE_URL" 50002 authenticator
sleep 3

# HashStore API — starts first to create NATS streams
start_service trt-hashstore \
    /opt/trt-hashstore/bin/hashstore-api \
    "$HASHSTORE_API_DATABASE_URL" 8080 hashstore-api

# HashStore Storage
start_service trt-hashstore-storage \
    /opt/trt-hashstore-storage/bin/hashstore-storage \
    "$HASHSTORE_STORAGE_DATABASE_URL" 8082 hashstore-storage

# HashStore Capacity
start_service trt-hashstore-capacity \
    /opt/trt-hashstore-capacity/bin/hashstore-capacity \
    "$HASHSTORE_CAPACITY_DATABASE_URL" 8081 hashstore-capacity

# Wait for API to create NATS streams before starting NATS consumers
sleep 5

# HashStore Notification (consumes from NATS)
start_service trt-hashstore-notification \
    /opt/trt-hashstore-notification/bin/hashstore-notification \
    "$HASHSTORE_NOTIFICATION_DATABASE_URL" 8083 hashstore-notification

# HashStore Audit (consumes from NATS)
start_service trt-hashstore-audit \
    /opt/trt-hashstore-audit/bin/hashstore-audit \
    "$HASHSTORE_AUDIT_DATABASE_URL" 8084 hashstore-audit

echo "==> Starting Nginx..."
nginx -g 'daemon off;' &

echo "==> All services started. Container is ready."
echo "    HashStore: http://localhost:8880"

# Keep container alive regardless of individual service crashes
tail -f /dev/null

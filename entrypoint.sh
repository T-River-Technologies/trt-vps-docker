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

echo "==> Starting HashiCorp Vault..."
export VAULT_ADDR=http://127.0.0.1:8200
vault server -config=/etc/vault.d/vault.hcl &

# Wait up to 30 s for Vault to accept connections (exit 2=sealed, not 1=down)
echo "    Waiting for Vault to start..."
vault_ready=false
for _ in $(seq 1 30); do
    vault_exit=0
    vault status >/dev/null 2>&1 || vault_exit=$?
    if [ "$vault_exit" -ne 1 ]; then
        vault_ready=true
        break
    fi
    sleep 1
done
if [ "$vault_ready" = false ]; then
    echo "    ERROR: Vault did not start in time" >&2
    exit 1
fi

VAULT_INIT_FILE=/opt/vault/data/init.json
if [ ! -f "$VAULT_INIT_FILE" ]; then
    echo "    Initializing Vault (first run)..."
    vault operator init -key-shares=1 -key-threshold=1 -format=json \
        > "$VAULT_INIT_FILE"
    VAULT_UNSEAL_KEY=$(jq -r '.unseal_keys_b64[0]' "$VAULT_INIT_FILE")
    export VAULT_TOKEN
    VAULT_TOKEN=$(jq -r '.root_token' "$VAULT_INIT_FILE")
    vault operator unseal "$VAULT_UNSEAL_KEY"
    vault secrets enable -path=secret kv-v2
    vault kv put secret/notifier/smtp password=dev_smtp_password
    echo "    Vault initialized, unsealed, and seeded."
else
    echo "    Unsealing Vault (subsequent run)..."
    VAULT_UNSEAL_KEY=$(jq -r '.unseal_keys_b64[0]' "$VAULT_INIT_FILE")
    export VAULT_TOKEN
    VAULT_TOKEN=$(jq -r '.root_token' "$VAULT_INIT_FILE")
    vault operator unseal "$VAULT_UNSEAL_KEY"
    echo "    Vault unsealed."
fi
export TRT_VAULT_ADDR=http://127.0.0.1:8200
export TRT_VAULT_TOKEN="$VAULT_TOKEN"

# Configure AppRole auth and Transit engine for hashstore-api (idempotent).
echo "    Configuring Vault AppRole and Transit for hashstore..."
vault auth enable approle 2>/dev/null || true
vault secrets enable transit 2>/dev/null || true
vault policy write hashstore-policy - <<'HCL'
path "transit/keys/*"                      { capabilities = ["create","read","update","delete","list"] }
path "transit/export/encryption-key/*"     { capabilities = ["read"] }
HCL
vault write auth/approle/role/hashstore \
    secret_id_ttl=0 \
    token_ttl=24h \
    token_max_ttl=24h \
    policies=hashstore-policy >/dev/null
HASHSTORE_ROLE_ID=$(vault read -field=role_id auth/approle/role/hashstore/role-id)
HASHSTORE_SECRET_ID=$(vault write -field=secret_id -f auth/approle/role/hashstore/secret-id)
export TRT_VAULT_ROLE_ID="$HASHSTORE_ROLE_ID"
export TRT_VAULT_SECRET_ID="$HASHSTORE_SECRET_ID"
echo "    Vault AppRole configured for hashstore."

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
    # Auto-fix dirty state: extract the dirty version and force-reset to version-1 so
    # the failed migration is retried cleanly.
    local output
    output=$(migrate -path "$dir" -database "$db_url" up 2>&1) || true
    if echo "$output" | grep -q "Dirty database version"; then
        local dirty_ver
        dirty_ver=$(echo "$output" | grep -oE 'Dirty database version [0-9]+' | grep -oE '[0-9]+$')
        echo "      Dirty version $dirty_ver detected in $label — forcing reset..."
        migrate -path "$dir" -database "$db_url" force "$((dirty_ver - 1))" 2>/dev/null || true
        migrate -path "$dir" -database "$db_url" up 2>&1 || true
    else
        echo "$output"
    fi
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

# Seed dev users in the background after authenticator is ready (idempotent).
# admin@dev.local — admin + organizer roles, email pre-verified.
# test@dev.local  — user + organizer roles, email pre-verified.
(
    for _ in $(seq 1 30); do
        curl -sf http://127.0.0.1:50002/health >/dev/null 2>&1 && break
        sleep 1
    done
    for email in admin@dev.local test@dev.local; do
        first="Admin"; last="Dev"; [ "$email" = "test@dev.local" ] && first="Test" && last="User"
        curl -sf -X POST http://127.0.0.1:50002/api/v1/auth/register \
            -H "Content-Type: application/json" \
            -d "{\"email\":\"$email\",\"password\":\"Dev@12345!\",\"first_name\":\"$first\",\"last_name\":\"$last\"}" \
            >/dev/null 2>&1 || true
    done
    su - postgres -c "psql -d trauth" <<'SQL'
        UPDATE users SET email_verified = true
            WHERE email IN ('admin@dev.local','test@dev.local')
            AND email_verified = false;
        INSERT INTO user_roles (user_id, role_id)
            SELECT u.id, r.id FROM users u JOIN roles r ON r.name = 'admin'
            WHERE u.email = 'admin@dev.local'
            AND NOT EXISTS (
                SELECT 1 FROM user_roles ur WHERE ur.user_id = u.id AND ur.role_id = r.id
            );
SQL
    echo "    Dev users ready: admin@dev.local / test@dev.local  password: Dev@12345!"
) &

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

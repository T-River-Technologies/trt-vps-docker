#!/usr/bin/env bash
# deploy-local-docker.sh — Build all TRT services and restart the Docker VPS.
#
# Usage:
#   ./deploy-local-docker.sh          # full rebuild (all services + Jaspr + Docker)
#   ./deploy-local-docker.sh --skip-jaspr   # skip Jaspr build (faster)
#   ./deploy-local-docker.sh --clean        # wipe volumes for fresh DB init
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TRT_ROOT="$(dirname "$SCRIPT_DIR")"

# Parse flags
SKIP_JASPR=false
CLEAN=false
for arg in "$@"; do
    case "$arg" in
        --skip-jaspr) SKIP_JASPR=true ;;
        --clean)      CLEAN=true ;;
        *) echo "Unknown flag: $arg"; exit 1 ;;
    esac
done

# Service definitions: repo_dir | makefile_binary | docker_service_dir | docker_binary_name
SERVICES=(
    "trt-authenticator-go-service|bin/trt-authenticator-go-service|trt-auth|authenticator"
    "trt-hashstore-go-service|bin/hashstore-api|trt-hashstore|hashstore-api"
    "trt-hashstore-storage-go-service|bin/hashstore-storage|trt-hashstore-storage|hashstore-storage"
    "trt-hashstore-capacity-go-service|bin/hashstore-capacity|trt-hashstore-capacity|hashstore-capacity"
    "trt-hashstore-notifier-go-service|bin/hashstore-notifier|trt-hashstore-notifier|hashstore-notifier"
    "trt-hashstore-audit-go-service|bin/hashstore-audit|trt-hashstore-audit|hashstore-audit"
    "trt-payments-go-service|bin/trt-payments-go-service|trt-payments|payments"
    "trt-hashstore-notifications-go-service|bin/hashstore-notifications|trt-hashstore-notifications|hashstore-notifications"
)

echo "==> Building Go services..."
for entry in "${SERVICES[@]}"; do
    IFS='|' read -r repo_dir build_bin docker_dir docker_bin <<< "$entry"
    repo_path="$TRT_ROOT/$repo_dir"
    if [ ! -d "$repo_path" ]; then
        echo "    SKIP $repo_dir — repo not found"
        continue
    fi
    echo "    Building $repo_dir..."
    (cd "$repo_path" && make build)
done

if [ "$SKIP_JASPR" = false ]; then
    echo "==> Building Jaspr website..."
    jaspr_repo="$TRT_ROOT/trt-hashstore-jaspr-website"
    if [ -d "$jaspr_repo" ]; then
        (cd "$jaspr_repo" && jaspr build)
    else
        echo "    SKIP — jaspr repo not found"
    fi
else
    echo "==> Skipping Jaspr build (--skip-jaspr)"
fi

echo "==> Stopping Docker container..."
(cd "$SCRIPT_DIR" && docker compose down)

echo "==> Copying binaries..."
for entry in "${SERVICES[@]}"; do
    IFS='|' read -r repo_dir build_bin docker_dir docker_bin <<< "$entry"
    repo_path="$TRT_ROOT/$repo_dir"
    src="$repo_path/$build_bin"
    dst="$SCRIPT_DIR/services/$docker_dir/bin/$docker_bin"
    if [ ! -f "$src" ]; then
        echo "    SKIP $docker_bin — binary not found at $src"
        continue
    fi
    mkdir -p "$(dirname "$dst")"
    cp "$src" "$dst"
    echo "    Copied $docker_bin"
done

echo "==> Syncing migrations..."
sync_migrations() {
    local repo_dir="$1" docker_dir="$2"
    local src="$TRT_ROOT/$repo_dir/migrations"
    local dst="$SCRIPT_DIR/services/$docker_dir/migrations"
    if [ ! -d "$src" ] || [ -z "$(ls -A "$src" 2>/dev/null)" ]; then
        return
    fi
    mkdir -p "$dst"
    cp "$src"/*.sql "$dst/" 2>/dev/null || true
}

sync_migrations "trt-authenticator-go-service"          "trt-auth"
sync_migrations "trt-hashstore-go-service"              "trt-hashstore"
sync_migrations "trt-hashstore-storage-go-service"      "trt-hashstore-storage"
sync_migrations "trt-hashstore-capacity-go-service"     "trt-hashstore-capacity"
sync_migrations "trt-hashstore-notifier-go-service"     "trt-hashstore-notifier"
sync_migrations "trt-hashstore-audit-go-service"        "trt-hashstore-audit"
sync_migrations "trt-payments-go-service"               "trt-payments"

# Notifications API unique migrations get appended to notifier's set (shared DB).
# 000007 and 000008 are reserved for notifications API tables.
notif_src="$TRT_ROOT/trt-hashstore-notifications-go-service/migrations"
notif_dst="$SCRIPT_DIR/services/trt-hashstore-notifier/migrations"
if [ -d "$notif_src" ]; then
    cp "$notif_src/000001_create_push_tokens.up.sql" \
       "$notif_dst/000007_create_push_tokens.up.sql" 2>/dev/null || true
    cp "$notif_src/000001_create_push_tokens.down.sql" \
       "$notif_dst/000007_create_push_tokens.down.sql" 2>/dev/null || true
    cp "$notif_src/000003_add_read_at_to_notifications.up.sql" \
       "$notif_dst/000008_add_read_at_to_notifications.up.sql" 2>/dev/null || true
    cp "$notif_src/000003_add_read_at_to_notifications.down.sql" \
       "$notif_dst/000008_add_read_at_to_notifications.down.sql" 2>/dev/null || true
fi

echo "    Migrations synced"

if [ "$SKIP_JASPR" = false ]; then
    echo "==> Copying Jaspr website..."
    jaspr_build="$TRT_ROOT/trt-hashstore-jaspr-website/build/jaspr"
    jaspr_dst="$SCRIPT_DIR/services/trt-jaspr"
    if [ -f "$jaspr_build/app" ]; then
        cp "$jaspr_build/app" "$jaspr_dst/app"
        rm -rf "$jaspr_dst/web"
        cp -r "$jaspr_build/web" "$jaspr_dst/web"
        echo "    Jaspr app + web assets copied"
    else
        echo "    SKIP — no Jaspr build found"
    fi
fi

if [ "$CLEAN" = true ]; then
    echo "==> Cleaning volumes for fresh DB..."
    (cd "$SCRIPT_DIR" && docker compose down -v)
fi

echo "==> Building Docker image..."
(cd "$SCRIPT_DIR" && make build)

echo "==> Starting container..."
(cd "$SCRIPT_DIR" && make up)

echo ""
echo "==> Deploy complete. Waiting for services to start..."
sleep 20

echo "==> Health checks:"
check_health() {
    local name="$1" url="$2"
    local status
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null || echo "000")
    if [ "$status" = "200" ]; then
        printf "    %-25s ✓ %s\n" "$name" "$status"
    else
        printf "    %-25s ✗ %s\n" "$name" "$status"
    fi
}

check_health "Jaspr Website"      "http://localhost:8880/"
check_health "Authenticator /a/"  "http://localhost:8880/a/health"
check_health "HashStore API /h/"  "http://localhost:8880/h/health"
check_health "Payments /p/"       "http://localhost:8880/p/health"
check_health "Notifications /n/"  "http://localhost:8880/n/health"

echo ""
echo "    Website:  http://localhost:8880"
echo "    Mailpit:  http://localhost:8025"
echo ""

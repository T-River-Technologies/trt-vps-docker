# CLAUDE.md

## What This Repo Is

Docker container that replicates the TRT VPS environment — Ubuntu 25.10 with PostgreSQL,
Redis, NATS JetStream, Nginx, and Mailpit. All TRT product services (Auth, HashStore,
Payments, Jaspr website) run inside a single container matching the production VPS layout.
Binaries, migrations, and the Jaspr website are mounted as volumes from host builds.

## Knowledge Base

@../trt-ai-agent-development-system/docs/index.md

All rules, workflows, technologies, security docs, and markdown writing rules are navigable
from this index.

## Rules

### Git Rules

Use Claude Haiku for all git commit messages.

@../trt-ai-agent-development-system/docs/rules/git-rules.md

## Markdown Writing Rules

@../trt-ai-agent-development-system/docs/rules/markdown-writing-rules.md

## Stories

See [Stories](../trt-ai-agent-development-system/projects/trt-vps-docker/stories.md)
for current epics and planned work. Always read `stories.md` at the start of a session to
find the current epic and which story to work on next.

## Container Architecture

Single monolithic container mirroring the VPS. All services run inside one container via an
entrypoint script, just like systemd manages them on the VPS.

### Infrastructure

| Component  | Port | Host Port | Notes                         |
|------------|------|-----------|-------------------------------|
| Nginx      | 80   | 8880      | Reverse proxy, Jaspr website  |
| PostgreSQL | 5432 | 5433      | 8 databases (auth + products) |
| Redis      | 6379 | 6380      | Permission caching            |
| NATS       | 4222 | 4223      | JetStream for HashStore       |
| Mailpit    | 1025 | —         | SMTP capture (email sink)     |
| Mailpit UI | 8025 | 8025      | Web UI + REST API             |

### Services (all ports above 50000)

| Service              | Port  | Route | Binary Path                    |
|----------------------|-------|-------|--------------------------------|
| Authenticator        | 50002 | `/a/` | `/opt/trt-auth/bin/`           |
| HashStore API        | 50010 | `/h/` | `/opt/trt-hashstore/bin/`      |
| HashStore Capacity   | 50011 | —     | `/opt/trt-hashstore-capacity/` |
| HashStore Storage    | 50012 | —     | `/opt/trt-hashstore-storage/`  |
| HashStore Notifier   | 50013 | —     | `/opt/trt-hashstore-notifier/` |
| HashStore Audit      | 50014 | —     | `/opt/trt-hashstore-audit/`    |
| Payments             | 50015 | `/p/` | `/opt/trt-payments/bin/`       |
| Notifications API    | 50016 | `/n/` | `/opt/trt-hashstore-notifications/` |
| Jaspr Website (SSR)  | 50080 | `/`   | `/opt/trt-jaspr/bin/`          |

### Known Configuration Notes

**Redis `vm.overcommit_memory`:** `vm.overcommit_memory` is a non-namespaced Linux kernel sysctl.
Docker (runc) refuses to set it via `sysctls` in docker-compose.yml. It must be set on the host
machine — the container shares the host kernel's VM subsystem. See the Host Requirements section
in README.md.

### Usage

```bash
make env     # create dev.env from example
make build   # build the image
make up      # start the container
make shell   # open a bash shell inside
make logs    # tail logs
make down    # stop
make clean   # remove everything including volumes
```

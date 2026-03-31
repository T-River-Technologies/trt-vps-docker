# CLAUDE.md

## What This Repo Is

Docker container that replicates the TRT VPS environment — Ubuntu 25.10 with PostgreSQL, Redis,
NATS JetStream, and Nginx. Services and Jaspr websites are mounted as volumes so they run
identically to the production VPS without needing a remote server.

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

See [Stories](../trt-ai-agent-development-system/projects/trt-vps-docker/stories.md) for
current epics and planned work.

## Container Architecture

Single monolithic container mirroring the VPS. All services run inside one container via an
entrypoint script, just like systemd manages them on the VPS.

### Infrastructure

| Component  | Port | Notes                         |
|------------|------|-------------------------------|
| Nginx      | 80   | Reverse proxy, static websites |
| PostgreSQL | 5432 | 7 databases (auth + products) |
| Redis      | 6379 | Permission caching            |
| NATS       | 4222 | JetStream for HashStore       |
| Mailpit    | 1025 | SMTP capture (email sink)     |
| Mailpit UI | 8025 | Web UI + REST API             |

### Service Layout

Binaries mount into `/opt/trt-*/bin/` and migrations into `/opt/trt-*/migrations/`, matching
the VPS deployer directory structure exactly.

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

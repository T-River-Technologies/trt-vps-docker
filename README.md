# trt-vps-docker

Docker container replicating the TRT VPS environment. Runs Ubuntu 25.10 with PostgreSQL,
Redis, NATS JetStream, Nginx, and Mailpit — the same stack the deployer provisions on a bare
server.

## Quick Start

```bash
make env     # create dev.env from the example
make build   # build the Docker image
make up      # start the container
make logs    # follow logs
```

## Mounting Services

Place compiled Go binaries and migrations in the `services/` directory:

```
services/
  trt-auth/
    bin/authenticator
    migrations/
  trt-hashstore/
    bin/hashstore-api
    migrations/
  ...
```

## Ports

Host ports are offset to avoid conflicts with local services:

| Service     | Container | Host |
|-------------|-----------|------|
| Nginx       | 80        | 8880 |
| PostgreSQL  | 5432      | 5433 |
| Redis       | 6379      | 6380 |
| NATS        | 4222      | 4223 |
| Mailpit UI  | 8025      | 8025 |

## Access

- Website: `http://localhost:8880`
- Mailpit: `http://localhost:8025`
- APIs: `/h/` (hashstore), `/a/` (auth), `/p/` (payments), `/n/` (notifications)

## Host Requirements

**Redis memory overcommit:** `docker-compose.yml` sets `vm.overcommit_memory=1` via Docker
sysctls. This writes to the host kernel and suppresses the Redis background-save warning.
For the setting to persist across reboots on the host machine, add it permanently:

```
# /etc/sysctl.conf
vm.overcommit_memory = 1
```

Then apply with `sudo sysctl -p`.

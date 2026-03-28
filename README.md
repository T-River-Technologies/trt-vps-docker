# trt-vps-docker

Docker container replicating the TRT VPS environment. Runs Ubuntu 25.10 with PostgreSQL,
Redis, NATS JetStream, and Nginx — the same stack the deployer provisions on a bare server.

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
  trt-maktab/
    bin/maktab
    migrations/
  trt-hashstore/
    bin/hashstore
    migrations/
  ...
```

Place Jaspr website builds in `websites/`:

```
websites/
  maktab/       # built output from trt-maktab-jaspr-website
  hashstore/    # built output from trt-hashstore-jaspr-website
```

## Ports

Host ports are offset by 1 to avoid conflicts with local services:

| Service    | Container | Host |
|------------|-----------|------|
| Nginx      | 80        | 8880 |
| PostgreSQL | 5432      | 5433 |
| Redis      | 6379      | 6380 |
| NATS       | 4222      | 4223 |

## Access

- Maktab: `http://maktab.localhost:8880`
- HashStore: `http://hashstore.localhost:8880`

FROM ubuntu:25.10

LABEL maintainer="T-River Technologies"
LABEL description="TRT VPS-replica — Ubuntu 25.10 with PostgreSQL, Redis, NATS, Nginx"

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Berlin

# Install infrastructure packages matching the VPS
RUN apt-get update && apt-get install -y --no-install-recommends \
    postgresql \
    postgresql-client \
    redis-server \
    nginx \
    nats-server \
    curl \
    ca-certificates \
    tzdata \
    && rm -rf /var/lib/apt/lists/*

# Install golang-migrate for running database migrations
RUN curl -fsSL https://github.com/golang-migrate/migrate/releases/download/v4.18.3/migrate.linux-amd64.tar.gz \
    | tar -xz -C /usr/local/bin migrate

# Install Mailpit for email testing (SMTP capture + web UI)
RUN curl -fsSL https://github.com/axllent/mailpit/releases/latest/download/mailpit-linux-amd64.tar.gz \
    | tar -xz -C /usr/local/bin mailpit

# Create system users matching VPS deployer layout (no-login shells)
RUN useradd --system --no-create-home --shell /usr/sbin/nologin trt-auth \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-storage \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-capacity \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-notifier \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-notifications \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-audit \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-payments \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-jaspr

# Create service directories matching VPS /opt layout
RUN mkdir -p \
    /opt/trt-auth/bin /opt/trt-auth/logs /opt/trt-auth/migrations \
    /opt/trt-hashstore/bin /opt/trt-hashstore/logs /opt/trt-hashstore/migrations \
    /opt/trt-hashstore-storage/bin /opt/trt-hashstore-storage/logs \
    /opt/trt-hashstore-storage/migrations \
    /opt/trt-hashstore-capacity/bin /opt/trt-hashstore-capacity/logs \
    /opt/trt-hashstore-capacity/migrations \
    /opt/trt-hashstore-notifier/bin /opt/trt-hashstore-notifier/logs \
    /opt/trt-hashstore-notifier/migrations \
    /opt/trt-hashstore-notifications/bin /opt/trt-hashstore-notifications/logs \
    /opt/trt-hashstore-audit/bin /opt/trt-hashstore-audit/logs \
    /opt/trt-hashstore-audit/migrations \
    /opt/trt-payments/bin /opt/trt-payments/logs /opt/trt-payments/migrations \
    /opt/trt-jaspr/bin /opt/trt-jaspr/web /opt/trt-jaspr/logs \
    /data/hashstore/chunks \
    /data/mailpit \
    /var/backups/trauth \
    /var/lib/nats/jetstream

# Set directory ownership matching VPS deployer
RUN chown -R trt-auth:trt-auth /opt/trt-auth /var/backups/trauth \
    && chown -R trt-hashstore:trt-hashstore /opt/trt-hashstore \
    && chown -R trt-hashstore-storage:trt-hashstore-storage \
        /opt/trt-hashstore-storage /data/hashstore/chunks \
    && chown -R trt-hashstore-capacity:trt-hashstore-capacity \
        /opt/trt-hashstore-capacity \
    && chown -R trt-hashstore-notifier:trt-hashstore-notifier \
        /opt/trt-hashstore-notifier \
    && chown -R trt-hashstore-notifications:trt-hashstore-notifications \
        /opt/trt-hashstore-notifications \
    && chown -R trt-hashstore-audit:trt-hashstore-audit /opt/trt-hashstore-audit \
    && chown -R trt-payments:trt-payments /opt/trt-payments \
    && chown -R trt-jaspr:trt-jaspr /opt/trt-jaspr

# NATS configuration
COPY config/nats/nats.conf /etc/nats/nats.conf

# Nginx configuration
RUN rm -f /etc/nginx/sites-enabled/default
COPY config/nginx/default.conf /etc/nginx/sites-enabled/default.conf

# PostgreSQL initialization script
COPY config/postgres/init.sql /docker-entrypoint-initdb.d/init.sql

# Entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose ports: Nginx(80), PostgreSQL(5432), Redis(6379), NATS(4222), Mailpit(8025)
EXPOSE 80 5432 6379 4222 8025

ENTRYPOINT ["/entrypoint.sh"]

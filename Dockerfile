FROM ubuntu:25.10

LABEL maintainer="T-River Technologies"
LABEL description="HashStore VPS-replica — Ubuntu 25.10 with PostgreSQL, Redis, NATS, Nginx"

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

# Create system users matching VPS deployer layout (no-login shells)
RUN useradd --system --no-create-home --shell /usr/sbin/nologin trt-auth \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-storage \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-capacity \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-notification \
    && useradd --system --no-create-home --shell /usr/sbin/nologin trt-hashstore-audit

# Create service directories matching VPS /opt layout
RUN mkdir -p \
    /opt/trt-auth/bin /opt/trt-auth/logs /opt/trt-auth/migrations \
    /opt/trt-hashstore/bin /opt/trt-hashstore/logs /opt/trt-hashstore/migrations \
    /opt/trt-hashstore-storage/bin /opt/trt-hashstore-storage/logs \
    /opt/trt-hashstore-storage/migrations \
    /opt/trt-hashstore-capacity/bin /opt/trt-hashstore-capacity/logs \
    /opt/trt-hashstore-capacity/migrations \
    /opt/trt-hashstore-notification/bin /opt/trt-hashstore-notification/logs \
    /opt/trt-hashstore-notification/migrations \
    /opt/trt-hashstore-audit/bin /opt/trt-hashstore-audit/logs \
    /opt/trt-hashstore-audit/migrations \
    /data/hashstore/chunks \
    /var/www/hashstore \
    /var/lib/nats/jetstream

# Set directory ownership matching VPS deployer
RUN chown -R trt-auth:trt-auth /opt/trt-auth \
    && chown -R trt-hashstore:trt-hashstore /opt/trt-hashstore \
    && chown -R trt-hashstore-storage:trt-hashstore-storage \
        /opt/trt-hashstore-storage /data/hashstore/chunks \
    && chown -R trt-hashstore-capacity:trt-hashstore-capacity \
        /opt/trt-hashstore-capacity \
    && chown -R trt-hashstore-notification:trt-hashstore-notification \
        /opt/trt-hashstore-notification \
    && chown -R trt-hashstore-audit:trt-hashstore-audit /opt/trt-hashstore-audit

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

# Expose ports: Nginx(80), PostgreSQL(5432), Redis(6379), NATS(4222)
EXPOSE 80 5432 6379 4222

ENTRYPOINT ["/entrypoint.sh"]

-- PostgreSQL initialization — all TRT product databases and users
-- matching the VPS deployer layout.

CREATE DATABASE trauth;

-- Pre-create uuid-ossp extension in trauth (requires superuser)
\c trauth
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c postgres
CREATE DATABASE hashstore_api;
CREATE DATABASE hashstore_storage;
CREATE DATABASE hashstore_capacity;
CREATE DATABASE hashstore_notification;
CREATE DATABASE hashstore_audit;
CREATE DATABASE trtpay;

-- Pre-create pgcrypto extension in trtpay (requires superuser)
\c trtpay
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

\c postgres

-- Application users (DML only — no CREATE/ALTER/DROP)
CREATE USER trt_auth_app WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_app WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_storage_app WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_capacity_app WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_notifier_app WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_notifications_app WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_audit_app WITH PASSWORD 'dev_password';
CREATE USER trt_payments_app WITH PASSWORD 'dev_password';

-- Migrator users (DDL — for running migrations)
CREATE USER trt_auth_migrator WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_migrator WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_storage_migrator WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_capacity_migrator WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_notifier_migrator WITH PASSWORD 'dev_password';
CREATE USER trt_hashstore_audit_migrator WITH PASSWORD 'dev_password';
CREATE USER trt_payments_migrator WITH PASSWORD 'dev_password';

-- Grant migrator users full DDL and app users DML + sequence usage
\c trauth
GRANT ALL ON SCHEMA public TO trt_auth_migrator;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_auth_migrator IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO trt_auth_app;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_auth_migrator IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO trt_auth_app;

\c hashstore_api
GRANT ALL ON SCHEMA public TO trt_hashstore_migrator;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_migrator IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO trt_hashstore_app;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_migrator IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO trt_hashstore_app;

\c hashstore_storage
GRANT ALL ON SCHEMA public TO trt_hashstore_storage_migrator;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_storage_migrator IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO trt_hashstore_storage_app;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_storage_migrator IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO trt_hashstore_storage_app;

\c hashstore_capacity
GRANT ALL ON SCHEMA public TO trt_hashstore_capacity_migrator;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_capacity_migrator IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO trt_hashstore_capacity_app;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_capacity_migrator IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO trt_hashstore_capacity_app;

\c hashstore_notification
GRANT ALL ON SCHEMA public TO trt_hashstore_notifier_migrator;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_notifier_migrator IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO trt_hashstore_notifier_app;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_notifier_migrator IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO trt_hashstore_notifier_app;
-- Notifications API shares this database (read/write on migrator-created tables)
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_notifier_migrator IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO trt_hashstore_notifications_app;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_notifier_migrator IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO trt_hashstore_notifications_app;

\c hashstore_audit
GRANT ALL ON SCHEMA public TO trt_hashstore_audit_migrator;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_audit_migrator IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO trt_hashstore_audit_app;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_hashstore_audit_migrator IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO trt_hashstore_audit_app;

\c trtpay
GRANT ALL ON SCHEMA public TO trt_payments_migrator;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_payments_migrator IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO trt_payments_app;
ALTER DEFAULT PRIVILEGES FOR ROLE trt_payments_migrator IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO trt_payments_app;

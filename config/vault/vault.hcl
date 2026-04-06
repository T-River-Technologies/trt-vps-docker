ui = false

listener "tcp" {
  address     = "127.0.0.1:8200"
  tls_disable = 1
}

storage "raft" {
  path    = "/opt/vault/data"
  node_id = "dev-1"
}

disable_mlock = true
log_level     = "warn"
api_addr      = "http://127.0.0.1:8200"
cluster_addr  = "http://127.0.0.1:8201"

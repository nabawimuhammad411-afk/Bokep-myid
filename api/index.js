export default function handler(req, res) {
  res.status(200).json({
    message: "IYNN API — Big IP Pool + Big UA Pool + Non Stuck",
    status: "active",
    game_version: "2.132.4",
    release_version: "OB55",
    max_count: 15,
    config: {
      name_prefix: "IYNN",
      password_prefix: "IYNN",
      region: "ID"
    },
    endpoints: {
      "/gen": "GET ?count=N&region=ID&ghost=false",
      "/health": "GET health check",
      "/stats": "GET statistics"
    },
    pools: {
      device_models: 25,
      ip_pool_size: 64365,
      ua_pool_size: 1321
    }
  });
}

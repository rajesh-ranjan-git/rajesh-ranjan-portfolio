const os = require("os");
const path = require("path");

const APP_ROOT = path.join(os.homedir(), "portfolio");
const CURRENT = path.join(APP_ROOT, "current");

module.exports = {
  apps: [
    {
      name: "portfolio",
      namespace: "rajesh-ranjan-portfolio",

      cwd: CURRENT,
      script: path.join(CURRENT, "server.js"),
      node_args: `--env-file=${path.join(CURRENT, ".env.production")}`,

      instances: 1,
      exec_mode: "fork",

      env: {
        NODE_ENV: "production",
        PORT: 1995,
        HOSTNAME: "0.0.0.0",
      },

      autorestart: true,
      restart_delay: 5000,

      watch: false,

      max_memory_restart: "512M",

      out_file: path.join(APP_ROOT, "logs", "portfolio-out.log"),
      error_file: path.join(APP_ROOT, "logs", "portfolio-error.log"),
      merge_logs: true,
      kill_timeout: 5000,

      time: false,
    },
  ],
};

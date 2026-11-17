// pm2 config for the standalone production server.
//
// Server layout (created by .github/workflows/deploy.yml):
//   ~/portfolio/releases/<id>/   one unpacked standalone package per deploy
//   ~/portfolio/current          link to the release that is live
//   ~/portfolio/logs/            pm2 log files
//
// Each release carries its own .env.production, written from the
// PORTFOLIO_ENV_PRODUCTION GitHub secret. Node loads it with --env-file,
// because the standalone server does not run next.config.ts.

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
        // The standalone server binds to $HOSTNAME, which Linux shells often
        // set to the machine name. Pin it so the app listens on all interfaces.
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

      // The app writes its own ISO timestamp in every JSON log line.
      time: false,
    },
  ],
};

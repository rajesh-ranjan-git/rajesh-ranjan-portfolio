module.exports = {
  apps: [
    {
      name: "portfolio",
      namespace: "rajesh-ranjan-portfolio",

      cwd: "/home/ubuntu/portfolio/rajesh-ranjan-portfolio",

      script: "npm",
      args: "start",

      instances: 2,
      exec_mode: "cluster",

      env: {
        NODE_ENV: "production",
        PORT: 1995,
      },

      autorestart: true,
      restart_delay: 5000,

      watch: false,

      max_memory_restart: "512M",

      out_file: "/home/ubuntu/portfolio/logs/portfolio-out.log",
      error_file: "/home/ubuntu/portfolio/logs/portfolio-error.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",

      kill_timeout: 5000,

      time: true,
    },
  ],
};

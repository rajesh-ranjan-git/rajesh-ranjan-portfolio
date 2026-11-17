import type { NextConfig } from "next";
import { config as loadEnv } from "dotenv";
import { existsSync } from "fs";
import logger from "./src/services/logger/logger";

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

const envFilePath = `./env/.env.${mode}`;

if (existsSync(envFilePath)) {
  loadEnv({ path: envFilePath });
  logger.info(`🔵 Loaded env file: ${envFilePath}`);
} else {
  logger.warn(`🔴 Env file not found: ${envFilePath}`);
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,

  // Builds a self-contained server in .next/standalone, so production needs
  // no source code, git history or full node_modules.
  // scripts/prepare-standalone.mjs adds the static files after each build.
  output: "standalone",

  poweredByHeader: false,
  compress: true,

  async redirects() {
    return [
      {
        source: "/project",
        destination: "/#portfolio",
        permanent: false,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/service-worker/service-worker.js",
        headers: [
          {
            key: "Service-Worker-Allowed",
            value: "/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

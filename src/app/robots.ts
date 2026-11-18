import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/seo.config";

// Cloudflare's managed robots.txt prepends its AI-crawler rules to this file.
const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/" },
  sitemap: absoluteUrl("/sitemap.xml"),
});

export default robots;

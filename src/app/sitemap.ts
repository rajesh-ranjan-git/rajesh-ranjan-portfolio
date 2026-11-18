import type { MetadataRoute } from "next";
import { portfolio } from "@/config/owner.config";
import { absoluteUrl, seoConfig } from "@/config/seo.config";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: absoluteUrl("/"),
    changeFrequency: "monthly",
    priority: 1,
    images: [absoluteUrl(seoConfig.ogImage.url)],
  },
  ...portfolio.map((project) => ({
    url: absoluteUrl(`/project/${project.slug}`),
    changeFrequency: "yearly" as const,
    priority: 0.7,
    images: (project.screens ?? []).map((screen) => absoluteUrl(screen)),
  })),
];

export default sitemap;

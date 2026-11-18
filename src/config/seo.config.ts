import { basicDetails, education } from "@/config/owner.config";
import { getFullName } from "@/helpers/owner.helpers";

const fullName = getFullName();

export const SITE_URL = "https://rajeshranjan.dev";

export const seoConfig = {
  siteName: fullName,
  locale: "en_IN",
  title: `${fullName} – ${basicDetails.designation} | Next.js, React, Node.js`,
  titleTemplate: `%s | ${fullName}`,
  description: `${fullName} – ${basicDetails.designation} at ${basicDetails.organization}, ${basicDetails.location.city}. Builds high-traffic media platforms with Next.js, React, Node.js, TypeScript and AWS.`,
  ogImage: {
    url: "/assets/og/home.jpg",
    width: 1200,
    height: 630,
    alt: `${fullName} – ${basicDetails.designation}`,
  },
  projectOgImagePath: (slug: string) => `/assets/og/projects/${slug}.jpg`,
  twitterHandle: basicDetails.social.twitter
    ? `@${basicDetails.social.twitter}`
    : undefined,
  // Professional profiles only; these tell Google which accounts belong to this person.
  sameAs: [
    basicDetails.social.github &&
      `https://github.com/${basicDetails.social.github}`,
    basicDetails.social.linkedin &&
      `https://www.linkedin.com/in/${basicDetails.social.linkedin}`,
    basicDetails.social.twitter && `https://x.com/${basicDetails.social.twitter}`,
  ].filter(Boolean) as string[],
  knowsAbout: [
    "Full Stack Development",
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "AWS",
    "System Architecture",
    "Web Performance",
    "Search Engine Optimization",
  ],
  alumniOf: education.college.name,
} as const;

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

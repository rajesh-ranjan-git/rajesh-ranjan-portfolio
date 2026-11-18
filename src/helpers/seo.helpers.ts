import { basicDetails } from "@/config/owner.config";
import { SITE_URL, absoluteUrl, seoConfig } from "@/config/seo.config";
import { getFullName } from "@/helpers/owner.helpers";
import { PortfolioItemType } from "@/types/types/sections.types";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const getPersonSchema = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: getFullName(),
  givenName: basicDetails.firstName,
  familyName: basicDetails.lastName,
  url: SITE_URL,
  image: absoluteUrl(basicDetails.images.profileImage),
  jobTitle: basicDetails.designation,
  description: basicDetails.description,
  worksFor: {
    "@type": "Organization",
    name: basicDetails.organization,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: basicDetails.location.city,
    addressRegion: basicDetails.location.state,
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: seoConfig.alumniOf,
  },
  knowsAbout: seoConfig.knowsAbout,
  sameAs: seoConfig.sameAs,
});

const getWebsiteSchema = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: seoConfig.siteName,
  alternateName: [`${getFullName()} Portfolio`, "rajeshranjan.dev"],
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
});

export const getHomeJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getWebsiteSchema(),
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: seoConfig.title,
      description: seoConfig.description,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: getPersonSchema(),
    },
  ],
});

export const getProjectJsonLd = (project: PortfolioItemType) => {
  const projectUrl = absoluteUrl(`/project/${project.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}#project`,
        name: project.title,
        description: project.description,
        abstract: project.overview,
        url: projectUrl,
        genre: project.category,
        image: project.screens?.map((screen) => absoluteUrl(screen)),
        keywords: project.techStack?.flatMap((group) => group.tech).join(", "),
        sameAs: [project.liveUrl, project.githubUrl].filter(Boolean),
        author: {
          "@type": "Person",
          "@id": PERSON_ID,
          name: getFullName(),
          url: SITE_URL,
        },
        isPartOf: { "@id": WEBSITE_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: absoluteUrl("/#portfolio"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
    ],
  };
};

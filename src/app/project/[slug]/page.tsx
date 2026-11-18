import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolio } from "@/config/owner.config";
import { seoConfig } from "@/config/seo.config";
import { getProjectJsonLd } from "@/helpers/seo.helpers";
import { PortfolioDetailsPageProps } from "@/types/props/sections.props.types";
import PortfolioDetails from "@/components/portfolio/portfolio.details";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import SplashGate from "@/components/ui/splash/splash.gate";
import JsonLd from "@/components/seo/json.ld";

export const dynamicParams = false;

export const generateStaticParams = () =>
  portfolio.map((item) => ({ slug: item.slug }));

const getProject = (slug: string) =>
  portfolio.find((item) => item.slug === slug);

export async function generateMetadata({
  params,
}: PortfolioDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) return {};

  const path = `/project/${project.slug}`;
  const title = project.title;
  const description = project.description ?? project.overview;
  const image = {
    url: seoConfig.projectOgImagePath(project.slug),
    width: 1200,
    height: 630,
    alt: `${project.title} – project by ${seoConfig.siteName}`,
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      title: `${title} | ${seoConfig.siteName}`,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${seoConfig.siteName}`,
      description,
      creator: seoConfig.twitterHandle,
      images: [image.url],
    },
  };
}

const PortfolioDetailsPage = async ({ params }: PortfolioDetailsPageProps) => {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <JsonLd data={getProjectJsonLd(project)} />

      <SplashGate loadingText="Loading..." endingText="Welcome...">
        <main className="relative pt-10 md:pt-0 pl-0 md:pl-16 min-h-screen">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/#portfolio" },
              { label: project.title },
            ]}
          />

          <PortfolioDetails project={project} />
        </main>
      </SplashGate>
    </>
  );
};

export default PortfolioDetailsPage;

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolio } from "@/config/owner.config";
import { PortfolioDetailsPageProps } from "@/types/props/sections.props.types";
import PortfolioDetails from "@/components/portfolio/portfolio.details";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import SplashGate from "@/components/ui/splash/splash.gate";

export const dynamicParams = false;

export const generateStaticParams = () =>
  portfolio.map((item) => ({ id: String(item.id) }));

const getProject = (id: string) =>
  portfolio.find((item) => item.id === Number(id));

export async function generateMetadata({
  params,
}: PortfolioDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  const project = getProject(id);

  return {
    title: project?.title ?? "Project Title",
    description: project?.description ?? "Project Description",
  };
}

const PortfolioDetailsPage = async ({ params }: PortfolioDetailsPageProps) => {
  const { id } = await params;

  const project = getProject(id);

  if (!project) notFound();

  return (
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
  );
};

export default PortfolioDetailsPage;

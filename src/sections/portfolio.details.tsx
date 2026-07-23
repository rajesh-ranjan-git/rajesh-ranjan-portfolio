import { CarouselSlide } from "@/types/types/carousel.types";
import { PortfolioDetailsProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import PortfolioInformation from "@/components/portfolio/portfolio.information";
import PortfolioDetailedInformation from "@/components/portfolio/portfolio.detailed.information";
import Carousel from "@/components/ui/carousel/carousel";
import FadeIn from "@/components/ui/fade-in/fade.in";

const PortfolioDetails = ({ project }: PortfolioDetailsProps) => {
  const slides: CarouselSlide[] =
    project?.screens?.map((imageSrc) => ({
      imageSrc,
      alt: project.title,
    })) ?? [];

  return (
    <section>
      {project?.title ? (
        <SectionHeading title={`${project.title} Details`} />
      ) : null}

      <FadeIn delay={150} distance={40}>
        <div className="relative flex flex-col gap-8">
          {slides.length > 0 ? (
            <div className="w-full">
              <Carousel
                slides={slides}
                slidesPerViewOverride={1}
                autoPlay
                autoPlayInterval={3000}
                showArrows={false}
                dotsPosition="bottom-left"
                slideHeightClassName="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem]"
              />
            </div>
          ) : null}

          <PortfolioInformation project={project} />
        </div>
      </FadeIn>

      <PortfolioDetailedInformation project={project} />
    </section>
  );
};

export default PortfolioDetails;

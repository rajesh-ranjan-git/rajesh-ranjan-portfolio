"use client";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { categories, portfolio } from "@/config/owner.config";
import { PortfolioItemType } from "@/types/types/sections.types";
import { SectionProps } from "@/types/props/sections.props.types";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import PortfolioFilters from "@/components/portfolio/portfolio.filters";
import PortfolioCard from "@/components/portfolio/portfolio.card";
import FadeIn from "@/components/ui/fade-in/fade.in";
import FormButton from "@/components/ui/forms/form.button";

const Portfolio = ({ title, description }: SectionProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [shouldScroll, setShouldScroll] = useState<boolean>(false);

  const { scrollToSection } = useSectionNavigation({
    sectionIds: ["contact"],
  });

  const handleFilter = (item: string) => {
    setActiveFilter(item);
  };

  const handleShowMore = (scroll: boolean) => {
    setShowMore(!showMore);
    setShouldScroll(scroll);
  };

  const sortedPortfolio = portfolio.sort((a, b) => b.id - a.id);

  const filteredCards: PortfolioItemType[] =
    activeFilter === "all"
      ? sortedPortfolio
      : sortedPortfolio.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (shouldScroll) {
      scrollToSection("certificates");
    }
  }, [shouldScroll]);

  return (
    <section id="portfolio">
      <div
        className={`${showMore ? "max-h-content" : "max-h-240 md:max-h-180"}`}
        style={
          !showMore
            ? {
                maskImage:
                  "linear-gradient(to bottom, black 0%, black calc(100% - 120px), transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black calc(100% - 120px), transparent 100%)",
              }
            : undefined
        }
      >
        {title ? <SectionHeading title={title} /> : null}

        {description ? <SectionDescription description={description} /> : null}

        <FadeIn delay={150} threshold={0}>
          <PortfolioFilters
            filters={[...categories]}
            activeFilter={activeFilter}
            handleFilter={handleFilter}
          />
        </FadeIn>

        <div className="justify-between items-stretch gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {filteredCards.map((item, index) => (
            <FadeIn
              delay={150}
              threshold={0}
              className="h-full"
              key={`${item.title}-${index}`}
            >
              <PortfolioCard portfolioItem={item} />
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <FormButton
          variant="primary"
          size="sm"
          className="rounded-3xl min-w-36"
          onClick={() => handleShowMore(showMore)}
        >
          <span>Show&nbsp;{showMore ? "less" : "more"}</span>

          <FaChevronDown
            size={12}
            className={`${showMore ? "rotate-180 duration-300" : ""}`}
          />
        </FormButton>
      </div>
    </section>
  );
};

export default Portfolio;

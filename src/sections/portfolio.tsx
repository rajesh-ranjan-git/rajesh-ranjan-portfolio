"use client";

import { useState } from "react";
import { categories, portfolio } from "@/config/owner.config";
import { PortfolioItemType } from "@/types/types/sections.types";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import PortfolioFilters from "@/components/portfolio/portfolio.filters";
import PortfolioCard from "@/components/portfolio/portfolio.card";
import FadeIn from "@/components/ui/fade-in/fade.in";

const Portfolio = ({ title, description }: SectionProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFilter = (item: string) => {
    setActiveFilter(item);
  };

  const sortedPortfolio = portfolio.sort((a, b) => b.id - a.id);

  const filteredCards: PortfolioItemType[] =
    activeFilter === "all"
      ? sortedPortfolio
      : sortedPortfolio.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <FadeIn delay={150} distance={40}>
        <PortfolioFilters
          filters={[...categories]}
          activeFilter={activeFilter}
          handleFilter={handleFilter}
        />
      </FadeIn>

      <div className="justify-between items-center gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {filteredCards.map((item, index) => (
          <FadeIn delay={150} distance={40} key={`${item.title}-${index}`}>
            <PortfolioCard portfolioItem={item} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

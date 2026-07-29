"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import portfolioStyles from "@/styles/portfolio.module.css";
import { PortfolioCardProps } from "@/types/props/sections.props.types";

const PortfolioCard = ({ portfolioItem }: PortfolioCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleTouchToggle = (event: React.PointerEvent) => {
    if (event.pointerType !== "touch") return;
    setIsRevealed((prev) => !prev);
  };

  return (
    <div className="group flex flex-col bg-fixed-dark shadow-[0_12px_20px_var(--color-surface-shadow)] border border-surface-border hover:border-surface-border-active rounded-2xl w-full h-full overflow-hidden transition-all duration-300">
      <div
        onPointerUp={handleTouchToggle}
        className={`group/image relative bg-fixed-dark rounded-b-xl aspect-1920/910 overflow-hidden transition-all duration-500 shrink-0 hover:rounded-b-none ${isRevealed ? "rounded-b-none" : ""}`}
      >
        <Image
          src={
            portfolioItem.thumbnail ?? "/assets/error/image-not-available.webp"
          }
          alt={portfolioItem.title}
          width={400}
          height={400}
          className={`w-full h-full object-cover object-top origin-top transition-all duration-1200 pointer-events-none group-hover/image:scale-300 ${isRevealed ? "scale-300" : ""}`}
        />
        <div
          className={`text-fixed-light absolute bg-fixed-dark/90 py-8 pr-14 pl-4 w-[110%] h-[110%] transition-all duration-1200 group-hover/image:opacity-100 group-hover/image:-translate-y-full ${isRevealed ? "opacity-100 -translate-y-full" : "opacity-0"}`}
        >
          <p
            className={`font-normal origin-left transition-all duration-1200 group-hover/image:scale-100 ${isRevealed ? "scale-100" : "scale-20"}`}
          >
            {portfolioItem.description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 bg-fixed-dark px-4 py-2 w-full">
        <Link
          href={
            portfolioItem.liveUrl
              ? portfolioItem.liveUrl
              : portfolioItem.githubUrl
          }
          target="_blank"
          className={`inline-block before:-bottom-px before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 min-w-0 truncate font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
        >
          {portfolioItem.title}
        </Link>
        <Link
          href={`/project/${portfolioItem.id}`}
          target="_blank"
          className={`inline-block before:-bottom-px before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;

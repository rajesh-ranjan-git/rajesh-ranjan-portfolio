import Image from "next/image";
import Link from "next/link";
import portfolioStyles from "@/styles/portfolio.module.css";
import { PortfolioCardProps } from "@/types/props/sections.props.types";

const PortfolioCard = ({ portfolioItem }: PortfolioCardProps) => {
  return (
    <div className="group bg-fixed-dark shadow-[0_12px_20px_var(--color-surface-shadow)] border border-surface-border hover:border-surface-border-active rounded-2xl w-full overflow-hidden transition-all duration-300">
      <div className="group/image relative bg-fixed-dark rounded-b-xl hover:rounded-b-none overflow-hidden transition-all duration-500">
        <Image
          src={
            portfolioItem.thumbnail ?? "/assets/error/image-not-available.webp"
          }
          alt={portfolioItem.title}
          width={400}
          height={400}
          className="w-full h-full object-cover object-top group-hover/image:scale-300 origin-top transition-all duration-1200 pointer-events-none"
        />
        <div className="text-fixed-light absolute bg-fixed-dark/90 opacity-0 group-hover/image:opacity-100 py-10 pr-14 pl-4 w-[110%] h-[110%] transition-all group-hover/image:-translate-y-full duration-1200">
          <p className="font-normal scale-20 group-hover/image:scale-100 origin-left transition-all duration-1200">
            {portfolioItem.description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-fixed-dark px-4 py-2 w-full">
        <Link
          href={
            portfolioItem.liveUrl
              ? portfolioItem.liveUrl
              : portfolioItem.githubUrl
          }
          target="_blank"
          className={`inline-block before:-bottom-px before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
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

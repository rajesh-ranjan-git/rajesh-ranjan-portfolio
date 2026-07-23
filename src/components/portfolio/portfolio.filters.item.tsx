import portfolioStyles from "@/styles/portfolio.module.css";
import { PortfolioFiltersItemProps } from "@/types/props/sections.props.types";

const PortfolioFiltersItem = ({
  item,
  isActive,
  handleFilter,
}: PortfolioFiltersItemProps) => {
  return (
    <li
      className={`inline-block before:-bottom-px before:left-0 before:absolute relative px-4 before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink cursor-pointer ${isActive ? `before:w-full ${portfolioStyles.link_mask_active}` : ""} ${portfolioStyles.link_mask}`}
      onClick={() => handleFilter(item)}
    >
      {item}
    </li>
  );
};

export default PortfolioFiltersItem;

import { PortfolioFiltersProps } from "@/types/props/sections.props.types";
import PortfolioFiltersItem from "@/components/portfolio/portfolio.filters.item";

const PortfolioFilters = ({
  filters,
  activeFilter,
  handleFilter,
}: PortfolioFiltersProps) => {
  return (
    <div className="flex justify-center items-center w-full">
      <ul className="flex flex-wrap justify-center items-center gap-4 bg-fixed-dark mx-auto mb-16 px-4 py-2 border border-surface-border hover:border-surface-border-hover rounded-xl w-max text-center transition-all duration-500">
        <PortfolioFiltersItem
          item="all"
          isActive={activeFilter === "all"}
          handleFilter={handleFilter}
        />

        {filters.map((item, index) => (
          <PortfolioFiltersItem
            key={`${item}-${index}`}
            item={item}
            isActive={activeFilter === item}
            handleFilter={handleFilter}
          />
        ))}
      </ul>
    </div>
  );
};

export default PortfolioFilters;

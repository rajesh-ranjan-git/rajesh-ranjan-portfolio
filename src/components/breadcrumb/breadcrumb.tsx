import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { BreadcrumbProps } from "@/types/props/common.props.types";

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="px-(--section-padding-x) pt-8 md:pt-6"
    >
      <ol className="flex flex-wrap items-center text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-primary hover:underline transition-colors hover:text-accent-blue"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-medium text-secondary"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="mx-2 text-secondary select-none">
                  <FaChevronRight size={10} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

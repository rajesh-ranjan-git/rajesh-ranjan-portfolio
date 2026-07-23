import aboutStyles from "@/styles/about.module.css";
import {
  FloatingBadgeFloatType,
  FloatingBadgePositionType,
} from "@/types/types/common.types";
import { FloatingBadgeProps } from "@/types/props/common.props.types";

const FloatingBadge = ({
  position,
  type,
  duration = 3,
  textColor,
  bgColor,
  className,
  children,
}: FloatingBadgeProps) => {
  const getBadgePosition = (position?: FloatingBadgePositionType) => {
    switch (position) {
      case "top-left":
        return "top-8 md:top-12 -left-8 md:-left-12";

      case "top-right":
        return "top-8 md:top-12 -right-12 md:-right-24";

      case "top-center":
        return "top-8 md:top-12 left-1/2 -translate-x-1/2";

      case "middle-left":
        return "top-1/2 -translate-y-1/2 -left-8 md:-left-12";

      case "middle-right":
        return "top-1/2 -translate-y-1/2 -right-12 md:-right-24";

      case "middle-center":
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

      case "bottom-left":
        return "bottom-8 md:bottom-12 sm:bottom-16 -left-8 md:-left-12";

      case "bottom-right":
        return "bottom-8 md:bottom-12 sm:bottom-16 -right-12 md:-right-24";

      case "bottom-center":
        return "bottom-8 md:bottom-12 left-1/2 -translate-x-1/2";

      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  };

  const getBadgeFloatingType = (type?: FloatingBadgeFloatType) => {
    switch (type) {
      case "float-x":
        return aboutStyles.float_x;

      case "float-x-reverse":
        return aboutStyles.float_x_reverse;

      case "float-y":
        return aboutStyles.float_y;

      case "float-y-reverse":
        return aboutStyles.float_y_reverse;

      case "float-diagonal":
        return aboutStyles.float_diagonal;

      case "float-diagonal-reverse":
        return aboutStyles.float_diagonal_reverse;

      default:
        return aboutStyles.float_x;
    }
  };

  return (
    <div
      style={
        {
          "--float-duration": `${duration}s`,
        } as React.CSSProperties
      }
      className={`absolute p-1 rounded-[28px] sm:rounded-[36px] font-arima font-bold text-lg sm:text-xl border border-accent-blue/80 whitespace-nowrap shadow-[0_12px_20px_var(--color-surface-shadow)] duration-500 ${textColor ? textColor : "text-alternate-primary"} ${bgColor ? bgColor : "bg-alternate-bg"} ${getBadgePosition(position)} ${getBadgeFloatingType(type)} ${className}`}
    >
      {children || "Badge"}
    </div>
  );
};

export default FloatingBadge;

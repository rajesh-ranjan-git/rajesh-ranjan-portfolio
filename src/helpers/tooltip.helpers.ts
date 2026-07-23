import { TooltipPositionType } from "@/types/types/tooltip.types";

export const getTooltipOffset = (position: TooltipPositionType) => {
  switch (position) {
    case "top":
      return { x: 0, y: 6 };
    case "bottom":
      return { x: 0, y: -6 };
    case "left":
      return { x: 6, y: 0 };
    case "right":
      return { x: -6, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

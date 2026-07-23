import { ReactNode } from "react";
import { TooltipPositionType } from "@/types/types/tooltip.types";

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: TooltipPositionType;
  delay?: number;
  arrow?: boolean;
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
}

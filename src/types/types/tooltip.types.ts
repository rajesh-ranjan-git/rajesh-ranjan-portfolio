import { tooltipPositionsConfig } from "@/config/tooltip.config";

export type TooltipPositionType =
  (typeof tooltipPositionsConfig)[keyof typeof tooltipPositionsConfig];

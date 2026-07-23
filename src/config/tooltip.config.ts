export const tooltipPositionsConfig = {
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
} as const;

export const tooltipDelayConfig = {
  immediate: 0,
  fast: 100,
  default: 300,
  slow: 600,
} as const;

export const tooltipPositionClassesConfig = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
} as const;

export const tooltipOriginClassesConfig = {
  top: "origin-bottom",
  bottom: "origin-top",
  left: "origin-right",
  right: "origin-left",
} as const;

export const tooltipArrowPositionClassesConfig = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-[5px]",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-[5px]",
  left: "left-full top-1/2 -translate-y-1/2 -ml-[5px]",
  right: "right-full top-1/2 -translate-y-1/2 -mr-[5px]",
} as const;

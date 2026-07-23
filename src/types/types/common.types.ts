import { themeConfig } from "@/config/common.config";

export type ThemeType = keyof typeof themeConfig;

export type BreadcrumbItemType = {
  label: string;
  href?: string;
};

export type FloatingBadgePositionType =
  | "top-left"
  | "top-right"
  | "top-center"
  | "middle-left"
  | "middle-right"
  | "middle-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export type FloatingBadgeFloatType =
  | "float-x"
  | "float-x-reverse"
  | "float-y"
  | "float-y-reverse"
  | "float-diagonal"
  | "float-diagonal-reverse";

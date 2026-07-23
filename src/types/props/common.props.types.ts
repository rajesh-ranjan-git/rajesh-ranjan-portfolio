import { ReactNode } from "react";
import {
  BreadcrumbItemType,
  FloatingBadgePositionType,
  FloatingBadgeFloatType,
} from "@/types/types/common.types";

export interface ReactNodeProps {
  children: ReactNode;
}

export interface BannerProps {
  nodeVersion: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItemType[];
}

export interface ButtonProps {
  btnTextSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  variant?: "mask-1" | "mask-2";
  color: string;
  children: string | ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface BackButtonProps {
  back: boolean;
}

export interface TypewriterProps {
  words: readonly string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export interface BackdropOverlayProps {
  when: boolean;
  callback: () => void;
}

export interface FloatingBadgeProps {
  position?: FloatingBadgePositionType;
  type?: FloatingBadgeFloatType;
  duration?: number;
  textColor?: string;
  bgColor?: string;
  className?: string;
  children?: string | ReactNode;
}

export interface ImageBackgroundProps {
  className?: string;
}

export interface SocialMediaProps {
  section?: "greetings" | "contact";
}

export interface CardProps {
  translate?: "top" | "bottom" | "right" | "left";
  scale?: "top" | "bottom" | "right" | "left" | "all";
  animateBorder?: boolean;
  className?: string;
  children: ReactNode;
}

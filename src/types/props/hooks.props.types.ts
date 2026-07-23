import { ReactNode, RefObject } from "react";
import { ValidatorType } from "@/types/types/hooks.types";

export interface UseInViewOptionsProps {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export interface UseInputFieldOptionsProps<T> {
  initialValue: T;
  validate: ValidatorType<T>;
  parse?: (val: string) => T;
}

export interface UseOutsideClickProps {
  ref: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];
  when: boolean;
  eventType?: "click" | "mousedown";
  defer?: boolean;
  callback: () => void;
}

export interface UseScrollVisibilityProps {
  threshold?: number;
  useViewportHeight?: boolean;
}

export interface UseSectionNavigationProps {
  sectionIds: string[];
  rootMargin?: string;
  threshold?: number | number[];
}

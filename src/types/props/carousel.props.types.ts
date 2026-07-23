import { CarouselSlide } from "@/types/types/carousel.types";

export type CarouselDotsPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface CarouselProps {
  slides: readonly CarouselSlide[];
  slidesPerViewOverride?: number;
  slideHeightClassName?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  dotsPosition?: CarouselDotsPosition;
  rounded?: boolean;
  scale?: "top" | "bottom" | "right" | "left" | "all";
  className?: string;
}

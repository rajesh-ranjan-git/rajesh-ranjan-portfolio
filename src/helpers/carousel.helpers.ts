import { BREAKPOINTS } from "@/constants/carousel.constants";

export const getSlidesPerView = (width: number): number => {
  if (width >= BREAKPOINTS.xl) return 2;
  if (width >= BREAKPOINTS.lg) return 2;
  return 1;
};

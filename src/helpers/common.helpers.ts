import {
  SCROLL_DURATION_MS,
  SCROLL_TOLERANCE_PX,
} from "@/constants/common.constants";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const scrollElementIntoViewSmoothly = (element: HTMLElement) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }

  const startTime = performance.now();
  let previousEasedProgress = 0;

  const step = (now: number) => {
    const remaining = element.getBoundingClientRect().top;
    const progress = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);

    if (progress >= 1) {
      if (Math.abs(remaining) > SCROLL_TOLERANCE_PX) {
        window.scrollBy({ top: remaining, behavior: "instant" });
      }
      return;
    }

    const easedProgress = easeOutCubic(progress);
    const frameFraction =
      (easedProgress - previousEasedProgress) / (1 - previousEasedProgress);
    previousEasedProgress = easedProgress;

    window.scrollBy({ top: remaining * frameFraction, behavior: "instant" });
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

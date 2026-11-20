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

export const createSeededRandom = (seed: number) => {
  let state = seed >>> 0;

  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

/**
 * Milliseconds since the browser first painted this document — i.e. since
 * server-rendered content (and its CSS animations) became visible, which can
 * be well before hydration. Returns 0 when the Paint Timing API has no entry.
 */
export const getTimeSinceFirstPaint = () => {
  const paints = performance.getEntriesByType("paint");
  const firstPaint =
    paints.find((entry) => entry.name === "first-paint") ??
    paints.find((entry) => entry.name === "first-contentful-paint");

  return firstPaint ? Math.max(0, performance.now() - firstPaint.startTime) : 0;
};

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export const getFocusableElements = (container: HTMLElement) =>
  Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter((element) => !element.closest("[inert]"));

// Moves keyboard focus to a section's heading (or the section itself) after
// in-page navigation, so the next Tab continues from there.
export const focusSection = (section: HTMLElement) => {
  const target =
    section.querySelector<HTMLElement>("h1, h2") ?? section;

  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");

  target.focus({ preventScroll: true });
};

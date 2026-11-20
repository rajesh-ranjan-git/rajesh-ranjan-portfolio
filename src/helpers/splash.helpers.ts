import { getTimeSinceFirstPaint } from "@/helpers/common.helpers";

// Length of the loading-text → ending-text scramble inside the splash.
export const SPLASH_SCRAMBLE_DURATION = 250;

/**
 * When to start the splash text scramble and when to close the splash, both
 * in ms from now.
 *
 * The schedule is counted from first paint, when the server-rendered splash
 * appears: loading text for the first half, the scramble centred on the
 * midpoint, the ending text for the rest. The scramble and the close are both
 * driven by JS, so neither can happen before hydration. When hydration lands
 * late, the second half is pushed back instead of cut, so the ending text
 * still gets its full share of the splash.
 */
export const getSplashTimeline = (duration: number) => {
  const elapsed = getTimeSinceFirstPaint();
  const scrambleAt = duration / 2 - SPLASH_SCRAMBLE_DURATION / 2;
  const scrambleDelay = Math.max(0, scrambleAt - elapsed);

  // On time: both terms equal `duration - elapsed`. Late: the second wins.
  const closeDelay = Math.max(
    duration - elapsed,
    scrambleDelay + (duration - scrambleAt),
  );

  return { scrambleDelay, closeDelay };
};

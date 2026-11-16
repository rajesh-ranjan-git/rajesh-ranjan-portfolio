import { useSyncExternalStore } from "react";
import { ScreenWidthType } from "@/types/types/hooks.types";
import {
  MOBILE_MAX_SCREEN_WIDTH,
  TABLET_MAX_SCREEN_WIDTH,
} from "@/constants/common.constants";

type BreakpointType = "mobile" | "tablet" | "desktop" | "unknown";

const MOBILE_QUERY = `(max-width: ${MOBILE_MAX_SCREEN_WIDTH}px)`;
const DESKTOP_QUERY = `(min-width: ${TABLET_MAX_SCREEN_WIDTH + 1}px)`;

const subscribe = (onChange: () => void) => {
  const queries = [MOBILE_QUERY, DESKTOP_QUERY].map((query) =>
    window.matchMedia(query),
  );

  queries.forEach((query) => query.addEventListener("change", onChange));

  return () =>
    queries.forEach((query) => query.removeEventListener("change", onChange));
};

const getSnapshot = (): BreakpointType => {
  if (window.matchMedia(MOBILE_QUERY).matches) return "mobile";
  if (window.matchMedia(DESKTOP_QUERY).matches) return "desktop";
  return "tablet";
};

const getServerSnapshot = (): BreakpointType => "unknown";

const useScreenWidthCheck = (): ScreenWidthType => {
  const breakpoint = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return {
    isMobileScreenWidth: breakpoint === "mobile",
    isTabletScreenWidth: breakpoint === "tablet",
    isDesktopScreenWidth: breakpoint === "desktop",
  };
};

export default useScreenWidthCheck;

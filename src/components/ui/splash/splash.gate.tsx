"use client";

import { useEffect } from "react";
import { SplashGateProps } from "@/types/props/splash.props.types";
import useStore from "@/store/store";
import { getSplashTimeline } from "@/helpers/splash.helpers";
import { SPLASH_DURATION } from "@/config/common.config";
import SplashScreen from "@/components/ui/splash/splash.screen";

const SplashGate = ({
  children,
  loadingText = "Loading...",
  endingText = "Welcome...",
  backgroundColor = "var(--bg)",
  className = "",
  duration = SPLASH_DURATION,
}: SplashGateProps) => {
  const splash = useStore((state) => state.splash);
  const setSplash = useStore((state) => state.setSplash);

  useEffect(() => {
    // Skip the intro animation entirely for visitors who asked for less motion.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Counted from first paint, but never before the ending text has had its
    // turn — see getSplashTimeline.
    const remaining = reduceMotion ? 0 : getSplashTimeline(duration).closeDelay;

    const timer = setTimeout(() => setSplash(false), remaining);
    return () => clearTimeout(timer);
  }, [duration, setSplash]);

  useEffect(() => {
    document.documentElement.classList.toggle("splash-open", splash);
    document.body.classList.toggle("splash-open", splash);

    return () => {
      document.documentElement.classList.remove("splash-open");
      document.body.classList.remove("splash-open");
    };
  }, [splash]);

  useEffect(() => {
    if (splash) return;

    const hash = window.location.hash?.slice(1);
    if (!hash) return;

    document.getElementById(hash)?.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  }, [splash]);

  return (
    <>
      {children}

      {splash ? (
        <SplashScreen
          loadingText={loadingText}
          endingText={endingText}
          backgroundColor={backgroundColor}
          className={className}
          duration={duration}
          onSkip={() => setSplash(false)}
        />
      ) : null}
    </>
  );
};

export default SplashGate;

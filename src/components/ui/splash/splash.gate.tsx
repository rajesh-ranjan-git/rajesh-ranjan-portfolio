"use client";

import { useEffect } from "react";
import { SplashGateProps } from "@/types/props/splash.props.types";
import { useAppStore } from "@/store/store";
import SplashScreen from "@/components/ui/splash/splash.screen";

const SplashGate = ({
  children,
  loadingText = "Loading...",
  endingText = "Welcome...",
  backgroundColor = "#040b14",
  className = "",
  duration = 2000,
}: SplashGateProps) => {
  const splash = useAppStore((state) => state.splash);
  const setSplash = useAppStore((state) => state.setSplash);

  useEffect(() => {
    const timer = setTimeout(() => setSplash(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

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
        />
      ) : null}
    </>
  );
};

export default SplashGate;

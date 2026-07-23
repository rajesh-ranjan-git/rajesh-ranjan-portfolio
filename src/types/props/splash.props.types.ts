import type { ReactNode } from "react";

export interface SplashScreenProps {
  loadingText?: string;
  endingText?: string;
  backgroundColor?: string;
  className?: string;
  duration?: number;
}

export interface SplashLoaderProps {
  loadingText?: string;
  endingText?: string;
  duration?: number;
}

export interface SplashGateProps {
  children: ReactNode;
  loadingText?: string;
  endingText?: string;
  backgroundColor?: string;
  className?: string;
  duration?: number;
}

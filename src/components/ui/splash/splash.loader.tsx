"use client";

import { useEffect, useRef } from "react";
import splashStyles from "@/styles/splash.module.css";
import { FazerStyleType } from "@/types/types/splash.types";
import { SplashLoaderProps } from "@/types/props/splash.props.types";
import { ScrambleTextHandle } from "@/types/types/scramble.types";
import { createSeededRandom } from "@/helpers/common.helpers";
import {
  getSplashTimeline,
  SPLASH_SCRAMBLE_DURATION,
} from "@/helpers/splash.helpers";
import { SPLASH_DURATION } from "@/config/common.config";
import ScrambleText from "@/components/ui/scramble-text/scramble.text";

const random = createSeededRandom(20);

const FAZERS: FazerStyleType[] = Array.from({ length: 20 }, () => ({
  "--top": `${random() * 100}%`,
  "--width": `${12 + random() * 20}%`,
  "--duration": `${0.5 + random() * 0.7}s`,
  "--delay": `${-random() * 8}s`,
}));

const SplashLoader = ({
  loadingText = "Loading...",
  endingText = "Welcome...",
  duration = SPLASH_DURATION,
}: SplashLoaderProps) => {
  const scrambleRef = useRef<ScrambleTextHandle>(null);

  // Same timeline SplashGate closes on, so the ending text always shows.
  useEffect(() => {
    const timer = setTimeout(
      () => scrambleRef.current?.play(),
      getSplashTimeline(duration).scrambleDelay,
    );

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className="relative w-full h-full">
      <div
        className={`absolute inset-0 w-full h-full ${splashStyles.splash_longfazers}`}
      >
        {FAZERS.map((style, i) => (
          <span
            key={i}
            className="absolute bg-primary/60"
            style={style as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative flex flex-col justify-center items-center gap-4 w-full h-full">
        <div className={splashStyles.splash_fly}>
          <div className={`relative ${splashStyles.splash_body}`}>
            <span className={`absolute bg-primary ${splashStyles.splash_wing}`}>
              <span className="absolute bg-primary w-7.5 h-px" />
              <span className="absolute bg-primary w-7.5 h-px" />
              <span className="absolute bg-primary w-7.5 h-px" />
              <span className="absolute bg-primary w-7.5 h-px" />
            </span>
            <div className={`absolute w-0 h-0 ${splashStyles.splash_base}`}>
              <span className="absolute before:absolute after:absolute before:bg-primary before:rounded-full w-0 before:w-6 after:w-0 h-0 before:h-6 after:h-0" />
              <div
                className={`absolute w-5 h-3 bg-primary after:absolute after:w-3 after:h-3 after:bg-primary ${splashStyles.splash_face}`}
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className={`font-semibold text-primary whitespace-nowrap font-alkatra inline-block mt-8 leading-[1.15] ${splashStyles.splash_loader}`}
        >
          <ScrambleText
            ref={scrambleRef}
            trigger="manual"
            initialText={loadingText}
            finalText={endingText}
            duration={SPLASH_SCRAMBLE_DURATION}
          />
        </div>

        <div className="w-1/2 md:w-1/4">
          <span
            className={`inline-block relative w-0 after:absolute before:absolute before:opacity-0 after:opacity-0 ${splashStyles.splash_progress}`}
            style={
              {
                "--progress-duration": `${duration}ms`,
              } as React.CSSProperties
            }
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;

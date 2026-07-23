"use client";

import { useEffect, useState } from "react";
import splashStyles from "@/styles/splash.module.css";
import { FazerStyleType } from "@/types/types/splash.types";
import { SplashLoaderProps } from "@/types/props/splash.props.types";
import ScrambleText from "@/components/ui/scramble-text/scramble.text";

const SplashLoader = ({
  loadingText = "Loading...",
  endingText = "Welcome...",
  duration = 2000,
}: SplashLoaderProps) => {
  const [fazers, setFazers] = useState<FazerStyleType[]>([]);

  useEffect(() => {
    setFazers(
      Array.from({ length: 20 }, () => ({
        "--top": `${Math.random() * 100}%`,
        "--width": `${12 + Math.random() * 20}%`,
        "--duration": `${0.5 + Math.random() * 0.7}s`,
        "--delay": `${-Math.random() * 8}s`,
      })),
    );
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        className={`absolute inset-0 w-full h-full ${splashStyles.splash_longfazers}`}
      >
        {fazers.map((style, i) => (
          <span
            key={i}
            className="absolute bg-fixed-light/60"
            style={style as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative flex flex-col justify-center items-center gap-4 w-full h-full">
        <div className={splashStyles.splash_fly}>
          <div className={`relative ${splashStyles.splash_body}`}>
            <span
              className={`absolute bg-fixed-light ${splashStyles.splash_wing}`}
            >
              <span className="absolute bg-fixed-light w-7.5 h-px" />
              <span className="absolute bg-fixed-light w-7.5 h-px" />
              <span className="absolute bg-fixed-light w-7.5 h-px" />
              <span className="absolute bg-fixed-light w-7.5 h-px" />
            </span>
            <div className={`absolute w-0 h-0 ${splashStyles.splash_base}`}>
              <span className="absolute before:absolute after:absolute before:bg-fixed-light before:rounded-full w-0 before:w-6 after:w-0 h-0 before:h-6 after:h-0" />
              <div
                className={`absolute w-5 h-3 bg-fixed-light after:absolute after:w-3 after:h-3 after:bg-fixed-light ${splashStyles.splash_face}`}
              />
            </div>
          </div>
        </div>

        <h1
          className={`font-semibold text-fixed-light whitespace-nowrap font-alkatra inline-block mt-8 ${splashStyles.splash_loader}`}
        >
          <ScrambleText
            initialText={loadingText}
            finalText={endingText}
            delay={1000}
            duration={500}
          />
        </h1>

        <div className="w-1/2 md:w-1/4">
          <span
            className={`inline-block relative w-0 after:absolute before:absolute before:opacity-0 after:opacity-0 ${splashStyles.splash_progress}`}
            style={
              {
                "--progress-duration": `${duration + 1000}ms`,
              } as React.CSSProperties
            }
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;

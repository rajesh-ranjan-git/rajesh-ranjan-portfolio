"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { DEFAULT_CHARACTERS } from "@/constants/common.constants";
import { ScrambleChar, ScrambleTextHandle } from "@/types/types/scramble.types";
import { ScrambleTextProps } from "@/types/props/scramble.props.types";

const ScrambleText = forwardRef<ScrambleTextHandle, ScrambleTextProps>(
  (
    {
      initialText = "",
      finalText,
      trigger = "mount",
      scrambleSpeed = 40,
      duration = 1200,
      delay = 0,
      characters = DEFAULT_CHARACTERS,
      className = "",
      onComplete,
    },
    ref,
  ) => {
    const toDisplayChars = (text: string): ScrambleChar[] =>
      text.split("").map((char) => ({ char, settled: true }));

    const [displayChars, setDisplayChars] = useState<ScrambleChar[]>(() =>
      toDisplayChars(initialText),
    );
    const currentTextRef = useRef(initialText);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const randomChar = useCallback(
      () => characters[Math.floor(Math.random() * characters.length)],
      [characters],
    );

    const play = useCallback(() => {
      const from = currentTextRef.current;
      const length = Math.max(from.length, finalText.length);
      const totalFrames = Math.max(4, Math.round(duration / scrambleSpeed));
      const halfFrames = Math.max(2, Math.floor(totalFrames / 2));
      const queue = Array.from({ length }, (_, i) => ({
        to: finalText[i] ?? "",
        start: Math.floor(Math.random() * halfFrames),
        end: Math.floor(Math.random() * halfFrames) + halfFrames,
      }));

      if (intervalRef.current) clearInterval(intervalRef.current);

      let frame = 0;

      intervalRef.current = setInterval(() => {
        let settledCount = 0;

        const next = queue.map((item) => {
          if (frame >= item.end) {
            settledCount++;
            return { char: item.to, settled: true };
          }
          if (frame >= item.start) {
            return { char: randomChar(), settled: false };
          }
          return { char: "", settled: true };
        });

        setDisplayChars(next);
        frame++;

        if (settledCount === queue.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          currentTextRef.current = finalText;
          onComplete?.();
        }
      }, scrambleSpeed);
    }, [finalText, randomChar, scrambleSpeed, duration, onComplete]);

    useImperativeHandle(ref, () => ({ play }), [play]);

    useEffect(() => {
      let timeoutId: ReturnType<typeof setTimeout> | null = null;

      if (trigger === "mount" || trigger === "visible") {
        timeoutId = setTimeout(play, delay);
      }

      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [trigger, play, delay]);

    const hoverProps =
      trigger === "hover" ? { onMouseEnter: () => play() } : {};

    return (
      <span className={className} {...hoverProps}>
        {displayChars.map((item, index) => (
          <span key={index} className={item.settled ? "" : "opacity-60"}>
            {item.char}
          </span>
        ))}
      </span>
    );
  },
);

export default ScrambleText;

"use client";

import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import toastStyles from "@/styles/toast.module.css";
import {
  toastProgressDirectionConfig,
  variantConfig,
} from "@/config/toast.config";
import { ToastProps } from "@/types/props/toast.props.types";
import { getToastOffsetX } from "@/helpers/toast.helpers";

const ToastItem = ({
  toast,
  onRemove,
  position,
}: Omit<ToastProps, "index">) => {
  const [shouldExit, setShouldExit] = useState(false);
  // Paused while hovered or focused, so the message can be read (WCAG 2.2.1).
  const [isPaused, setIsPaused] = useState(false);
  const remainingRef = useRef(toast.duration);
  const config = variantConfig[toast.variant];
  const Icon = config.icon;

  useEffect(() => {
    if (shouldExit) {
      const removeTimer = setTimeout(() => onRemove(toast.id), 300);
      return () => clearTimeout(removeTimer);
    }

    if (isPaused) return;

    const startedAt = Date.now();
    const remaining = remainingRef;
    const exitTimer = setTimeout(() => setShouldExit(true), remaining.current);

    return () => {
      clearTimeout(exitTimer);
      remaining.current = Math.max(
        0,
        remaining.current - (Date.now() - startedAt),
      );
    };
  }, [shouldExit, isPaused, toast.id, onRemove]);

  const isLeftToRight =
    toast.toastProgressDirection === toastProgressDirectionConfig.leftToRight;

  const progressStyle = {
    "--toast-duration": `${toast.duration}ms`,
    transformOrigin: isLeftToRight ? "left" : "right",
    animationPlayState: isPaused ? "paused" : "running",
  } as React.CSSProperties;

  const offsetX = getToastOffsetX(position);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      style={{ "--toast-x": `${offsetX}px` } as React.CSSProperties}
      className={`relative flex flex-col shadow-[0_12px_20px_var(--color-surface-shadow)] backdrop-blur-xl p-0 border rounded-lg min-w-64 max-w-72 overflow-hidden text-primary ${config.cn} ${toastStyles.toastItem} ${shouldExit ? toastStyles.toastExit : ""}`}
    >
      {toast.toastProgressPosition === "top" && (
        <div className="h-1">
          <div
            className={`h-full ${config.progress} ${toastStyles.toastProgress}`}
            style={progressStyle}
          />
        </div>
      )}

      <div className="flex items-start gap-2 px-4 py-4">
        <Icon className={config.iconColor} size={20} aria-hidden="true" />

        <div className="pr-4">
          <p className={`${config.text} font-semibold text-sm`}>
            {toast.title}
          </p>
          <p className={`${config.text} opacity-90 m-0 text-xs`}>
            {toast.message}
          </p>
        </div>

        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={() => setShouldExit(true)}
          className={`${config.text} top-1 right-1 absolute flex justify-center items-center opacity-50 hover:opacity-100 focus-visible:opacity-100 rounded-md w-6 h-6 transition-opacity cursor-pointer`}
        >
          <IoClose size={18} aria-hidden="true" />
        </button>
      </div>

      {toast.toastProgressPosition === "bottom" && (
        <div className="bottom-0 absolute rounded-full w-full h-1">
          <div
            className={`h-full ${config.progress} ${toastStyles.toastProgress}`}
            style={progressStyle}
          />
        </div>
      )}
    </div>
  );
};

export default ToastItem;

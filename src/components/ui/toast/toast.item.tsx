"use client";

import { useEffect, useState } from "react";
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
  const [progress, setProgress] = useState(100);
  const config = variantConfig[toast.variant];
  const Icon = config.icon;

  useEffect(() => {
    const startTime = Date.now();
    const duration = toast.duration;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);

      if (remaining === 0) {
        clearInterval(interval);
        setShouldExit(true);
        setTimeout(() => onRemove(toast.id), 300);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [toast.id, toast.duration, onRemove]);

  const isLeftToRight =
    toast.toastProgressDirection === toastProgressDirectionConfig.leftToRight;

  const progressContainerStyle = isLeftToRight
    ? { justifyContent: "flex-start" }
    : { justifyContent: "flex-end" };

  const offsetX = getToastOffsetX(position);

  return (
    <div
      style={{ "--toast-x": `${offsetX}px` } as React.CSSProperties}
      className={`relative flex flex-col shadow-[0_12px_20px_var(--color-surface-shadow)] backdrop-blur-xl p-0 border rounded-lg min-w-64 max-w-72 overflow-hidden text-primary ${config.cn} ${toastStyles.toastItem} ${shouldExit ? toastStyles.toastExit : ""}`}
    >
      {toast.toastProgressPosition === "top" && (
        <div className="h-1" style={progressContainerStyle}>
          <div
            className={`h-full ${config.progress}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="flex items-start gap-2 px-4 py-4">
        <Icon className={config.iconColor} size={20} />

        <div className="pr-4">
          <p className={`${config.text} font-semibold text-sm`}>
            {toast.title}
          </p>
          <p className={`${config.text} opacity-90 m-0 text-xs`}>
            {toast.message}
          </p>
        </div>

        <button
          onClick={() => {
            setShouldExit(true);
            setTimeout(() => onRemove(toast.id), 300);
          }}
          className={`${config.text} top-1 right-1 absolute opacity-50 hover:opacity-100 p-0.5 transition-opacity`}
        >
          <IoClose size={18} />
        </button>
      </div>

      {toast.toastProgressPosition === "bottom" && (
        <div className="bottom-0 absolute rounded-full w-full h-1">
          <div
            className={`h-full ${config.progress}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default ToastItem;

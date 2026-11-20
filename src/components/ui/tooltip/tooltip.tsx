"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/tooltip.module.css";
import {
  tooltipArrowPositionClassesConfig,
  tooltipDelayConfig,
  tooltipOriginClassesConfig,
  tooltipPositionClassesConfig,
  tooltipPositionsConfig,
} from "@/config/tooltip.config";
import { TooltipProps } from "@/types/props/tooltip.props.types";
import { getTooltipOffset } from "@/helpers/tooltip.helpers";

const Tooltip = ({
  children,
  content,
  position = tooltipPositionsConfig.top,
  delay = tooltipDelayConfig.default,
  arrow = true,
  disabled = false,
  className = "",
  wrapperClassName = "",
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearShowTimeout = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
  }, []);

  const showTooltip = useCallback(() => {
    if (disabled || !content) return;
    clearShowTimeout();
    showTimeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  }, [clearShowTimeout, content, delay, disabled]);

  const hideTooltip = useCallback(() => {
    clearShowTimeout();
    setIsVisible(false);
  }, [clearShowTimeout]);

  useEffect(() => clearShowTimeout, [clearShowTimeout]);

  // Hover/focus content must be dismissible without moving the pointer
  // (WCAG 1.4.13).
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") hideTooltip();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, hideTooltip]);

  const offset = getTooltipOffset(position);

  return (
    <div
      className={`relative inline-flex gap-1 ${wrapperClassName}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {!disabled && content && (
        // Visual only: every trigger already carries this text in its own
        // accessible name, so screen readers would otherwise hear it twice.
        <span
          aria-hidden="true"
          style={
            {
              "--tooltip-x": `${offset.x}px`,
              "--tooltip-y": `${offset.y}px`,
            } as React.CSSProperties
          }
          className={`absolute z-20 ${tooltipPositionClassesConfig[position]} ${tooltipOriginClassesConfig[position]} ${styles.tooltip} ${isVisible ? `${styles.visible} pointer-events-auto` : "pointer-events-none"}`}
        >
          <span
            className={`block relative bg-alternate-bg shadow-lg shadow-surface-shadow px-3 py-1.5 border border-surface-border rounded-lg w-max max-w-64 text-alternate-primary text-xs font-semibold transition-colors duration-200 ${className}`}
          >
            {content}
          </span>

          {arrow && (
            <span
              className={`-z-10 absolute bg-alternate-bg border border-surface-border shadow-lg shadow-surface-shadow rounded-xs w-2.5 h-2.5 rotate-45 ${tooltipArrowPositionClassesConfig[position]}`}
            />
          )}
        </span>
      )}
    </div>
  );
};

export default Tooltip;

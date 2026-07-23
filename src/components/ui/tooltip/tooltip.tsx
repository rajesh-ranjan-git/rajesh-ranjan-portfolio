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

  const offset = getTooltipOffset(position);

  return (
    <span
      className={`relative inline-flex ${wrapperClassName}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {!disabled && content && (
        <span
          role="tooltip"
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
    </span>
  );
};

export default Tooltip;

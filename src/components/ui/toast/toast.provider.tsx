"use client";

import { useCallback, useEffect, useState } from "react";
import {
  toastPositionsConfig,
  toastProgressDirectionConfig,
  toastProgressPositionsConfig,
  toastVariantsConfig,
} from "@/config/toast.config";
import {
  ToastConfigType,
  ToastPositionType,
  ToastType,
} from "@/types/types/toast.types";
import { ReactNodeProps } from "@/types/props/common.props.types";
import useScreenWidthCheck from "@/hooks/useScreenWidthCheck";
import ToastContext from "@/components/ui/toast/toast.context";
import ToastContainer from "@/components/ui/toast/toast.container";

const ToastProvider = ({ children }: ReactNodeProps) => {
  const { isDesktopScreenWidth } = useScreenWidthCheck();

  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [position, setPosition] = useState<ToastPositionType>(
    toastPositionsConfig.topCenter,
  );

  const showToast = useCallback((config: ToastConfigType) => {
    const id = Math.random().toString(36).substring(2, 11);
    const newToast: ToastType = {
      id,
      title: config.title,
      message: config.message,
      variant: config.variant || toastVariantsConfig.info,
      duration: config.duration || 3000,
      toastProgressPosition:
        config.toastProgressPosition || toastProgressPositionsConfig.bottom,
      toastProgressDirection:
        config.toastProgressDirection ||
        toastProgressDirectionConfig.leftToRight,
    };

    setToasts((prev) => [newToast, ...prev]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    setPosition(
      isDesktopScreenWidth
        ? toastPositionsConfig.bottomRight
        : toastPositionsConfig.topCenter,
    );
  }, [isDesktopScreenWidth]);

  return (
    <ToastContext.Provider
      value={{ toasts, position, setPosition, showToast, removeToast }}
    >
      {children}
      <ToastContainer
        toasts={toasts}
        position={position}
        onRemove={removeToast}
      />
    </ToastContext.Provider>
  );
};

export default ToastProvider;

"use client";

import { useCallback, useMemo, useState } from "react";
import {
  toastPositionsConfig,
  toastProgressDirectionConfig,
  toastProgressPositionsConfig,
  toastVariantsConfig,
} from "@/config/toast.config";
import { ToastConfigType, ToastType } from "@/types/types/toast.types";
import { ReactNodeProps } from "@/types/props/common.props.types";
import useScreenWidthCheck from "@/hooks/useScreenWidthCheck";
import ToastContext from "@/components/ui/toast/toast.context";
import ToastContainer from "@/components/ui/toast/toast.container";

const ToastProvider = ({ children }: ReactNodeProps) => {
  const { isDesktopScreenWidth } = useScreenWidthCheck();

  const [toasts, setToasts] = useState<ToastType[]>([]);

  const position = isDesktopScreenWidth
    ? toastPositionsConfig.bottomRight
    : toastPositionsConfig.topCenter;

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

  const contextValue = useMemo(
    () => ({ toasts, position, showToast, removeToast }),
    [toasts, position, showToast, removeToast],
  );

  return (
    <ToastContext.Provider value={contextValue}>
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

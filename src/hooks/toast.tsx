"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { IoClose } from "react-icons/io5";
import styles from "@/styles/toast.module.css";
import {
  positionStylesConfig,
  toastPositionsConfig,
  toastProgressDirectionConfig,
  toastProgressPositionsConfig,
  toastVariantsConfig,
  variantConfig,
} from "@/config/toast.config";
import {
  ToastConfigType,
  ToastContextType,
  ToastPositionType,
  ToastType,
} from "@/types/types/toast.types";
import { ToastProps } from "@/types/props/toast.props.types";
import { getToastOffsetX } from "@/helpers/toast.helpers";
import useScreenWidthCheck from "@/hooks/useScreenWidthCheck";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

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
      className={`relative flex flex-col shadow-[0_12px_20px_var(--color-surface-shadow)] backdrop-blur-xl p-0 border rounded-lg min-w-64 max-w-72 overflow-hidden text-primary ${config.cn} ${styles.toastItem} ${shouldExit ? styles.toastExit : ""}`}
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

const ToastContainer: React.FC<{
  toasts: ToastType[];
  position: ToastPositionType;
  onRemove: (id: string) => void;
}> = ({ toasts, position, onRemove }) => {
  return (
    <div
      className={`fixed ${positionStylesConfig[position]} z-100 flex flex-col gap-2`}
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onRemove={onRemove}
          position={position}
        />
      ))}
    </div>
  );
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider!");
  }
  return context;
};

import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { TbAlertTriangle } from "react-icons/tb";

export const toastVariantsConfig = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
} as const;

export const toastPositionsConfig = {
  topLeft: "top-left",
  topRight: "top-right",
  topCenter: "top-center",
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
  bottomCenter: "bottom-center",
} as const;

export const toastProgressPositionsConfig = {
  top: "top",
  bottom: "bottom",
} as const;

export const toastProgressDirectionConfig = {
  leftToRight: "left-to-right",
  rightToLeft: "right-to-left",
} as const;

export const variantConfig = {
  success: {
    cn: "bg-emerald-50 border-emerald-600",
    text: "text-emerald-600",
    icon: FiCheckCircle,
    iconColor: "text-emerald-600",
    progress: "bg-emerald-600",
  },
  error: {
    cn: "bg-rose-50 border-[#e94335]",
    text: "text-[#e94335]",
    icon: FiAlertCircle,
    iconColor: "text-[#e94335]",
    progress: "bg-[#e94335]",
  },
  warning: {
    cn: "bg-orange-50 border-orange-600",
    text: "text-orange-600",
    icon: TbAlertTriangle,
    iconColor: "text-orange-600",
    progress: "bg-orange-600",
  },
  info: {
    cn: "bg-blue-50 border-blue-600",
    text: "text-blue-600",
    icon: TbAlertTriangle,
    iconColor: "text-blue-600",
    progress: "bg-blue-600",
  },
};

export const positionStylesConfig = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};

"use client";

import { createContext } from "react";
import { ToastContextType } from "@/types/types/toast.types";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export default ToastContext;

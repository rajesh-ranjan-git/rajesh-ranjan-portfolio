import { Dispatch, SetStateAction } from "react";
import { ThemeType } from "@/types/types/common.types";

export type AppStateType = {
  activeTheme: ThemeType;
  setActiveTheme: Dispatch<SetStateAction<ThemeType>>;
  splash: boolean;
  setSplash: (value: boolean) => void;
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (value: string) => void;
};

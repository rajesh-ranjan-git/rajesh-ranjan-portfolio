import { create } from "zustand";
import { persist } from "zustand/middleware";
import { themeConfig } from "@/config/common.config";
import { menuItems } from "@/config/sidebar.config";
import { AppStateType } from "@/types/types/store.types";

export const useAppStore = create<AppStateType>()(
  persist(
    (set) => ({
      activeTheme: themeConfig.dark,
      setActiveTheme: (themeOrUpdater) =>
        set((state) => ({
          activeTheme:
            typeof themeOrUpdater === "function"
              ? themeOrUpdater(state.activeTheme)
              : themeOrUpdater,
        })),
      splash: true,
      setSplash: (value) => set({ splash: value }),
      sidebarToggle: false,
      setSidebarToggle: (value) => set({ sidebarToggle: value }),
      activeSection: menuItems[0].id || "",
      setActiveSection: (value) => set({ activeSection: value }),
    }),
    {
      name: "portfolio-storage",
      version: 1,
      partialize: (state) => ({
        activeTheme: state.activeTheme,
      }),
    },
  ),
);

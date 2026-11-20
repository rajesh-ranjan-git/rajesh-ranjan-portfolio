import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEME_STORAGE_KEY, themeConfig } from "@/config/common.config";
import { menuItems } from "@/config/sidebar.config";
import { AppStateType } from "@/types/types/store.types";

const useStore = create<AppStateType>()(
  persist(
    (set) => ({
      activeTheme: themeConfig.dark,
      themeChosen: false,
      setActiveTheme: (themeOrUpdater) =>
        set((state) => ({
          activeTheme:
            typeof themeOrUpdater === "function"
              ? themeOrUpdater(state.activeTheme)
              : themeOrUpdater,
          themeChosen: true,
        })),
      setSystemTheme: (theme) => set({ activeTheme: theme }),
      splash: true,
      setSplash: (value) => set({ splash: value }),
      sidebarToggle: false,
      setSidebarToggle: (value) => set({ sidebarToggle: value }),
      activeSection: menuItems[0].id || "",
      setActiveSection: (value) => set({ activeSection: value }),
    }),
    {
      name: THEME_STORAGE_KEY,
      version: 1,
      skipHydration: true,
      // Only an explicit choice is saved; until then the OS setting is followed.
      partialize: (state) =>
        state.themeChosen
          ? { activeTheme: state.activeTheme, themeChosen: true }
          : {},
      merge: (persisted, current) => {
        const saved = (persisted ?? {}) as Partial<AppStateType>;
        // Older saves had no themeChosen flag; "light" could only be explicit.
        const themeChosen =
          saved.themeChosen ?? saved.activeTheme === themeConfig.light;

        return themeChosen && saved.activeTheme
          ? { ...current, activeTheme: saved.activeTheme, themeChosen }
          : current;
      },
    },
  ),
);

export default useStore;

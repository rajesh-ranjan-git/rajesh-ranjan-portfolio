"use client";

import { useEffect } from "react";
import { themeConfig } from "@/config/common.config";
import useStore from "@/store/store";

const ThemeManager = () => {
  const activeTheme = useStore((state) => state.activeTheme);
  const themeChosen = useStore((state) => state.themeChosen);

  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  // Follow the OS colour scheme until the visitor picks a theme themselves.
  useEffect(() => {
    if (themeChosen) return;

    const query = window.matchMedia("(prefers-color-scheme: light)");

    const syncWithSystem = () => {
      const { themeChosen: chosen, setSystemTheme } = useStore.getState();
      if (chosen) return;
      setSystemTheme(query.matches ? themeConfig.light : themeConfig.dark);
    };

    syncWithSystem();
    query.addEventListener("change", syncWithSystem);

    return () => query.removeEventListener("change", syncWithSystem);
  }, [themeChosen]);

  useEffect(() => {
    if (!useStore.persist.hasHydrated()) return;

    const theme = useStore.getState().activeTheme;
    const isDark = theme === themeConfig.dark;
    const root = document.documentElement;

    root.setAttribute("data-theme", isDark ? "dark" : "light");
    root.classList.toggle(themeConfig.dark, isDark);
    root.classList.toggle(themeConfig.light, !isDark);
  }, [activeTheme]);

  return null;
};

export default ThemeManager;

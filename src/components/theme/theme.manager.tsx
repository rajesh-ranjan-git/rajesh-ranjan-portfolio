"use client";

import { useEffect } from "react";
import { themeConfig } from "@/config/common.config";
import useStore from "@/store/store";

const ThemeManager = () => {
  const activeTheme = useStore((state) => state.activeTheme);

  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

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

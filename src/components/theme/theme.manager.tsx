"use client";

import { useEffect } from "react";
import { themeConfig } from "@/config/common.config";
import useStore from "@/store/store";

const ThemeManager = () => {
  const activeTheme = useStore((state) => state.activeTheme);

  // The store skips automatic hydration so the first client render matches the
  // server HTML. The saved theme is read here, after hydration.
  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (!useStore.persist.hasHydrated()) return;

    // Read from the store, not the render value, so the first pass after
    // rehydration applies the saved theme instead of the default.
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

"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toastVariantsConfig } from "@/config/toast.config";
import { UseSectionNavigationProps } from "@/types/props/hooks.props.types";
import { useAppStore } from "@/store/store";
import { useToast } from "@/hooks/toast";
import { toTitleCase } from "@/utils/common.utils";

const SCROLL_DURATION_MS = 600;
const SCROLL_TOLERANCE_PX = 2;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const scrollElementIntoViewSmoothly = (element: HTMLElement) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }

  const startTime = performance.now();
  let previousEasedProgress = 0;

  const step = (now: number) => {
    const remaining = element.getBoundingClientRect().top;
    const progress = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);

    if (progress >= 1) {
      if (Math.abs(remaining) > SCROLL_TOLERANCE_PX) {
        window.scrollBy({ top: remaining, behavior: "instant" });
      }
      return;
    }

    const easedProgress = easeOutCubic(progress);
    const frameFraction =
      (easedProgress - previousEasedProgress) / (1 - previousEasedProgress);
    previousEasedProgress = easedProgress;

    window.scrollBy({ top: remaining * frameFraction, behavior: "instant" });
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export const useSectionNavigation = ({
  sectionIds,
  rootMargin = "-30% 0px -60% 0px",
  threshold = 0,
}: UseSectionNavigationProps) => {
  const activeSection = useAppStore((state) => state.activeSection);
  const setActiveSection = useAppStore((state) => state.setActiveSection);

  const pathname = usePathname();
  const router = useRouter();

  const { showToast } = useToast();

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    if (pathname !== "/") {
      router.push(sectionId ? `/#${sectionId}` : "/");
      return;
    }

    const element = document.getElementById(sectionId);

    if (!element) {
      logger.warn(`🚨 [SECTION] ${toTitleCase(sectionId)} is not available!`);
      showToast({
        title: "SECTION NOT FOUND",
        message: `${toTitleCase(sectionId)} is not available!`,
        variant: toastVariantsConfig.warning,
      });
      return;
    }

    window.history.replaceState(null, "", `#${sectionId}`);

    scrollElementIntoViewSmoothly(element);
  };

  return {
    activeSection,
    scrollToSection,
  };
};

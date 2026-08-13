"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toastVariantsConfig } from "@/config/toast.config";
import { UseSectionNavigationProps } from "@/types/props/hooks.props.types";
import useStore from "@/store/store";
import useToast from "@/hooks/useToast";
import { toTitleCase } from "@/utils/common.utils";
import { scrollElementIntoViewSmoothly } from "@/helpers/common.helpers";

const useSectionNavigation = ({
  sectionIds,
  rootMargin = "-30% 0px -60% 0px",
  threshold = 0,
}: UseSectionNavigationProps) => {
  const activeSection = useStore((state) => state.activeSection);
  const setActiveSection = useStore((state) => state.setActiveSection);

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

export default useSectionNavigation;

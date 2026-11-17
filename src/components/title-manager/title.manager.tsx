"use client";

import { useEffect } from "react";

const TitleManager = () => {
  const inactiveTitle = "🙏 Come back soon! 👋";

  useEffect(() => {
    let pageTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pageTitle = document.title;
        document.title = inactiveTitle;
      } else if (document.title === inactiveTitle) {
        document.title = pageTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

export default TitleManager;

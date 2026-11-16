"use client";

import { useEffect } from "react";

const TitleManager = () => {
  const inactiveTitle = "🙏 Come back soon! 👋";

  useEffect(() => {
    // Remember the page's own title (home or a project page) when the tab is
    // hidden, and restore exactly that title when the visitor comes back.
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

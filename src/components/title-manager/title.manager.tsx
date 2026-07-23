"use client";

import { useEffect } from "react";

const TitleManager = () => {
  const originalTitle = "Rajesh Ranjan | Full Stack Developer";
  const inactiveTitle = "🙏 Come back soon! 👋";

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = inactiveTitle;
      } else {
        document.title = originalTitle;
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

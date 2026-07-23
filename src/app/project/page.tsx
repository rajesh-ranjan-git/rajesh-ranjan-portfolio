"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProjectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#portfolio");
  }, []);
  return <></>;
};

export default ProjectPage;

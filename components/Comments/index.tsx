"use client";

import { useEffect, useState } from "react";

import Giscus from "@giscus/react";

const Comments = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const updateTheme = () => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      );
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Giscus
      id="comments"
      category="Announcements"
      categoryId="DIC_kwDOS7NVp84DA2AM"
      emitMetadata="0"
      inputPosition="top"
      lang="ko"
      loading="lazy"
      mapping="pathname"
      reactionsEnabled="1"
      repo="jaegyeongkim/jaegyeongkim.github.io"
      repoId="R_kgDOS7NVpw"
      strict="0"
      theme={theme}
    />
  );
};

export default Comments;

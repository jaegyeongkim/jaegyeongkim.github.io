"use client";

import { useEffect, useRef } from "react";

import { trackPostReadComplete, trackPostView } from "@/lib/gtag";

interface PostTrackerProps {
  slug: string;
  tags: string[];
  title: string;
}

const PostTracker = ({ slug, tags, title }: PostTrackerProps) => {
  const readFiredRef = useRef(false);

  useEffect(() => {
    trackPostView(slug, title, tags);
  }, [slug, title, tags]);

  useEffect(() => {
    const handleScroll = () => {
      if (readFiredRef.current) return;

      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;

      if (total > 0 && scrolled / total >= 0.9) {
        readFiredRef.current = true;
        trackPostReadComplete(slug, title);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug, title]);

  return null;
};

export default PostTracker;

"use client";

import { useEffect, useRef } from "react";

import { trackBlogPostView, trackBlogReadComplete } from "@/lib/gtag";

interface BlogPostTrackerProps {
  slug: string;
  tags: string[];
  title: string;
}

const BlogPostTracker = ({ slug, tags, title }: BlogPostTrackerProps) => {
  const readFiredRef = useRef(false);

  useEffect(() => {
    trackBlogPostView(slug, title, tags);
  }, [slug, title, tags]);

  useEffect(() => {
    const handleScroll = () => {
      if (readFiredRef.current) return;

      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;

      if (total > 0 && scrolled / total >= 0.9) {
        readFiredRef.current = true;
        trackBlogReadComplete(slug, title);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug, title]);

  return null;
};

export default BlogPostTracker;

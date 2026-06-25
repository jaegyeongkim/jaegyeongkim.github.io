"use client";

import Link from "next/link";

import { trackBlogLinkClick } from "@/lib/gtag";

interface BlogLinkProps {
  slug: string;
  source: "portfolio" | "resume";
}

const BlogLink = ({ slug, source }: BlogLinkProps) => {
  return (
    <Link
      className="text-xs font-mono text-[var(--accent)] hover:underline underline-offset-2 shrink-0"
      href={`/blog/${slug}`}
      onClick={() => trackBlogLinkClick(slug, source)}
    >
      글 읽기 →
    </Link>
  );
};

export default BlogLink;

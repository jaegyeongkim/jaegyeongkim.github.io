"use client";

import Link from "next/link";

import { blogLinkCopy } from "@/content/copy/blogLink";
import { trackBlogLinkClick } from "@/lib/gtag";
import type { Locale } from "@/lib/locale";

interface BlogLinkProps {
  locale?: Locale;
  slug: string;
  source: "portfolio" | "resume";
}

const BlogLink = ({ locale = "ko", slug, source }: BlogLinkProps) => {
  const t = blogLinkCopy[locale];

  return (
    <Link
      className="text-xs font-mono text-[var(--accent)] hover:underline underline-offset-2 shrink-0"
      href={`/blog/${slug}`}
      onClick={() => trackBlogLinkClick(slug, source)}
    >
      {t.readMore}
    </Link>
  );
};

export default BlogLink;

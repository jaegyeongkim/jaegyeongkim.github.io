"use client";

import Link from "next/link";

import { postLinkCopy } from "@/content/copy/postLink";
import { trackPostLinkClick } from "@/lib/gtag";
import type { Locale } from "@/lib/locale";

interface PostLinkProps {
  locale?: Locale;
  slug: string;
  source: "portfolio" | "resume";
}

const PostLink = ({ locale = "ko", slug, source }: PostLinkProps) => {
  const t = postLinkCopy[locale];

  return (
    <Link
      className="text-xs font-mono text-[var(--accent)] hover:underline underline-offset-2 shrink-0"
      href={`/post/${slug}`}
      onClick={() => trackPostLinkClick(slug, source)}
    >
      {t.readMore}
    </Link>
  );
};

export default PostLink;

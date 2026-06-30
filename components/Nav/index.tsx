"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "@/components/ThemeToggle";
import { navCopy } from "@/content/copy/nav";
import type { Locale } from "@/lib/locale";

const EN_COUNTERPART: Record<string, string> = {
  "/": "/en",
  "/portfolio": "/en/portfolio",
};

const KO_COUNTERPART: Record<string, string> = {
  "/en": "/",
  "/en/portfolio": "/portfolio",
};

const Nav = () => {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "ko";
  const t = navCopy[locale];

  const homeHref = locale === "en" ? "/en" : "/";
  const portfolioHref = locale === "en" ? "/en/portfolio" : "/portfolio";
  const langTarget =
    locale === "en" ? KO_COUNTERPART[pathname] : EN_COUNTERPART[pathname];

  return (
    <nav className="fixed top-6 right-6 z-50 flex items-center gap-1 bg-[var(--background)] border border-[var(--border)] rounded-full px-1.5 py-1.5 shadow-sm">
      <ThemeToggle locale={locale} />
      <div className="w-px h-4 bg-[var(--border)] mx-0.5" />
      <Link
        className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-150 ${
          pathname === homeHref
            ? "bg-[var(--foreground)] text-[var(--background)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        href={homeHref}
      >
        {t.resume}
      </Link>
      <Link
        className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-150 ${
          pathname === portfolioHref
            ? "bg-[var(--foreground)] text-[var(--background)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        href={portfolioHref}
      >
        {t.portfolio}
      </Link>
      <Link
        className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-150 ${
          pathname.startsWith("/blog")
            ? "bg-[var(--foreground)] text-[var(--background)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        href="/blog"
      >
        {t.blog}
      </Link>
      {langTarget && (
        <>
          <div className="w-px h-4 bg-[var(--border)] mx-0.5" />
          <Link
            className="text-xs px-3 py-1.5 rounded-full font-mono text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-150"
            href={langTarget}
          >
            {locale === "en" ? "KO" : "EN"}
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "@/components/ThemeToggle";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 right-6 z-50 flex items-center gap-1 bg-[var(--background)] border border-[var(--border)] rounded-full px-1.5 py-1.5 shadow-sm">
      <ThemeToggle />
      <div className="w-px h-4 bg-[var(--border)] mx-0.5" />
      <Link
        className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-150 ${
          pathname === "/"
            ? "bg-[var(--foreground)] text-[var(--background)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        href="/"
      >
        이력서
      </Link>
      <Link
        className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-150 ${
          pathname === "/portfolio"
            ? "bg-[var(--foreground)] text-[var(--background)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        href="/portfolio"
      >
        포트폴리오
      </Link>
      <Link
        className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-150 ${
          pathname.startsWith("/blog")
            ? "bg-[var(--foreground)] text-[var(--background)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        href="/blog"
      >
        블로그
      </Link>
    </nav>
  );
};

export default Nav;

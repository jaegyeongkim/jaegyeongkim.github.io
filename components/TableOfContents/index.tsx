"use client";

import { useEffect, useState } from "react";

export interface TocSection {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

export const PORTFOLIO_SECTIONS: TocSection[] = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "team-lead", label: "Team Lead" },
  { id: "achievements", label: "Key Achievements" },
  { id: "tech-migrations", label: "Migrations" },
  {
    id: "projects",
    label: "Projects",
    children: [
      { id: "projects-work", label: "Work" },
      { id: "projects-side", label: "Side" },
    ],
  },
];

export const RESUME_SECTIONS: TocSection[] = [
  { id: "resume-intro", label: "Intro" },
  { id: "resume-tech", label: "Tech Stack" },
  { id: "resume-achievements", label: "Key Achievements" },
  { id: "resume-career", label: "Career" },
  { id: "resume-side-projects", label: "Side Projects" },
  { id: "resume-education", label: "Education" },
];

const TableOfContents = ({ sections }: { sections: TocSection[] }) => {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const allIds = sections.map((s) => s.id);

    const handleScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = allIds[0];

      for (const id of allIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex fixed right-3 xl:right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1">
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <div key={section.id}>
            <button
              className="flex items-center gap-2.5 group w-full cursor-pointer p-2 -mr-2"
              onClick={() => scrollTo(section.id)}
            >
              {/* 레이블: 모바일은 활성일 때만, xl은 hover·활성 모두 */}
              <span
                className={`text-xs font-mono tracking-wide transition-all duration-200 text-right ml-auto ${
                  isActive
                    ? "text-[var(--foreground)] opacity-100"
                    : "text-[var(--muted)] opacity-0 md:group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>
              <span
                className={`shrink-0 rounded-full transition-all duration-200 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-[var(--foreground)]"
                    : "w-2 h-2 bg-[var(--muted)] group-hover:bg-[var(--foreground)]"
                }`}
              />
            </button>

            {section.children && isActive && (
              <div className="hidden md:flex flex-col gap-0.5 mt-0.5 ml-auto pr-[18px] border-r border-[var(--border)]">
                {section.children.map((child) => (
                  <button
                    className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-right pr-2 cursor-pointer"
                    key={child.id}
                    onClick={() => scrollTo(child.id)}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default TableOfContents;

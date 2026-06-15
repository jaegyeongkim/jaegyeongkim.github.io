"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

const SECTIONS: Section[] = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "team-lead", label: "Team Lead" },
  { id: "achievements", label: "Key Achievements" },
  { id: "tech-migrations", label: "Migrations" },
  { id: "timeline", label: "History" },
  {
    id: "projects",
    label: "Projects",
    children: [
      { id: "projects-work", label: "Work" },
      { id: "projects-side", label: "Side" },
    ],
  },
];

const ALL_IDS = SECTIONS.map((s) => s.id);

const TableOfContents = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ALL_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1">
      {SECTIONS.map((section) => {
        const isActive = active === section.id;
        return (
          <div key={section.id}>
            <button
              className="flex items-center gap-2.5 group w-full"
              onClick={() => scrollTo(section.id)}
            >
              <span
                className={`text-xs font-mono tracking-wide transition-all duration-200 text-right ml-auto ${
                  isActive
                    ? "text-[var(--foreground)] opacity-100"
                    : "text-[var(--muted)] opacity-0 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>
              <span
                className={`shrink-0 rounded-full transition-all duration-200 ${
                  isActive
                    ? "w-2 h-2 bg-[var(--foreground)]"
                    : "w-1.5 h-1.5 bg-[var(--muted)] group-hover:bg-[var(--foreground)]"
                }`}
              />
            </button>

            {section.children && isActive && (
              <div className="flex flex-col gap-0.5 mt-0.5 ml-auto pr-[18px] border-r border-[var(--border)]">
                {section.children.map((child) => (
                  <button
                    key={child.id}
                    className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-right pr-2"
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

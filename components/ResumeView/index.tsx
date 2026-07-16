import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import PostLink from "@/components/PostLink";
import PrintButton from "@/components/PrintButton";
import TableOfContents, { RESUME_SECTIONS } from "@/components/TableOfContents";
import { footerCopy } from "@/content/copy/footer";
import { heroCopy } from "@/content/copy/hero";
import {
  resumeCopy,
  TECH_CORE,
  TECH_EXPERIENCE,
  TECH_INFRA,
  TECH_PLATFORM,
  TECH_SIDE,
} from "@/content/copy/resume";
import type { Locale } from "@/lib/locale";
import { VISIBLE_POST_SLUGS } from "@/lib/posts";

const GithubIcon = () => (
  <svg
    height={14}
    width={14}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

interface ResumeViewProps {
  locale?: Locale;
}

const ResumeView = ({ locale = "ko" }: ResumeViewProps) => {
  const t = resumeCopy[locale];
  const hero = heroCopy[locale];
  const footer = footerCopy[locale];
  const portfolioHref = locale === "en" ? "/en/portfolio" : "/portfolio";

  return (
    <>
      <TableOfContents sections={RESUME_SECTIONS} />
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-10">
        {/* Header */}
        <header className="space-y-5" id="resume-intro">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-5">
              <Image
                className="object-cover shrink-0"
                height={128}
                width={128}
                alt={hero.avatarAlt}
                src="/avatar.webp"
              />
              <div className="space-y-1 pt-1">
                <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">
                  {t.name}
                </h1>
                <p className="text-base text-[var(--muted)]">{t.role}</p>
                <p className="text-sm text-[var(--muted)] pt-1">{t.tagline}</p>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2 shrink-0 pt-1">
              <a
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                href={t.emailHref}
              >
                <Mail size={14} />
                tkwk1205@naver.com
              </a>
              <a
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                href="https://github.com/jaegyeongkim"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon />
                {t.githubLabel}
              </a>
              <PrintButton label={footer.printLabel} />
            </div>
          </div>
          <p className="text-base text-[var(--foreground)] font-medium leading-relaxed">
            {t.intro1}
          </p>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            {t.intro2}
          </p>
        </header>

        <div className="h-px bg-[var(--border)]" />

        {/* Tech Stack */}
        <section className="space-y-5" id="resume-tech">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Tech Stack
          </h2>
          <div className="space-y-5">
            <div className="flex gap-8 items-start">
              <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed">
                Core
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_CORE.map((tech) => (
                  <span
                    className="text-xs font-mono text-[var(--foreground)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1 rounded-full"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed">
                Platform / DX
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_PLATFORM.map((tech) => (
                  <span
                    className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed">
                Infra
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_INFRA.map((tech) => (
                  <span
                    className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed">
                Side
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_SIDE.map((tech) => (
                  <span
                    className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed opacity-50">
                Experience
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_EXPERIENCE.map((tech) => (
                  <span
                    className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full opacity-50"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-[var(--border)]" />

        <section className="space-y-6" id="resume-achievements">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.achievements.map(({ description, postSlug, title }) => (
              <div className="space-y-1.5" key={title}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {title}
                  </p>
                  {VISIBLE_POST_SLUGS.includes(postSlug) && (
                    <PostLink locale={locale} slug={postSlug} source="resume" />
                  )}
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <Link
            className="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline"
            href={`${portfolioHref}#achievements`}
          >
            {t.achievementsLink}
          </Link>
        </section>

        <div className="h-px bg-[var(--border)]" />

        {/* Career */}
        <section className="space-y-6" id="resume-career">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Career
          </h2>
          {t.career.map(
            ({
              company,
              description,
              highlights,
              migrations,
              period,
              role,
            }) => (
              <div className="space-y-3" key={company}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-[var(--foreground)]">
                      {company}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{role}</p>
                  </div>
                  <p className="text-xs text-[var(--muted)] shrink-0 pt-0.5">
                    {period}
                  </p>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {description}
                </p>
                {highlights && (
                  <ul className="space-y-1.5 text-sm text-[var(--muted)] leading-relaxed list-disc pl-5">
                    {highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-xs text-[var(--muted)] mr-1">
                    {t.careerMigrationsLabel}
                  </span>
                  {migrations.map((tech) => (
                    <span
                      className="text-xs font-mono text-[var(--accent)] border border-[var(--accent)] border-opacity-30 px-2 py-0.5 rounded-full"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </section>

        <div className="h-px bg-[var(--border)]" />

        {/* Side Projects */}
        <section className="space-y-6" id="resume-side-projects">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Side Projects
          </h2>
          <div className="space-y-6">
            {t.sideProjects.map(
              ({ description, href, period, role, tags, title }) => (
                <div className="space-y-3" key={title}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <p className="text-base font-semibold text-[var(--foreground)]">
                          {title}
                        </p>
                        {href && (
                          <a
                            className="text-xs font-mono text-[var(--accent)] hover:underline"
                            href={href}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Live ↗
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-[var(--muted)]">{role}</p>
                    </div>
                    <p className="text-xs text-[var(--muted)] shrink-0 pt-0.5">
                      {period}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded-full"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        <div className="h-px bg-[var(--border)]" />

        {/* Education */}
        <section className="space-y-4" id="resume-education">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Education
          </h2>
          <div className="space-y-3">
            {t.education.map(({ description, title }) => (
              <div
                className="flex items-start justify-between gap-4"
                key={title}
              >
                <p className="text-sm text-[var(--foreground)]">{title}</p>
                <p className="text-xs text-[var(--muted)] shrink-0">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer compact locale={locale} />
    </>
  );
};

export default ResumeView;

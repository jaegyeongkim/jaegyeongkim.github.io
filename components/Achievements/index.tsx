import BlogLink from "@/components/BlogLink";
import { achievementsCopy } from "@/content/copy/achievements";
import type { Locale } from "@/lib/locale";

interface AchievementsProps {
  locale?: Locale;
}

const Achievements = ({ locale = "ko" }: AchievementsProps) => {
  const t = achievementsCopy[locale];

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-10 border-t border-[var(--border)]"
      id="achievements"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono font-bold text-[var(--muted)] uppercase tracking-widest pt-1">
            Key Achievements
          </p>
          <p className="text-base text-[var(--muted)]">{t.intro}</p>
        </div>

        <div className="space-y-6">
          {t.achievements.map(
            ({
              blogSlug,
              detail,
              metric,
              metricLabel,
              problem,
              results,
              title,
            }) => (
              <div
                className="border border-[var(--border)] overflow-hidden"
                key={title}
              >
                {/* Card header */}
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-8 py-6 border-b border-[var(--border)]">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      {title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[var(--accent)] tracking-tight leading-none">
                        {metric}
                      </span>
                      <span className="text-xs text-[var(--muted)]">
                        {metricLabel}
                      </span>
                    </div>
                  </div>
                  {blogSlug && (
                    <BlogLink
                      locale={locale}
                      slug={blogSlug}
                      source="portfolio"
                    />
                  )}
                </div>

                {/* Card body */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr]">
                  <div className="p-8 space-y-3 md:border-r border-b md:border-b-0 border-[var(--border)]">
                    <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                      Problem
                    </p>
                    <p className="text-sm text-[var(--foreground)] leading-relaxed">
                      {problem}
                    </p>
                  </div>

                  <div className="p-8 space-y-4 md:border-r border-b md:border-b-0 border-[var(--border)]">
                    <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                      Solution
                    </p>
                    <ol className="space-y-3">
                      {detail.map((item, i) => (
                        <li className="flex gap-3 items-start" key={item}>
                          <span className="text-xs font-mono text-[var(--accent)] shrink-0 mt-0.5 w-5 pt-px">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-[var(--muted)] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="p-8 space-y-4 bg-[var(--surface)]">
                    <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
                      Result
                    </p>
                    <ul className="space-y-3">
                      {results.map((result) => (
                        <li className="flex gap-3 items-start" key={result}>
                          <span className="text-[var(--accent)] font-bold text-base shrink-0 mt-0.5">
                            ↑
                          </span>
                          <span className="text-sm font-medium text-[var(--foreground)] leading-relaxed">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
            <p className="text-sm font-mono font-bold text-[var(--muted)] uppercase tracking-widest">
              Other
            </p>
            <p className="text-base text-[var(--muted)]">{t.otherLabel}</p>
          </div>

          <div className="lg:ml-[calc(200px+6rem)] grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.otherImprovements.map(({ blogSlug, description, title }) => (
              <div
                className="space-y-3 py-6 border-t border-[var(--border)]"
                key={title}
              >
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {title}
                </p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {description}
                </p>
                {blogSlug && (
                  <BlogLink
                    locale={locale}
                    slug={blogSlug}
                    source="portfolio"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

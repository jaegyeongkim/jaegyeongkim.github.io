import { timelineCopy } from "@/content/copy/timeline";
import type { Locale } from "@/lib/locale";

interface TimelineProps {
  locale?: Locale;
}

const Timeline = ({ locale = "ko" }: TimelineProps) => {
  const t = timelineCopy[locale];

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-10 border-t border-[var(--border)]"
      id="timeline"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            History
          </p>
          <p className="text-base text-[var(--muted)]">{t.intro}</p>
        </div>

        <div className="lg:ml-[calc(200px+6rem)]">
          <table className="w-full">
            <tbody>
              {t.items.map(({ date, description, label }, index) => (
                <tr
                  className={`group border-t border-[var(--border)] ${
                    index === t.items.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }`}
                  key={date}
                >
                  <td className="py-5 pr-8 w-[90px] shrink-0 align-top">
                    <span className="text-xs font-mono text-[var(--muted)]">
                      {date}
                    </span>
                  </td>
                  <td className="py-5 pr-8 w-[180px] align-top">
                    <span
                      className={`text-sm font-medium ${
                        index === t.items.length - 1
                          ? "text-[var(--accent)]"
                          : "text-[var(--foreground)]"
                      }`}
                    >
                      {label}
                    </span>
                  </td>
                  <td className="py-5 align-top">
                    <span className="text-sm text-[var(--muted)]">
                      {description}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

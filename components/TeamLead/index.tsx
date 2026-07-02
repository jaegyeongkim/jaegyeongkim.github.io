import { teamLeadCopy } from "@/content/copy/teamLead";
import type { Locale } from "@/lib/locale";

interface TeamLeadProps {
  locale?: Locale;
}

const TeamLead = ({ locale = "ko" }: TeamLeadProps) => {
  const t = teamLeadCopy[locale];

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-10 border-t border-[var(--border)]"
      id="team-lead"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono font-bold text-[var(--muted)] uppercase tracking-widest pt-1">
            Team Lead
          </p>
          <p className="text-base text-[var(--muted)]">{t.intro}</p>
        </div>

        <div className="lg:ml-[calc(200px+6rem)] grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map(({ description, title }) => (
            <div
              className="space-y-2 py-6 border-t border-[var(--border)]"
              key={title}
            >
              <p className="text-base font-medium text-[var(--foreground)]">
                {title}
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLead;

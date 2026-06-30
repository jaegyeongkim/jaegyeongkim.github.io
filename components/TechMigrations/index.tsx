import { techMigrationsCopy } from "@/content/copy/techMigrations";
import type { Locale } from "@/lib/locale";

interface TechMigrationsProps {
  locale?: Locale;
}

const TechMigrations = ({ locale = "ko" }: TechMigrationsProps) => {
  const t = techMigrationsCopy[locale];

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-10 border-t border-[var(--border)]"
      id="tech-migrations"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            Migrations
          </p>
          <p className="text-base text-[var(--muted)]">{t.intro}</p>
        </div>

        <div className="lg:ml-[calc(200px+6rem)] overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 pr-6 text-xs font-mono text-[var(--muted)] uppercase tracking-wider font-normal w-[140px]">
                  From
                </th>
                <th className="text-left py-3 pr-6 text-xs font-mono text-[var(--muted)] uppercase tracking-wider font-normal w-[180px]">
                  To
                </th>
                <th className="text-left py-3 pr-6 text-xs font-mono text-[var(--muted)] uppercase tracking-wider font-normal">
                  Background
                </th>
                <th className="text-left py-3 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-normal">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {t.migrations.map(({ background, from, result, to }) => (
                <tr className="border-b border-[var(--border)]" key={from}>
                  <td className="py-4 pr-6 text-[var(--muted)] font-mono text-xs">
                    {from}
                  </td>
                  <td className="py-4 pr-6 font-medium text-[var(--foreground)]">
                    {to}
                  </td>
                  <td className="py-4 pr-6 text-[var(--muted)]">
                    {background}
                  </td>
                  <td className="py-4 text-[var(--foreground)]">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechMigrations;

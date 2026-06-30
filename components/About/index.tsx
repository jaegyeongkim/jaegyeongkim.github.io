import { aboutCopy } from "@/content/copy/about";
import type { Locale } from "@/lib/locale";

interface AboutProps {
  locale?: Locale;
}

const About = ({ locale = "ko" }: AboutProps) => {
  const t = aboutCopy[locale];

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-10 border-t border-[var(--border)]"
      id="about"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            About
          </p>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-snug">
              {t.headline}
            </p>
            <div className="space-y-4 text-base text-[var(--muted)] leading-relaxed max-w-2xl">
              {t.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import Image from "next/image";
import Link from "next/link";

import PrintButton from "@/components/PrintButton";
import { heroCopy } from "@/content/copy/hero";
import type { Locale } from "@/lib/locale";

interface HeroProps {
  locale?: Locale;
}

const Hero = ({ locale = "ko" }: HeroProps) => {
  const t = heroCopy[locale];
  const portfolioPath = locale === "en" ? "/en/portfolio" : "/portfolio";

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-10"
      id="hero"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Image
                className="object-cover"
                height={160}
                width={160}
                alt={t.avatarAlt}
                src="/avatar.webp"
              />
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <div className="space-y-3">
              <p className="text-xs text-[var(--muted)] tracking-widest uppercase font-mono">
                {t.tagline}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-none">
                {t.name}
              </h1>
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-medium text-[var(--foreground)]">
                  Frontend Engineer
                </p>
                <p className="text-lg text-[var(--muted)] font-light">
                  Platform & DX
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js"].map((tech) => (
                <span
                  className="text-sm font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-1 pt-2">
              <p className="text-sm text-[var(--muted)]">{t.period}</p>
              <p className="text-base font-medium text-[var(--foreground)]">
                Frontend Team Lead{" "}
                <span className="text-[var(--muted)] font-normal">
                  @ Coconutsilo
                </span>
              </p>
            </div>

            <div className="hidden md:block pt-2">
              <PrintButton label={t.printLabel} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.stats.map(({ anchor, label, suffix, value }) => (
              <Link
                className="border border-[var(--border)] p-6 space-y-2 hover:border-[var(--foreground)] transition-colors duration-200 group block"
                href={`${portfolioPath}${anchor}`}
                key={label}
              >
                <div className="flex items-baseline gap-0.5">
                  <span className="text-4xl font-bold text-[var(--foreground)] tracking-tight">
                    {value}
                  </span>
                  <span className="text-2xl font-bold text-[var(--accent)]">
                    {suffix}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-200">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import Link from "next/link";

import PrintButton from "@/components/PrintButton";

interface StatCard {
  href: string;
  label: string;
  suffix: string;
  value: string;
}

const STATS: StatCard[] = [
  { href: "/portfolio#projects", label: "Admin Services", suffix: "+", value: "10" },
  { href: "/portfolio#achievements", label: "Shared Components", suffix: "+", value: "206" },
  { href: "/portfolio#achievements", label: "Tests", suffix: "+", value: "165" },
  { href: "/portfolio#achievements", label: "Bundle Reduction", suffix: "%", value: "92" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-14">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Image
                alt="김재경 프로필"
                className="object-cover"
                height={160}
                src="/avatar.webp"
                width={160}
              />
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <div className="space-y-3">
              <p className="text-xs text-[var(--muted)] tracking-widest uppercase font-mono">
                문제를 끝까지 파고들어 개선하는 개발자
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-none">
                김재경
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
                  key={tech}
                  className="text-sm font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-1 pt-2">
              <p className="text-sm text-[var(--muted)]">2020.12 ~ 현재</p>
              <p className="text-base font-medium text-[var(--foreground)]">
                Frontend Team Lead{" "}
                <span className="text-[var(--muted)] font-normal">
                  @ Coconutsilo
                </span>
              </p>
            </div>

            <div className="pt-2">
              <PrintButton label="PDF로 저장" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ href, label, suffix, value }) => (
              <Link
                key={label}
                className="border border-[var(--border)] p-6 space-y-2 hover:border-[var(--foreground)] transition-colors duration-200 group block"
                href={href}
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

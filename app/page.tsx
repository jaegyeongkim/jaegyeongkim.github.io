import type { ReactNode } from "react";

import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "김재경 | Frontend Engineer - 이력서" },
};

import Footer from "@/components/Footer";
import PrintButton from "@/components/PrintButton";

const TECH_CORE = [
  "React",
  "TypeScript",
  "Next.js",
  "TanStack Query",
  "Zustand",
  "React Hook Form",
  "Zod",
  "Emotion",
];
const TECH_PLATFORM = [
  "Vite",
  "Turborepo",
  "pnpm",
  "Typia",
  "MSW",
  "Vitest",
  "i18next",
  "Google Maps API",
];
const TECH_INFRA = [
  "GitHub Actions",
  "AWS S3/CloudFront",
  "AWS ECR/EC2",
  "Docker",
  "Vercel",
];
const TECH_SIDE = ["Supabase", "Redis", "Flutter", "Dart"];
const TECH_EXPERIENCE = [
  "Playwright",
  "Storybook",
  "Redux",
  "Redux-Toolkit",
  "Redux-Saga",
  "Styled-components",
];

interface Achievement {
  description: ReactNode;
  title: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    description: (
      <>
        Typia 런타임 검증 + Pessimistic 타입 설계. API 명세 불일치 시{" "}
        <strong className="text-[var(--foreground)]">서비스 중단 없이</strong> 대응,
        개발 서버 기동 시간{" "}
        <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
          88% 단축
        </strong>{" "}
        (53초 → 6초)
      </>
    ),
    title: "Type-safe API Layer",
  },
  {
    description: (
      <>
        pnpm workspace + Turborepo 기반 전환. 10개 앱이 동일 공용 패키지 사용,{" "}
        <strong className="text-[var(--foreground)]">공용 컴포넌트 206개+</strong>{" "}
        · 테스트 165개 운영
      </>
    ),
    title: "Monorepo Architecture",
  },
  {
    description: (
      <>
        GitHub Actions 기반{" "}
        <strong className="text-[var(--foreground)]">20개 파이프라인</strong> 구축.
        React(S3/CloudFront) · Next.js(Docker/ECR/EC2){" "}
        <strong className="text-[var(--foreground)]">수 분 내 배포·롤백</strong>
      </>
    ),
    title: "CI/CD Automation",
  },
  {
    description: (
      <>
        lazy import · manualChunks · 배럴 파일 1,600개 제거. 초기 번들{" "}
        <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
          92% 감소
        </strong>
        (4,990kB → 375kB), VSCode 자동완성 80% 개선
      </>
    ),
    title: "Bundle & DX Optimization",
  },
];

const CAREER = [
  {
    company: "코코넛사일로",
    description:
      "라오스 O2O 플랫폼 KOKKOK. React 어드민 10개, Next.js 랜딩 페이지 3개 설계·개발·운영. 2021년부터 2~6인 FE 팀 리드.",
    migrations: ["TypeScript", "TanStack Query", "Vite", "pnpm", "Turborepo", "MSW"],
    period: "2020.12 ~ 현재",
    role: "Frontend Engineer / FE Team Lead",
  },
];

const EDUCATION = [
  {
    description: "2020.01 ~ 2020.12",
    title: "삼성 청년 소프트웨어 아카데미 (SSAFY 3기)",
  },
  {
    description: "2013.03 ~ 2020.02",
    title: "고려대학교 (세종) 제어계측공학과",
  },
];

const ResumePage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-16">
      {/* Header */}
      <header className="flex items-start justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image
              alt="김재경"
              className="rounded-full object-cover grayscale"
              height={48}
              src="/avatar.webp"
              width={48}
            />
            <div>
              <h1 className="text-2xl font-bold text-[var(--foreground)] tracking-tight">
                김재경
              </h1>
              <p className="text-sm text-[var(--muted)]">
                Frontend Engineer · Platform & DX
              </p>
            </div>
          </div>
          <p className="text-base text-[var(--foreground)] font-medium max-w-lg leading-relaxed">
            10개 어드민 서비스의{" "}
            <span className="underline underline-offset-4 decoration-[var(--accent)]">
              플랫폼과 DX
            </span>
            를 설계하는{" "}
            <strong>프론트엔드 엔지니어</strong>입니다.
          </p>
          <p className="text-sm text-[var(--muted)] max-w-lg leading-relaxed">
            기능 구현에 머물지 않고,{" "}
            <strong className="text-[var(--foreground)] font-medium">
              팀이 더 빠르고 안정적으로 개발할 수 있는 환경
            </strong>
            을 직접 설계하고 정착시켜 왔습니다.
          </p>
        </div>
        <div className="hidden md:flex flex-col items-end gap-2 shrink-0 pt-1">
          <a
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            href="mailto:tkwk1205@naver.com"
          >
            tkwk1205@naver.com
          </a>
          <a
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            href="https://github.com/jaegyeongkim"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/jaegyeongkim
          </a>
          <Link
            className="text-sm text-[var(--accent)] hover:underline transition-colors"
            href="/portfolio"
          >
            포트폴리오 전체 보기 →
          </Link>
          <PrintButton />
        </div>
      </header>

      {/* Divider */}
      <div className="h-px bg-[var(--border)]" />

      {/* Tech Stack */}
      <section className="space-y-5">
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
          Tech Stack
        </h2>
        <div className="space-y-5">
          {/* Core */}
          <div className="flex gap-8 items-start">
            <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed">
              Core
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_CORE.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-[var(--foreground)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Platform / DX */}
          <div className="flex gap-8 items-start">
            <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed">
              Platform / DX
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_PLATFORM.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Infra */}
          <div className="flex gap-8 items-start">
            <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed">
              Infra
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_INFRA.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Side */}
          <div className="flex gap-8 items-start">
            <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed">
              Side
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_SIDE.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div className="flex gap-8 items-start">
            <p className="text-xs text-[var(--muted)] w-28 shrink-0 pt-1.5 leading-relaxed opacity-50">
              Experience
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_EXPERIENCE.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full opacity-50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-[var(--border)]" />

      {/* Key Achievements */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map(({ description, title }) => (
            <div key={title} className="space-y-1.5">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {title}
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
        <Link
          className="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline"
          href="/portfolio#achievements"
        >
          상세 내용 보기 →
        </Link>
      </section>

      <div className="h-px bg-[var(--border)]" />

      {/* Career */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
          Career
        </h2>
        {CAREER.map(({ company, description, migrations, period, role }) => (
          <div key={company} className="space-y-3">
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
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs text-[var(--muted)] mr-1">기술 전환</span>
              {migrations.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-[var(--accent)] border border-[var(--accent)] border-opacity-30 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="h-px bg-[var(--border)]" />

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
          Education
        </h2>
        <div className="space-y-3">
          {EDUCATION.map(({ description, title }) => (
            <div key={title} className="flex items-start justify-between gap-4">
              <p className="text-sm text-[var(--foreground)]">{title}</p>
              <p className="text-xs text-[var(--muted)] shrink-0">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResumePage;

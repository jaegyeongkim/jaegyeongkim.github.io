import type { ReactNode } from "react";

import { Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "김재경 이력서 | Frontend Engineer · FE Team Lead" },
  description:
    "6년차 FE 팀리드 김재경의 이력서. React / TypeScript / Next.js 기반 플랫폼 엔지니어. 모노레포·CI/CD·번들 최적화로 팀 생산성을 높여온 경력을 정리했습니다.",
  openGraph: {
    url: "https://jaegyeongkim.github.io",
    title: "김재경 이력서 | Frontend Engineer · FE Team Lead",
    description:
      "6년차 FE 팀리드 김재경의 이력서. React / TypeScript / Next.js 기반 플랫폼 엔지니어.",
  },
  alternates: {
    canonical: "https://jaegyeongkim.github.io",
  },
};

import BlogLink from "@/components/BlogLink";
import Footer from "@/components/Footer";
import PrintButton from "@/components/PrintButton";
import TableOfContents, { RESUME_SECTIONS } from "@/components/TableOfContents";

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
  "Turborepo",
  "Typia",
  "MSW",
  "i18next",
  "Google Maps API",
  "pnpm",
  "Vite",
  "Vitest",
];
const TECH_INFRA = [
  "GitHub Actions",
  "AWS S3/CloudFront",
  "AWS ECR/EC2",
  "Docker",
  "Vercel",
];
const TECH_SIDE = ["Supabase", "Flutter", "Dart", "R2"];
const TECH_EXPERIENCE = [
  "Playwright",
  "Storybook",
  "Redux",
  "Redux-Toolkit",
  "Redux-Saga",
  "Styled-components",
];

interface Achievement {
  blogSlug: string;
  description: ReactNode;
  title: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    blogSlug: "typia-runtime-validation",
    description: (
      <>
        Typia 런타임 검증 + Pessimistic 타입 설계. API 명세 불일치 시{" "}
        <strong className="text-[var(--foreground)]">서비스 중단 없이</strong>{" "}
        대응, 불일치 필드{" "}
        <strong className="text-[var(--foreground)]">즉시 특정</strong>으로
        디버깅 시간 단축. 개발 서버 기동{" "}
        <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
          88% 단축
        </strong>{" "}
        (53초 → 6초)
      </>
    ),
    title: "Type-safe API Layer",
  },
  {
    blogSlug: "monorepo-shared-components",
    description: (
      <>
        pnpm workspace + Turborepo 기반 전환. 10개 앱이 동일 공용 패키지 사용,{" "}
        <strong className="text-[var(--foreground)]">
          공용 컴포넌트 206개+
        </strong>{" "}
        · 테스트 165개 운영
      </>
    ),
    title: "Monorepo Architecture",
  },
  {
    blogSlug: "github-actions-cicd",
    description: (
      <>
        GitHub Actions 기반{" "}
        <strong className="text-[var(--foreground)]">20개 파이프라인</strong>{" "}
        구축. React(S3/CloudFront) · Next.js(Docker/ECR/EC2){" "}
        <strong className="text-[var(--foreground)]">수 분 내 배포·롤백</strong>
      </>
    ),
    title: "CI/CD Automation",
  },
  {
    blogSlug: "vite-manual-chunks",
    description: (
      <>
        lazy import · manualChunks · 배럴 파일 1,600개 제거. 초기 번들{" "}
        <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
          92% 감소
        </strong>{" "}
        (4,990kB → 375kB). VSCode 자동완성{" "}
        <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
          10초 → 2초
        </strong>{" "}
        (배럴 파일 제거·타입 선언 단순화)
      </>
    ),
    title: "Bundle & DX Optimization",
  },
  {
    blogSlug: "context-to-zustand",
    description: (
      <>
        전역 상태를 잘못 공유하는 구조를 직접 발굴·이슈화해 단계적으로 해결.{" "}
        <strong className="text-[var(--foreground)]">useModal</strong> 과도한
        상태 구독으로 인한{" "}
        <strong className="text-[var(--foreground)]">
          로그아웃 시 401 + 흰 화면 버그 수정
        </strong>
        . ContextAPI 기반 RoutePathProvider·AuthProvider 등을 Zustand selector로
        전환,{" "}
        <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
          Header 전체 리렌더링 제거
        </strong>{" "}
        (React DevTools Profiler 확인). 공통 코드를 packages/로 이동해 10개 앱
        전체 일괄 적용.
      </>
    ),
    title: "Global State Optimization",
  },
];

const CAREER = [
  {
    company: "코코넛사일로",
    description:
      "라오스 O2O 플랫폼 KOKKOK. React 어드민 10개, Next.js 랜딩 페이지 3개 설계·개발·운영. 2021년부터 2~6인 FE 팀 리드.",
    migrations: [
      "TypeScript",
      "TanStack Query",
      "Vite",
      "pnpm",
      "Turborepo",
      "MSW",
    ],
    period: "2020.12 ~ 현재",
    role: "Frontend Engineer / FE Team Lead",
  },
];

const SIDE_PROJECTS = [
  {
    description:
      "주식·ETF·예금·부동산·코인 등 12개 자산 유형을 통합 관리하는 풀스택 웹앱. 수익률·IRR 자동 계산, 실시간 시세 연동, Playwright E2E·Vitest 단위 테스트.",
    href: "https://asset-management-tools.vercel.app",
    period: "2026.05",
    role: "Solo (기획·설계·개발·배포 전 과정)",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Supabase",
      "Playwright",
      "Vercel",
    ],
    title: "자산 관리 스튜디오",
  },
  {
    description:
      "완전 모유수유 기록과 관리를 돕는 Flutter 기반 모바일 앱. 개발 중.",
    period: "2026.06",
    role: "Solo",
    tags: ["Flutter", "Dart", "Supabase"],
    title: "모유미유",
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
                alt="김재경"
                src="/avatar.webp"
              />
              <div className="space-y-1 pt-1">
                <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">
                  김재경
                </h1>
                <p className="text-base text-[var(--muted)]">
                  Frontend Engineer · Platform & DX
                </p>
                <p className="text-xs text-[var(--muted)] tracking-widest uppercase font-mono pt-1">
                  문제를 끝까지 파고들어 개선하는 개발자
                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2 shrink-0 pt-1">
              <a
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                href="mailto:tkwk1205@naver.com"
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
                <svg
                  height={14}
                  width={14}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
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
          </div>
          <p className="text-base text-[var(--foreground)] font-medium leading-relaxed">
            10개 어드민 서비스의{" "}
            <span className="underline underline-offset-4 decoration-[var(--accent)]">
              플랫폼과 DX
            </span>
            를 설계하는 <strong>프론트엔드 엔지니어</strong>입니다.
          </p>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            기능 구현에 머물지 않고,{" "}
            <strong className="text-[var(--foreground)] font-medium">
              팀이 더 빠르고 안정적으로 개발할 수 있는 환경
            </strong>
            을 직접 설계하고 정착시켜 왔습니다.
          </p>
        </header>

        {/* Divider */}
        <div className="h-px bg-[var(--border)]" />

        {/* Tech Stack */}
        <section className="space-y-5" id="resume-tech">
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
                    className="text-xs font-mono text-[var(--foreground)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1 rounded-full"
                    key={t}
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
                    className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                    key={t}
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
                    className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                    key={t}
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
                    className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                    key={t}
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
                    className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded-full opacity-50"
                    key={t}
                  >
                    {t}
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
            {ACHIEVEMENTS.map(({ blogSlug, description, title }) => (
              <div className="space-y-1.5" key={title}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {title}
                  </p>
                  <BlogLink slug={blogSlug} source="resume" />
                </div>
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
        <section className="space-y-6" id="resume-career">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Career
          </h2>
          {CAREER.map(({ company, description, migrations, period, role }) => (
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
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-xs text-[var(--muted)] mr-1">
                  기술 전환
                </span>
                {migrations.map((t) => (
                  <span
                    className="text-xs font-mono text-[var(--accent)] border border-[var(--accent)] border-opacity-30 px-2 py-0.5 rounded-full"
                    key={t}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div className="h-px bg-[var(--border)]" />

        {/* Side Projects */}
        <section className="space-y-6" id="resume-side-projects">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Side Projects
          </h2>
          <div className="space-y-6">
            {SIDE_PROJECTS.map(
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
                    {tags.map((t) => (
                      <span
                        className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded-full"
                        key={t}
                      >
                        {t}
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
            {EDUCATION.map(({ description, title }) => (
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
      <Footer compact />
    </>
  );
};

export default ResumePage;

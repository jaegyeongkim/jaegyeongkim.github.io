import type { ReactNode } from "react";

import type { Dictionary } from "@/lib/locale";

export const TECH_CORE = [
  "React",
  "TypeScript",
  "Next.js",
  "TanStack Query",
  "Zustand",
  "React Hook Form",
  "Zod",
  "Emotion",
];
export const TECH_PLATFORM = [
  "Turborepo",
  "Typia",
  "MSW",
  "i18next",
  "Google Maps API",
  "pnpm",
  "Vite",
  "Vitest",
];
export const TECH_INFRA = [
  "GitHub Actions",
  "AWS S3/CloudFront",
  "AWS ECR/EC2",
  "Docker",
  "Vercel",
];
export const TECH_SIDE = ["Supabase", "Flutter", "Dart", "R2"];
export const TECH_EXPERIENCE = [
  "Playwright",
  "Storybook",
  "Redux",
  "Redux-Toolkit",
  "Redux-Saga",
  "Styled-components",
];

interface ResumeAchievement {
  blogSlug: string;
  description: ReactNode;
  title: string;
}

interface CareerItem {
  role: string;
  company: string;
  description: string;
  migrations: string[];
  period: string;
}

interface SideProjectItem {
  href?: string;
  role: string;
  description: string;
  period: string;
  tags: string[];
  title: string;
}

interface EducationItem {
  description: string;
  title: string;
}

interface ResumeCopy {
  emailHref: string;
  name: string;
  role: string;
  achievements: ResumeAchievement[];
  achievementsLink: string;
  career: CareerItem[];
  careerMigrationsLabel: string;
  education: EducationItem[];
  githubLabel: string;
  intro1: ReactNode;
  intro2: ReactNode;
  portfolioLink: string;
  sideProjects: SideProjectItem[];
  tagline: string;
}

export const resumeCopy: Dictionary<ResumeCopy> = {
  ko: {
    achievementsLink: "상세 내용 보기 →",
    careerMigrationsLabel: "기술 전환",
    emailHref: "mailto:tkwk1205@naver.com",
    githubLabel: "github.com/jaegyeongkim",
    name: "김재경",
    portfolioLink: "포트폴리오 전체 보기 →",
    role: "Frontend Engineer · Platform & DX",
    tagline: "문제를 끝까지 파고들어 개선하는 개발자",
    intro1: (
      <>
        10개 어드민 서비스의{" "}
        <span className="underline underline-offset-4 decoration-[var(--accent)]">
          플랫폼과 DX
        </span>
        를 설계하는 <strong>프론트엔드 엔지니어</strong>입니다.
      </>
    ),
    intro2: (
      <>
        기능 구현에 머물지 않고,{" "}
        <strong className="text-[var(--foreground)] font-medium">
          팀이 더 빠르고 안정적으로 개발할 수 있는 환경
        </strong>
        을 직접 설계하고 정착시켜 왔습니다.
      </>
    ),
    achievements: [
      {
        blogSlug: "typia-runtime-validation",
        description: (
          <>
            Typia 런타임 검증 + Pessimistic 타입 설계. API 명세 불일치 시{" "}
            <strong className="text-[var(--foreground)]">
              서비스 중단 없이
            </strong>{" "}
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
            pnpm workspace + Turborepo 기반 전환. 10개 앱이 동일 공용 패키지
            사용,{" "}
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
            <strong className="text-[var(--foreground)]">
              20개 파이프라인
            </strong>{" "}
            구축. React(S3/CloudFront) · Next.js(Docker/ECR/EC2){" "}
            <strong className="text-[var(--foreground)]">
              수 분 내 배포·롤백
            </strong>
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
            <strong className="text-[var(--foreground)]">useModal</strong>{" "}
            과도한 상태 구독으로 인한{" "}
            <strong className="text-[var(--foreground)]">
              로그아웃 시 401 + 흰 화면 버그 수정
            </strong>
            . ContextAPI 기반 RoutePathProvider·AuthProvider 등을 Zustand
            selector로 전환,{" "}
            <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
              Header 전체 리렌더링 제거
            </strong>{" "}
            (React DevTools Profiler 확인). 공통 코드를 packages/로 이동해 10개
            앱 전체 일괄 적용.
          </>
        ),
        title: "Global State Optimization",
      },
    ],
    career: [
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
    ],
    sideProjects: [
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
    ],
    education: [
      {
        description: "2020.01 ~ 2020.12",
        title: "삼성 청년 소프트웨어 아카데미 (SSAFY 3기)",
      },
      {
        description: "2013.03 ~ 2020.02",
        title: "고려대학교 (세종) 제어계측공학과",
      },
    ],
  },
  en: {
    achievementsLink: "See full details →",
    careerMigrationsLabel: "Tech migrations",
    emailHref: "mailto:tkwk1205@naver.com",
    githubLabel: "github.com/jaegyeongkim",
    name: "Jaegyeong Kim",
    portfolioLink: "See full portfolio →",
    role: "Frontend Engineer · Platform & DX",
    tagline: "Engineer who digs into problems until they're solved",
    intro1: (
      <>
        A <strong>frontend engineer</strong> designing the{" "}
        <span className="underline underline-offset-4 decoration-[var(--accent)]">
          platform and DX
        </span>{" "}
        for 10+ admin services.
      </>
    ),
    intro2: (
      <>
        Beyond shipping features, I&apos;ve directly designed and embedded{" "}
        <strong className="text-[var(--foreground)] font-medium">
          the environment that lets the team build faster and more reliably
        </strong>
        .
      </>
    ),
    achievements: [
      {
        blogSlug: "typia-runtime-validation",
        description: (
          <>
            Typia runtime validation + pessimistic type design. When the API
            spec drifts, the service{" "}
            <strong className="text-[var(--foreground)]">keeps running</strong>,
            and mismatched fields can be{" "}
            <strong className="text-[var(--foreground)]">
              pinpointed instantly
            </strong>
            , cutting debugging time. Dev server startup{" "}
            <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
              cut 88%
            </strong>{" "}
            (53s → 6s)
          </>
        ),
        title: "Type-safe API Layer",
      },
      {
        blogSlug: "monorepo-shared-components",
        description: (
          <>
            Migrated to pnpm workspace + Turborepo. 10 apps share identical
            packages —{" "}
            <strong className="text-[var(--foreground)]">
              206+ shared components
            </strong>{" "}
            · 165 tests
          </>
        ),
        title: "Monorepo Architecture",
      },
      {
        blogSlug: "github-actions-cicd",
        description: (
          <>
            Built{" "}
            <strong className="text-[var(--foreground)]">20 pipelines</strong>{" "}
            on GitHub Actions. React (S3/CloudFront) · Next.js (Docker/ECR/EC2)
            —{" "}
            <strong className="text-[var(--foreground)]">
              deploy and rollback in minutes
            </strong>
          </>
        ),
        title: "CI/CD Automation",
      },
      {
        blogSlug: "vite-manual-chunks",
        description: (
          <>
            Lazy imports · manualChunks · removed 1,600 barrel files. Initial
            bundle{" "}
            <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
              cut 92%
            </strong>{" "}
            (4,990kB → 375kB). VSCode autocomplete{" "}
            <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
              10s → 2s
            </strong>{" "}
            (removed barrel files, simplified type declarations)
          </>
        ),
        title: "Bundle & DX Optimization",
      },
      {
        blogSlug: "context-to-zustand",
        description: (
          <>
            Found and resolved a structure that mis-shared global state, on my
            own initiative.{" "}
            <strong className="text-[var(--foreground)]">useModal</strong>{" "}
            over-subscription caused a{" "}
            <strong className="text-[var(--foreground)]">
              401 + white screen bug on logout
            </strong>{" "}
            — fixed. Converted ContextAPI-based RoutePathProvider, AuthProvider,
            and others to Zustand selectors,{" "}
            <strong className="text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)]">
              eliminating full Header re-renders
            </strong>{" "}
            (confirmed via React DevTools Profiler). Moved shared code into
            packages/ and rolled it out across all 10 apps.
          </>
        ),
        title: "Global State Optimization",
      },
    ],
    career: [
      {
        company: "Coconutsilo",
        description:
          "KOKKOK, an O2O platform in Laos. Designed, built, and operate 10 React admin tools and 3 Next.js landing pages. Leading a 2–6 person FE team since 2021.",
        migrations: [
          "TypeScript",
          "TanStack Query",
          "Vite",
          "pnpm",
          "Turborepo",
          "MSW",
        ],
        period: "Dec 2020 – Present",
        role: "Frontend Engineer / FE Team Lead",
      },
    ],
    sideProjects: [
      {
        description:
          "A full-stack web app unifying 12 asset types — stocks, ETFs, deposits, real estate, crypto, and more. Auto-calculates returns and IRR, integrates live quotes, with Playwright E2E and Vitest unit tests.",
        href: "https://asset-management-tools.vercel.app",
        period: "May 2026",
        role: "Solo (planning, design, development, and deployment end-to-end)",
        tags: [
          "Next.js",
          "React 19",
          "TypeScript",
          "Supabase",
          "Playwright",
          "Vercel",
        ],
        title: "Asset Management Studio",
      },
      {
        description:
          "A Flutter-based mobile app that helps track and manage exclusive breastfeeding. In progress.",
        period: "Jun 2026",
        role: "Solo",
        tags: ["Flutter", "Dart", "Supabase"],
        title: "Moyu Miyu",
      },
    ],
    education: [
      {
        description: "Jan 2020 – Dec 2020",
        title: "Samsung SW Academy For Youth (SSAFY, 3rd cohort)",
      },
      {
        description: "Mar 2013 – Feb 2020",
        title:
          "Korea University (Sejong) — Dept. of Control & Instrumentation Engineering",
      },
    ],
  },
};

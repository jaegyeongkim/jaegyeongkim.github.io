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
  description: ReactNode;
  postSlug: string;
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
    role: "Frontend Engineer",
    tagline: "문제를 끝까지 파고들어 구조로 개선하는 개발자",
    intro1: (
      <>
        6년차 프론트엔드 엔지니어로, 라오스 O2O 플랫폼 KOKKOK의 어드민 서비스
        10개와 랜딩 페이지 3개를 설계·개발하며 2~6인 규모의 팀을 리드해왔습니다.
      </>
    ),
    intro2: (
      <>
        개별 레포를 모노레포로 통합하고, 수동 배포를 CI/CD로 자동화했으며,
        런타임 타입 검증 체계를 도입해 API 불안정성으로 인한 장애를 줄이는 등,
        초기 번들 92% 감소와 개발 서버 기동 88% 단축까지 팀 전체의 개발 속도와
        안정성을 끌어올려왔습니다.
      </>
    ),
    achievements: [
      {
        postSlug: "typia-runtime-validation",
        description:
          "Typia 런타임 검증 + Pessimistic 타입 설계. API 명세 불일치 시 서비스 중단 없이 대응, 불일치 필드 즉시 특정으로 디버깅 시간 단축. 팩토리 함수로 공용화해 10개 앱 전체에 동일한 검증 자동 적용",
        title: "타입 안전 API 검증",
      },
      {
        postSlug: "monorepo-shared-components",
        description:
          "pnpm workspace + Turborepo 기반 전환. 10개 앱이 동일 공용 패키지 사용, 공용 컴포넌트 164개 · 테스트 153개, 라인 커버리지 52%",
        title: "모노레포 아키텍처",
      },
      {
        postSlug: "github-actions-cicd",
        description:
          "React(SPA) 배포 파이프라인을 빌드·배포 2단계로 분리, validation 워크플로우로 배포 전 자동 검증. 모노레포 안에서도 서비스별 독립 배포, 배포·롤백 수 분 내 처리",
        title: "CI/CD 자동화",
      },
      {
        postSlug: "vite-manual-chunks",
        description:
          "lazy import · manualChunks · 배럴 파일 1,600개 제거. 초기 번들 92% 감소 (4,990kB → 375kB), index.js 91% 감소 (925kB → 86kB)",
        title: "번들 최적화",
      },
      {
        postSlug: "context-to-zustand",
        description:
          "ContextAPI 기반 전역 상태를 Zustand + selector로 전환해 리렌더링 범위 최소화. useModal 과도한 구독으로 인한 로그아웃 시 401 + 흰 화면 버그 수정, Header 전체 리렌더링 제거 (React DevTools Profiler 확인). 공통 코드를 packages/로 이동해 10개 앱 전체 일괄 적용.",
        title: "전역 상태 최적화",
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
      {
        description:
          "모바일·태블릿·웹 전 기기에서 쓸 수 있는 반응형 PWA로 실사용자 대상 운영 중. R2 Cache-Control · next/image · cache tag revalidate 3중 캐싱으로 이미지 네트워크 요청 최소화, 크롤링 기반 일괄 등록 파이프라인 구현. 추후 Flutter 앱으로 확장 예정.",
        href: "https://jamjoong.vercel.app",
        period: "2026.06",
        role: "Solo (기획·설계·개발·배포 전 과정)",
        tags: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "R2"],
        title: "주보 뷰어 PWA (잠실중앙교회)",
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
    role: "Frontend Engineer",
    tagline: "Engineer who digs into problems until they become structure",
    intro1: (
      <>
        A frontend engineer with 6 years of experience, I&apos;ve designed and
        built 10 admin tools and 3 landing pages for KOKKOK, an O2O platform in
        Laos, leading a 2–6 person team along the way.
      </>
    ),
    intro2: (
      <>
        I consolidated separate repos into a monorepo, automated manual deploys
        with CI/CD, and introduced runtime type validation to cut outages from
        API drift — trimming the initial bundle by 92% and dev server startup by
        88%, raising the whole team&apos;s development speed and stability.
      </>
    ),
    achievements: [
      {
        postSlug: "typia-runtime-validation",
        description:
          "Typia runtime validation + pessimistic type design. When the API spec drifts, the service keeps running, and mismatched fields can be pinpointed instantly, cutting debugging time. Generalized via a factory function, now applied automatically across all 10 apps",
        title: "Type-safe API Layer",
      },
      {
        postSlug: "monorepo-shared-components",
        description:
          "Migrated to pnpm workspace + Turborepo. 10 apps share identical packages — 164 shared components · 153 tests, 52% line coverage",
        title: "Monorepo Architecture",
      },
      {
        postSlug: "github-actions-cicd",
        description:
          "Split the React (SPA) deploy pipeline into build and deploy stages, with a shared validation workflow that checks every deploy automatically. Even inside the monorepo, services deploy independently, deploy and rollback in minutes",
        title: "CI/CD Automation",
      },
      {
        postSlug: "vite-manual-chunks",
        description:
          "Lazy imports · manualChunks · removed 1,600 barrel files. Initial bundle cut 92% (4,990kB → 375kB), index.js cut 91% (925kB → 86kB)",
        title: "Bundle Optimization",
      },
      {
        postSlug: "context-to-zustand",
        description:
          "Converted ContextAPI-based global state to Zustand + selectors to minimize re-render scope. useModal over-subscription caused a 401 + white screen bug on logout — fixed, eliminating full Header re-renders (confirmed via React DevTools Profiler). Moved shared code into packages/ and rolled it out across all 10 apps.",
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
      {
        description:
          "A responsive PWA usable across mobile, tablet, and web, running in production for real users. Minimizes image network requests with 3-layer caching — R2 Cache-Control, next/image optimization, and cache-tag-based revalidation. Also built a crawling-based bulk import pipeline. A native Flutter app is planned for future release.",
        href: "https://jamjoong.vercel.app",
        period: "Jun 2026",
        role: "Solo (planning, design, development, and deployment end-to-end)",
        tags: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "R2"],
        title: "Bulletin Viewer PWA (Jamsil Joongang Church)",
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

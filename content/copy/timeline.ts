import type { Dictionary } from "@/lib/locale";

interface TimelineItem {
  date: string;
  description: string;
  label: string;
}

interface TimelineCopy {
  intro: string;
  items: TimelineItem[];
}

export const timelineCopy: Dictionary<TimelineCopy> = {
  ko: {
    intro: "코코넛사일로 2020.12 ~ 현재",
    items: [
      {
        date: "2020.12",
        description: "코코넛사일로 합류, FE 개발 시작",
        label: "입사",
      },
      {
        date: "2021.12",
        description: "2~6인 규모 FE 팀 리드 시작, 기술 의사결정 주도",
        label: "FE Team Lead",
      },
      {
        date: "2022.04",
        description: "전 프로젝트 TypeScript 마이그레이션",
        label: "TypeScript 전환",
      },
      {
        date: "2024.03",
        description: "pnpm workspace + Turborepo 기반 모노레포 전환",
        label: "Monorepo 구축",
      },
      {
        date: "2025.01",
        description: "GitHub Actions 기반 20개 배포 파이프라인 구축",
        label: "CI/CD 자동화",
      },
      {
        date: "2025.09",
        description: "Typia 런타임 검증 전 앱 적용",
        label: "Runtime Validation",
      },
      {
        date: "2026.02",
        description: "배럴 파일 1,600개 제거, 번들 최대 92% 감소",
        label: "번들·DX 최적화",
      },
    ],
  },
  en: {
    intro: "Coconutsilo, Dec 2020 – Present",
    items: [
      {
        date: "2020.12",
        description: "Joined Coconutsilo, started FE development",
        label: "Joined",
      },
      {
        date: "2021.12",
        description:
          "Started leading a 2–6 person FE team, drove tech decisions",
        label: "FE Team Lead",
      },
      {
        date: "2022.04",
        description: "Migrated all projects to TypeScript",
        label: "TypeScript Migration",
      },
      {
        date: "2024.03",
        description: "Migrated to a monorepo on pnpm workspace + Turborepo",
        label: "Monorepo Setup",
      },
      {
        date: "2025.01",
        description: "Built 20 deploy pipelines on GitHub Actions",
        label: "CI/CD Automation",
      },
      {
        date: "2025.09",
        description: "Rolled out Typia runtime validation across all apps",
        label: "Runtime Validation",
      },
      {
        date: "2026.02",
        description: "Removed 1,600 barrel files, cut bundle size up to 92%",
        label: "Bundle & DX Optimization",
      },
    ],
  },
};

import type { Dictionary } from "@/lib/locale";

interface Migration {
  background: string;
  from: string;
  result: string;
  to: string;
}

interface TechMigrationsCopy {
  intro: string;
  migrations: Migration[];
}

export const techMigrationsCopy: Dictionary<TechMigrationsCopy> = {
  ko: {
    intro: "기술 전환 요약",
    migrations: [
      {
        background: "런타임 오류가 배포 후에야 발견",
        from: "JavaScript",
        result: "컴파일 타임 오류 검출, DX 개선",
        to: "TypeScript",
      },
      {
        background: "서버 상태 코드 과다",
        from: "Redux + Redux-Saga",
        result: "서버 상태 보일러플레이트 대폭 감소",
        to: "TanStack Query",
      },
      {
        background: "빌드·HMR 속도 저하",
        from: "CRA",
        result: "빌드 시간 대폭 단축, HMR 즉각 반응",
        to: "Vite",
      },
      {
        background: "Form마다 개별 구현으로 중복 발생",
        from: "개별 구현",
        result: "Form 로직 표준화, 재사용 증가",
        to: "React Hook Form + Zod",
      },
      {
        background: "TypeScript 친화성 부족, 코드 복잡",
        from: "Yup",
        result: "스키마에서 타입 자동 추론, DX 개선",
        to: "Zod",
      },
      {
        background: "BE 지연 시 FE 일정도 함께 밀림",
        from: "없음",
        result: "FE·BE 개발 일정 완전 분리",
        to: "MSW",
      },
      {
        background: "node_modules 중복으로 디스크·설치 느림",
        from: "npm",
        result: "설치 속도·디스크 사용량 체감상 크게 개선",
        to: "pnpm",
      },
      {
        background: "공용 코드 중복·버전 불일치",
        from: "개별 레포",
        result: "10개 앱 동일 패키지 사용, 수정 즉시 전 앱 반영",
        to: "Monorepo (Turborepo)",
      },
    ],
  },
  en: {
    intro: "Summary of technology migrations",
    migrations: [
      {
        background: "Runtime errors only surfaced after deploy",
        from: "JavaScript",
        result: "Compile-time error detection, improved DX",
        to: "TypeScript",
      },
      {
        background: "Excessive server-state boilerplate",
        from: "Redux + Redux-Saga",
        result: "Significantly less server-state boilerplate",
        to: "TanStack Query",
      },
      {
        background: "Slow build and HMR",
        from: "CRA",
        result: "Build time cut drastically, instant HMR",
        to: "Vite",
      },
      {
        background: "Duplicated logic across each form",
        from: "Ad-hoc per form",
        result: "Standardized form logic, more reuse",
        to: "React Hook Form + Zod",
      },
      {
        background: "Poor TypeScript fit, complex code",
        from: "Yup",
        result: "Auto-inferred types from schema, improved DX",
        to: "Zod",
      },
      {
        background: "BE delays pushed back FE schedules too",
        from: "None",
        result: "FE and BE development schedules fully decoupled",
        to: "MSW",
      },
      {
        background: "Duplicate node_modules slowed disk and installs",
        from: "npm",
        result: "Noticeably faster installs, lower disk usage",
        to: "pnpm",
      },
      {
        background: "Duplicated shared code, version mismatches",
        from: "Separate repos",
        result:
          "10 apps share identical packages, fixes apply instantly everywhere",
        to: "Monorepo (Turborepo)",
      },
    ],
  },
};

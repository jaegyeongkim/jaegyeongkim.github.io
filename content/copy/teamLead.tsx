import type { ReactNode } from "react";

import type { Dictionary } from "@/lib/locale";

interface LeadItem {
  description: ReactNode;
  title: string;
}

interface TeamLeadCopy {
  intro: ReactNode;
  items: LeadItem[];
}

export const teamLeadCopy: Dictionary<TeamLeadCopy> = {
  ko: {
    intro:
      "2021년부터 2~6인 규모의 프론트엔드 팀을 리드하며 일정 관리, 기술 의사결정, 코드 표준화, 온보딩을 담당했습니다.",
    items: [
      {
        description:
          "매일 같은 시간에 30분 이내로 진행. 블로커 공유와 일정 조율 중심으로 운영",
        title: "일일 스크럼 운영",
      },
      {
        description: "코드 컨벤션·아키텍처·배포 프로세스 문서화 및 질문 대응",
        title: "신규 팀원 온보딩",
      },
      {
        description:
          "TypeScript 도입, 모노레포 전환, Vite 마이그레이션 등 스택 전환 시점과 방향 결정",
        title: "기술 의사결정 주도",
      },
      {
        description: "타입 네이밍 규칙, 컴포넌트 패턴, 사전 PR 체크리스트 수립",
        title: "개발 표준 정립",
      },
    ],
  },
  en: {
    intro:
      "Since 2021, I've led frontend teams of 2–6 people, owning scheduling, technical decisions, code standardization, and onboarding.",
    items: [
      {
        description:
          "Run at the same time every day, under 30 minutes. Focused on sharing blockers and aligning schedules",
        title: "Daily Scrum",
      },
      {
        description:
          "Documented code conventions, architecture, and deploy process, and answered follow-up questions",
        title: "New Hire Onboarding",
      },
      {
        description:
          "Led timing and direction decisions for TypeScript adoption, monorepo migration, Vite migration, and more",
        title: "Technical Decision-Making",
      },
      {
        description:
          "Established type naming rules, component patterns, and a pre-PR checklist",
        title: "Development Standards",
      },
    ],
  },
};

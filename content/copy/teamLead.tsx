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
    intro: (
      <>
        2021년부터{" "}
        <strong className="text-[var(--foreground)]">2~6인 규모</strong>의
        프론트엔드 팀을 리드하며 일정 관리, 기술 의사결정, 코드 표준화, 온보딩을
        담당했습니다.
      </>
    ),
    items: [
      {
        description: (
          <>
            매일 같은 시간에{" "}
            <strong className="text-[var(--foreground)]">30분 이내</strong>로
            진행. 블로커 공유와 일정 조율 중심으로 운영
          </>
        ),
        title: "일일 스크럼 운영",
      },
      {
        description: (
          <>
            코드 컨벤션·아키텍처·배포 프로세스{" "}
            <strong className="text-[var(--foreground)]">문서화</strong>, 1:1{" "}
            <strong className="text-[var(--foreground)]">직접 교육</strong>
          </>
        ),
        title: "신규 팀원 온보딩",
      },
      {
        description: (
          <>
            TypeScript 도입, 모노레포 전환, Vite 마이그레이션 등{" "}
            <strong className="text-[var(--foreground)]">
              스택 전환 시점과 방향 결정
            </strong>
          </>
        ),
        title: "기술 의사결정 주도",
      },
      {
        description: (
          <>
            타입 네이밍 규칙, 컴포넌트 패턴,{" "}
            <strong className="text-[var(--foreground)]">
              사전 PR 체크리스트
            </strong>{" "}
            수립
          </>
        ),
        title: "개발 표준 정립",
      },
    ],
  },
  en: {
    intro: (
      <>
        Since 2021, I&apos;ve led frontend teams of{" "}
        <strong className="text-[var(--foreground)]">2–6 people</strong>, owning
        scheduling, technical decisions, code standardization, and onboarding.
      </>
    ),
    items: [
      {
        description: (
          <>
            Run at the same time every day,{" "}
            <strong className="text-[var(--foreground)]">
              under 30 minutes
            </strong>
            . Focused on sharing blockers and aligning schedules
          </>
        ),
        title: "Daily Scrum",
      },
      {
        description: (
          <>
            <strong className="text-[var(--foreground)]">Documented</strong>{" "}
            code conventions, architecture, and deploy process, plus{" "}
            <strong className="text-[var(--foreground)]">1:1 mentoring</strong>
          </>
        ),
        title: "New Hire Onboarding",
      },
      {
        description: (
          <>
            Led{" "}
            <strong className="text-[var(--foreground)]">
              timing and direction decisions
            </strong>{" "}
            for TypeScript adoption, monorepo migration, Vite migration, and
            more
          </>
        ),
        title: "Technical Decision-Making",
      },
      {
        description: (
          <>
            Established type naming rules, component patterns, and a{" "}
            <strong className="text-[var(--foreground)]">
              pre-PR checklist
            </strong>
          </>
        ),
        title: "Development Standards",
      },
    ],
  },
};

import type { ReactNode } from "react";

interface LeadItem {
  description: ReactNode;
  title: string;
}

const LEAD_ITEMS: LeadItem[] = [
  {
    description: (
      <>
        매일 같은 시간에{" "}
        <strong className="text-[var(--foreground)]">30분 이내</strong>로 진행.
        블로커 공유와 일정 조율 중심으로 운영
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
        <strong className="text-[var(--foreground)]">사전 PR 체크리스트</strong>{" "}
        수립
      </>
    ),
    title: "개발 표준 정립",
  },
];

const TeamLead = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-14 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            Team Lead
          </p>
          <p className="text-base text-[var(--muted)]">
            2021년부터{" "}
            <strong className="text-[var(--foreground)]">2~6인 규모</strong>의
            프론트엔드 팀을 리드하며 일정 관리, 기술 의사결정, 코드 표준화,
            온보딩을 담당했습니다.
          </p>
        </div>

        <div className="lg:ml-[calc(200px+6rem)] grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEAD_ITEMS.map(({ description, title }) => (
            <div key={title} className="space-y-2 py-6 border-t border-[var(--border)]">
              <p className="text-base font-medium text-[var(--foreground)]">
                {title}
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLead;

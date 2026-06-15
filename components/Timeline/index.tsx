interface TimelineItem {
  description: string;
  label: string;
  year: string;
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    description: "코코넛사일로 입사, FE 개발 시작",
    label: "입사",
    year: "2020.12",
  },
  {
    description: "2~6인 규모 FE 팀 리드 시작, 기술 의사결정 주도",
    label: "FE Team Lead",
    year: "2021",
  },
  {
    description: "전 프로젝트 TypeScript 마이그레이션 완료",
    label: "TypeScript 전환",
    year: "2022",
  },
  {
    description: "pnpm workspace + Turborepo 기반 모노레포 전환",
    label: "Monorepo 구축",
    year: "2023",
  },
  {
    description: "GitHub Actions 기반 20개 배포 파이프라인 구축",
    label: "CI/CD 자동화",
    year: "2024",
  },
  {
    description: "Typia 런타임 검증 도입, 번들 최적화 3단계 적용",
    label: "Runtime Validation",
    year: "2025",
  },
];

const Timeline = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            Career Timeline
          </p>
          <p className="text-base text-[var(--muted)]">
            코코넛사일로 2020.12 ~ 현재
          </p>
        </div>

        <div className="lg:ml-[calc(200px+6rem)]">
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[var(--border)]" />

            <div className="space-y-0">
              {TIMELINE_ITEMS.map(({ description, label, year }, index) => (
                <div key={year} className="flex gap-8 group">
                  <div className="w-[72px] shrink-0 pt-5 text-right">
                    <span className="text-xs font-mono text-[var(--muted)]">
                      {year}
                    </span>
                  </div>

                  <div className="relative flex items-start pt-4 pb-8">
                    <div
                      className={`
                        w-2.5 h-2.5 rounded-full border-2 shrink-0 mt-1.5 relative z-10 transition-colors duration-200
                        ${
                          index === TIMELINE_ITEMS.length - 1
                            ? "border-[var(--accent)] bg-[var(--accent)]"
                            : "border-[var(--border)] bg-[var(--background)] group-hover:border-[var(--foreground)]"
                        }
                      `}
                    />
                  </div>

                  <div className="pt-3 pb-8 space-y-0.5">
                    <p className="text-base font-medium text-[var(--foreground)]">
                      {label}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

interface TimelineItem {
  date: string;
  description: string;
  label: string;
}

const TIMELINE_ITEMS: TimelineItem[] = [
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
];

const Timeline = () => {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-14 border-t border-[var(--border)]"
      id="timeline"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            History
          </p>
          <p className="text-base text-[var(--muted)]">
            코코넛사일로 2020.12 ~ 현재
          </p>
        </div>

        <div className="lg:ml-[calc(200px+6rem)]">
          <table className="w-full">
            <tbody>
              {TIMELINE_ITEMS.map(({ date, description, label }, index) => (
                <tr
                  key={date}
                  className={`group border-t border-[var(--border)] ${
                    index === TIMELINE_ITEMS.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }`}
                >
                  <td className="py-5 pr-8 w-[90px] shrink-0 align-top">
                    <span className="text-xs font-mono text-[var(--muted)]">
                      {date}
                    </span>
                  </td>
                  <td className="py-5 pr-8 w-[180px] align-top">
                    <span
                      className={`text-sm font-medium ${
                        index === TIMELINE_ITEMS.length - 1
                          ? "text-[var(--accent)]"
                          : "text-[var(--foreground)]"
                      }`}
                    >
                      {label}
                    </span>
                  </td>
                  <td className="py-5 align-top">
                    <span className="text-sm text-[var(--muted)]">
                      {description}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

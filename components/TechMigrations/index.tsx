interface Migration {
  background: string;
  from: string;
  result: string;
  to: string;
}

const MIGRATIONS: Migration[] = [
  {
    background: "런타임 오류가 배포 후에야 발견",
    from: "JavaScript",
    result: "컴파일 타임 오류 검출, DX 개선",
    to: "TypeScript",
  },
  {
    background: "서버 상태 코드 과다",
    from: "Redux + Redux-Saga",
    result: "서버 상태 코드 30–40% 감소",
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
    result: "설치 속도 50%+ 단축, 수십 GB 절감",
    to: "pnpm",
  },
  {
    background: "공용 코드 중복·버전 불일치",
    from: "개별 레포",
    result: "10개 앱 동일 패키지 사용, 수정 즉시 전 앱 반영",
    to: "Monorepo (Turborepo)",
  },
];

const TechMigrations = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-10 border-t border-[var(--border)]" id="tech-migrations">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            Migrations
          </p>
          <p className="text-base text-[var(--muted)]">기술 전환 요약</p>
        </div>

        <div className="lg:ml-[calc(200px+6rem)] overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 pr-6 text-xs font-mono text-[var(--muted)] uppercase tracking-wider font-normal w-[140px]">
                  From
                </th>
                <th className="text-left py-3 pr-6 text-xs font-mono text-[var(--muted)] uppercase tracking-wider font-normal w-[180px]">
                  To
                </th>
                <th className="text-left py-3 pr-6 text-xs font-mono text-[var(--muted)] uppercase tracking-wider font-normal">
                  Background
                </th>
                <th className="text-left py-3 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-normal">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {MIGRATIONS.map(({ background, from, result, to }) => (
                <tr
                  key={from}
                  className="border-b border-[var(--border)] hover:bg-[#fafafa] transition-colors"
                >
                  <td className="py-4 pr-6 text-[var(--muted)] font-mono text-xs">
                    {from}
                  </td>
                  <td className="py-4 pr-6 font-medium text-[var(--foreground)]">
                    {to}
                  </td>
                  <td className="py-4 pr-6 text-[var(--muted)]">{background}</td>
                  <td className="py-4 text-[var(--foreground)]">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechMigrations;

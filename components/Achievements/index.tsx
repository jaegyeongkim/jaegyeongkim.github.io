interface Achievement {
  detail: string;
  problem: string;
  result: string;
  title: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    detail: "Typia 런타임 검증 + Pessimistic 타입 설계",
    problem: "API 명세 불일치 시 런타임에서야 오류를 발견",
    result: "서비스 중단 없이 대응, 불일치 필드 즉시 특정으로 디버깅 시간 단축",
    title: "Type-safe API Layer",
  },
  {
    detail: "pnpm workspace + Turborepo 기반 전환",
    problem: "10개 앱이 각자 다른 버전의 공용 코드 사용",
    result: "206개+ 공용 컴포넌트, 165개+ 테스트를 단일 패키지로 통합 운영",
    title: "Monorepo Architecture",
  },
  {
    detail: "GitHub Actions 기반 React(S3/CloudFront) · Next.js(Docker/ECR/EC2)",
    problem: "배포마다 수동 작업, 롤백에 수십 분 소요",
    result: "20개 파이프라인, 수 분 내 배포·롤백 가능",
    title: "CI/CD Automation",
  },
  {
    detail: "lazy import · manualChunks · 배럴 파일 1,600개 제거 3단계 적용",
    problem: "초기 로드 번들 4,990kB, VSCode 자동완성 10초 지연",
    result: "번들 92% 감소(→ 375kB), 자동완성 2초, 개발 서버 기동 6초",
    title: "Bundle & DX Optimization",
  },
];

const Achievements = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            Key Achievements
          </p>
          <p className="text-base text-[var(--muted)]">
            팀 생산성과 서비스 안정성을 높이기 위해 주도한 플랫폼·아키텍처
            개선
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
          {ACHIEVEMENTS.map(({ detail, problem, result, title }) => (
            <div
              key={title}
              className="bg-[var(--background)] p-8 space-y-6 hover:bg-[#fafafa] transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {title}
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                    Problem
                  </p>
                  <p className="text-sm text-[var(--foreground)]">{problem}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                    Solution
                  </p>
                  <p className="text-sm text-[var(--muted)]">{detail}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
                    Result
                  </p>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    {result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

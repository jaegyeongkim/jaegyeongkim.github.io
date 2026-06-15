interface Achievement {
  detail: string[];
  metric: string;
  metricLabel: string;
  problem: string;
  results: string[];
  title: string;
}

interface OtherImprovement {
  description: string;
  title: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    detail: [
      "Typia 런타임 검증 — API 응답 수신 시 명세 불일치 필드를 즉시 로그 출력, 해당 필드 undefined 처리로 서비스 유지",
      "팩토리 함수로 공용화 → 타입만 넘기면 10개 앱 전체에 동일한 검증 자동 적용",
      "Pessimistic 타입 설계 — 모든 API 응답 필드를 undefined 가능으로 가정, 컴포넌트에서 undefined 처리를 타입 레벨에서 강제",
      "dev / dev-typia 스크립트 분리로 일반 개발은 속도 우선, QA·디버깅은 검증 모드로 전환",
    ],
    metric: "88%",
    metricLabel: "서버 기동 단축 (53초 → 6초)",
    problem:
      "API 명세 불일치 시 서비스가 중단됐고, 원인 필드 특정에 시간이 오래 걸렸습니다. 컴포넌트의 undefined 처리 누락으로 화면이 깨지는 사고도 반복됐습니다.",
    results: [
      "API 명세 불일치 시에도 서비스 중단 없이 정상 동작 유지",
      "불일치 발생 즉시 원인 필드 특정 가능",
      "개발 서버 기동 시간 최대 88% 단축 (53초 → 6초)",
    ],
    title: "Type-safe API Layer",
  },
  {
    detail: [
      "React 앱 — 빌드·업로드와 배포(CloudFront 캐시 무효화) 단계 분리, 원하는 시점에 배포 명령만 실행",
      "시맨틱 버저닝으로 S3에 버전별 결과물 보관 → 즉시 롤백 가능",
      "Next.js 앱 — Docker 이미지 빌드 → AWS ECR 푸시 → EC2 Pull → 컨테이너 실행 자동화",
      "10개 프로젝트 × 개발·운영 환경 = 20개 파이프라인을 3개 워크플로우 파일로 관리",
    ],
    metric: "20개",
    metricLabel: "파이프라인 (수 분 내 배포·롤백)",
    problem:
      "React 앱은 S3 수동 업로드 → CloudFront 초기화, Next.js 앱은 EC2 접속 → git pull → 빌드 → 재시작을 배포마다 반복했습니다. 롤백도 수동 복구로 오래 걸렸습니다.",
    results: [
      "배포·롤백을 수 분 내 처리",
      "문제 발생 시 이전 버전으로 즉시 롤백",
      "반복적인 수동 배포 작업 제거 → 휴먼 에러 감소",
    ],
    title: "CI/CD Automation",
  },
  {
    detail: [
      "pnpm workspace + Turborepo 기반 모노레포 전환",
      "turbo.json 하나로 전 앱의 환경별 태스크(dev / dev-mock / dev-typia / build-prod) 일관 관리",
      "공용 패키지: apis · components(206개+) · hooks · utils · services · types · styles · mocks",
      "Vitest + Testing Library로 공용 패키지 테스트 165개 구축 → 공용 코드 변경 시 오류 사전 감지",
    ],
    metric: "206+",
    metricLabel: "공용 컴포넌트 · 테스트 165개",
    problem:
      "서비스가 늘어날수록 공용 컴포넌트와 유틸이 레포마다 중복 복사됐습니다. 한 곳에서 버그를 고쳐도 다른 레포에 반영이 안 되고 버전 불일치 문제가 반복됐습니다.",
    results: [
      "10개 앱에서 동일 공용 패키지 사용 — 수정 즉시 전 앱 반영",
      "환경별 태스크 turbo.json 하나로 전 앱 일관 적용",
      "테스트 165개로 공용 코드 변경 안전망 확보",
    ],
    title: "Monorepo Architecture",
  },
  {
    detail: [
      "lazy import 코드 스플리팅 — 페이지 단위 분리로 초기 로드 범위 축소",
      "Vite manualChunks 설계 — 외부 라이브러리·공용 패키지·앱 코드를 종류별 분리, 미변경 라이브러리는 브라우저 캐시 재사용",
      "배럴 파일 1,600개 제거 + assets·i18n 앱별 이관 — 미사용 파일 번들 포함 차단",
    ],
    metric: "92%",
    metricLabel: "초기 번들 감소 (4,990kB → 375kB)",
    problem:
      "초기 React 앱 빌드 결과물이 단일 index.js에 집중되어 초기 로딩이 느렸습니다.",
    results: [
      "초기 진입 번들 최대 92% 감소 (carAdmin 4,990kB → 375kB)",
      "index.js 최대 91% 감소 (carInspection 925kB → 86kB)",
      "VSCode 자동완성 속도 10초 → 2초 (-80%)",
    ],
    title: "Bundle & DX Optimization",
  },
];

const OTHER_IMPROVEMENTS: OtherImprovement[] = [
  {
    description:
      "버튼 연속 클릭 시 같은 API가 여러 번 실행되는 문제를 해결하기 위해 useMutation 기반 커스텀 훅 구현. 진행 중인 요청에 고유 ID를 부여해 동일 요청 차단, 에러 처리 방식(전역 / 화면별)을 훅 사용 시점에 반드시 선택하도록 강제해 팀 내 에러 처리 누락 방지.",
    title: "API 중복 호출 방지 (useSafeMutation)",
  },
  {
    description:
      "커밋 전 ESLint 자동 수정 + Prettier 포매팅 강제 실행, 허용된 커밋 prefix 없으면 커밋 차단, 스테이징된 파일을 분석해 서비스명을 커밋 메시지에 자동 추가. PR 리뷰에서 코드 스타일 nitpick이 사라져 핵심 로직 리뷰에 집중 가능.",
    title: "커밋 자동화 (Husky + lint-staged)",
  },
  {
    description:
      "ESLint — import 순서 자동 정렬, import type 자동 강제. Stylelint — CSS 속성 순서 자동 정렬. 정적 분석 자동화로 코드 스타일 지적 없이 핵심 로직 리뷰에만 집중.",
    title: "정적 분석 자동화 (ESLint / Stylelint)",
  },
];

const Achievements = () => {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-t border-[var(--border)]"
      id="achievements"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            Key Achievements
          </p>
          <p className="text-base text-[var(--muted)]">
            팀 생산성과 서비스 안정성을 높이기 위해 주도한 플랫폼·아키텍처
            개선
          </p>
        </div>

        <div className="space-y-6">
          {ACHIEVEMENTS.map(({ detail, metric, metricLabel, problem, results, title }) => (
            <div
              key={title}
              className="border border-[var(--border)] overflow-hidden"
            >
              {/* Card header */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-8 py-6 border-b border-[var(--border)]">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[var(--accent)] tracking-tight leading-none">
                    {metric}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{metricLabel}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr]">
                <div className="p-8 space-y-3 md:border-r border-b md:border-b-0 border-[var(--border)]">
                  <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                    Problem
                  </p>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">
                    {problem}
                  </p>
                </div>

                <div className="p-8 space-y-4 md:border-r border-b md:border-b-0 border-[var(--border)]">
                  <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                    Solution
                  </p>
                  <ol className="space-y-3">
                    {detail.map((item, i) => (
                      <li
                        key={item}
                        className="flex gap-3 items-start"
                      >
                        <span className="text-xs font-mono text-[var(--accent)] shrink-0 mt-0.5 w-5 pt-px">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-[var(--muted)] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="p-8 space-y-4 bg-[var(--surface)]">
                  <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
                    Result
                  </p>
                  <ul className="space-y-3">
                    {results.map((result) => (
                      <li key={result} className="flex gap-3 items-start">
                        <span className="text-[var(--accent)] font-bold text-base shrink-0 mt-0.5">
                          ↑
                        </span>
                        <span className="text-sm font-medium text-[var(--foreground)] leading-relaxed">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
            <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest">
              Other
            </p>
            <p className="text-base text-[var(--muted)]">기타 개선 사례</p>
          </div>

          <div className="lg:ml-[calc(200px+6rem)] grid grid-cols-1 md:grid-cols-3 gap-6">
            {OTHER_IMPROVEMENTS.map(({ description, title }) => (
              <div
                key={title}
                className="space-y-3 py-6 border-t border-[var(--border)]"
              >
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {title}
                </p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

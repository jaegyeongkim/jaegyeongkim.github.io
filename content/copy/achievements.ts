import type { Dictionary } from "@/lib/locale";

interface Achievement {
  blogSlug?: string;
  detail: string[];
  problem: string;
  results: string[];
  title: string;
}

interface OtherImprovement {
  blogSlug?: string;
  description: string;
  title: string;
}

interface AchievementsCopy {
  achievements: Achievement[];
  intro: string;
  otherImprovements: OtherImprovement[];
  otherLabel: string;
}

export const achievementsCopy: Dictionary<AchievementsCopy> = {
  ko: {
    intro:
      "팀 생산성과 서비스 안정성을 높이기 위해 주도한 플랫폼·아키텍처 개선",
    otherLabel: "기타 개선 사례",
    achievements: [
      {
        detail: [
          "Typia로 API 응답 값과 명세를 비교해 런타임에 일치 여부 검증",
          "불일치 필드는 즉시 로그로 기록하고 불일치하는 모든 필드를 undefined 처리",
          "모든 API 응답 필드를 undefined 가능으로 가정하는 Pessimistic 타입 설계로, 코드에서 undefined 예외 처리를 하도록 타입 레벨에서 강제",
          "이 과정을 팩토리 함수로 공용화 → 타입만 넘기면 10개 앱 전체에 동일한 검증 자동 적용",
        ],
        problem:
          "API 명세와 실제 API 반환 값이 불일치 시 흰 화면이 보여 서비스를 이용할 수 없었습니다. 또한, 원인 필드 특정에 시간이 오래 걸렸습니다.",
        results: [
          "API 응답 값과 명세가 불일치해도 서비스 중단 없이 정상 동작 유지",
          "불일치 발생 즉시 원인 필드 특정 가능 & 빠르게 이슈 대응 가능",
        ],
        title: "타입 안전 API 검증",
        blogSlug: "typia-runtime-validation",
      },
      {
        detail: [
          "React(SPA) — 재빌드 없이 이미 올라간 버전으로 즉시 재배포·롤백할 수 있도록, 빌드·S3 업로드용과 배포·CloudFront 무효화용 GitHub Actions 2개로 단계를 분리",
          "Next.js(SSR) — 매번 새로 빌드하지 않고 ECR에 쌓인 이미지로 재배포할 수 있도록, Docker 이미지 빌드 / AWS ECR 푸시 / EC2 Pull·컨테이너 실행 GitHub Actions 3개로 단계를 분리",
          "공용 validation 워크플로우로 배포 전 버전 형식·환경별 실행 권한·AWS 리소스 존재 여부를 자동 검증",
          "모노레포 안에서도 10개 서비스를 한 번에 배포하지 않고, 원하는 서비스만 원하는 시점에 독립적으로 배포할 수 있도록 구성",
          "시맨틱 버저닝으로 S3에 버전별 결과물을 보관해 문제 발생 시 즉시 이전 버전으로 롤백",
        ],
        problem:
          "React(SPA)는 로컬 빌드 → S3 업로드 → CloudFront 초기화 과정을 배포할 때마다 사람이 수동으로 반복해야했습니다. 또한, Next.js(SSR)는 EC2 접속 → git pull → 빌드 → 재시작을 배포할 때마다 사람이 직접 반복해야 했습니다. 배포 절차가 문서로 작성되어 있었지만, 관리해야할 문서도 많았고, 수동 작업이 많아 휴먼 에러도 자주 발생했습니다. 롤백도 수동 복구라 오래 걸렸습니다.",
        results: [
          "복잡한 배포 지식 없이 누구나 간단하게 배포 명령만 실행",
          "validation 워크플로우가 버전 형식·환경 권한을 자동 검증해 잘못된 배포를 사전에 차단",
          "배포·롤백 모두 수 분 내 처리",
          "반복적인 수동 작업 제거로 휴먼 에러 방지",
        ],
        title: "CI/CD 자동화",
        blogSlug: "github-actions-cicd",
      },
      {
        detail: [
          "10개로 흩어져 있던 멀티 레포를 Turborepo 기반 모노레포 1개로 전환",
          "공용 코드를 apis · components · hooks · utils · services · types · styles 8개 카테고리 패키지로 구조화 — 컴포넌트 164개, hooks 46개, utils 40개 등 총 300개+ 모듈",
          "Vitest + Testing Library로 hooks·utils·components에 테스트 153개 구축 → 공용 코드 변경 시 오류 사전 감지",
        ],
        problem:
          "O2O 내 서비스가 늘어날수록 관리해야 할 레포도 함께 늘어났고, 동일한 컴포넌트와 유틸이 레포마다 중복 복사됐습니다. 한 레포에서 컴포넌트 버그를 고쳐도 다른 레포에는 반영되지 않아 코드 불일치 문제가 반복됐습니다. 코드를 일치시키려면 레포 수만큼 같은 작업과 PR 확인을 반복해야 해서 업무 비효율이 컸습니다.",
        results: [
          "10개 앱에서 동일 공용 패키지 사용 — 수정 즉시 전 앱 반영, 관리할 레포 수 감소로 업무 효율 향상",
          "hooks 46개 중 44개, utils 40개 중 37개, components 164개 중 72개에 테스트 적용 — 공용 코드 라인 커버리지 52%로 핵심 로직 안전망 확보",
        ],
        title: "모노레포 아키텍처",
        blogSlug: "monorepo-shared-components",
      },
      {
        detail: [
          "lazy import 코드 스플리팅 — 페이지 단위로 분리해 초기 로드 범위 축소",
          "Vite manualChunks 분리 규칙 설계 — 외부 라이브러리·공용 패키지·앱 코드를 종류별로 분리해, 변경 없는 라이브러리는 브라우저 캐시로 재사용",
          "배럴 파일 1,600개 제거 + assets·i18n 앱별 이관 — 사용하지 않는 SVG·PNG·언어 파일이 번들에 포함되는 것을 차단",
        ],
        problem:
          "초기 React 앱 빌드 결과물이 단일 index.js에 집중되어 초기 로딩이 느렸습니다.",
        results: [
          "초기 진입 번들 최대 92% 감소 (carAdmin 4,990kB → 375kB)",
          "manualChunks 적용 후 index.js 최대 91% 감소 (carInspection 925kB → 86kB)",
        ],
        title: "번들 최적화",
        blogSlug: "vite-manual-chunks",
      },
      {
        detail: [
          "useModal 구독 범위를 필요한 함수 참조만으로 좁혀 로그아웃 버그 수정 — modals 배열 전체 구독을 제거해 불필요한 리렌더링 차단",
          "RoutePathProvider, AuthProvider(class 인스턴스 + ContextAPI), useGoogleMap, Toast, Navbar 등을 Zustand selector 기반과 React.memo로 전환해 불필요한 리렌더링 제거",
          "useLocation 의존성을 window.location.pathname과 router 싱글톤 패턴으로 대체해 react-router-dom 상태 변경에 의한 추가 리렌더링 제거",
          "개선된 공통 코드(Auth.tsx, authStore.ts 등)를 packages/로 이동해 10개 앱 전체에 일괄 적용",
        ],
        problem:
          "전역 상태를 잘못 공유하는 구조가 불필요한 리렌더링을 유발하고 있었고, 일부는 실제 버그로 이어지고 있었습니다. useModal이 modals 배열 전체를 구독하는 구조로 인해, 로그아웃 시 모달 상태 초기화 → 전체 리렌더링 → 만료된 토큰으로 API 재요청 → 401 오류 → 흰 화면이 뜨는 버그가 있었습니다. 또한 RoutePathProvider, AuthProvider 등이 ContextAPI 기반이라 NavigationBar를 클릭할 때마다 Header 내 모든 아이콘·버튼·드롭다운이 리렌더링되는 상황을 React DevTools Profiler로 확인했습니다.",
        results: [
          "로그아웃 시 401 오류 + 흰 화면 버그 수정",
          "NavigationBar 클릭 시 Header 전체 리렌더링 제거 (React DevTools Profiler 확인)",
          "10개 앱 전체 불필요 리렌더링 구조 개선",
        ],
        title: "전역 상태 최적화",
        blogSlug: "context-to-zustand",
      },
    ],
    otherImprovements: [
      {
        description:
          "모노레포에서 i18next 번역 타입 선언 규모가 커지면서 자동완성 계산에 최대 10초가 걸렸습니다. TypeScript 5 업그레이드 + 서비스별 JSON 분리, 타입 선언 단순화(typeof json → Record<key, string>), 배럴 파일 약 1,600개 제거를 단계적으로 적용해 2초로 단축(–80%).",
        title: "VSCode 자동완성 속도 개선 (10초 → 2초)",
        blogSlug: "vite-manual-chunks",
      },
      {
        description:
          "버튼 연속 클릭 시 같은 API가 여러 번 실행되는 문제를 해결하기 위해 useMutation 기반 커스텀 훅 구현. 진행 중인 요청에 고유 ID를 부여해 동일 요청 차단, 에러 처리 방식(전역 / 화면별)을 훅 사용 시점에 반드시 선택하도록 강제해 팀 내 에러 처리 누락 방지.",
        title: "API 중복 호출 방지 (useSafeMutation)",
        blogSlug: "duplicate-api-call",
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
    ],
  },
  en: {
    intro:
      "Platform and architecture improvements I led to boost team productivity and service stability",
    otherLabel: "Other improvements",
    achievements: [
      {
        detail: [
          "Typia runtime validation — on every API response, mismatched fields are logged immediately and treated as undefined so the service keeps running",
          "Generalized via a factory function — pass a type, and every one of the 10 apps gets the same validation automatically",
          "Pessimistic type design — every API response field is assumed possibly undefined, forcing components to handle undefined at the type level",
        ],
        problem:
          "When the API spec drifted, the service went down, and pinpointing the offending field took a long time. Components that missed undefined handling also caused repeated screen-breaking incidents.",
        results: [
          "Service keeps running normally even when the API spec drifts",
          "The offending field can be pinpointed the moment a mismatch occurs",
        ],
        title: "Type-safe API Layer",
        blogSlug: "typia-runtime-validation",
      },
      {
        detail: [
          "React (SPA) — split build/upload from deploy across 2 GitHub Actions workflows, so an already-built version can redeploy or roll back instantly without rebuilding",
          "Next.js (SSR) — split image build, ECR push, and container run across 3 GitHub Actions workflows, so an image already in ECR can redeploy without rebuilding",
          "A shared validation workflow automatically checks version format, per-environment permissions, and that the target AWS resources exist before every deploy",
          "Even inside the monorepo, services deploy independently rather than all at once — any service can ship on its own schedule",
          "Semantic versioning keeps every build in S3, enabling instant rollback",
        ],
        problem:
          "Even though 10 apps lived in one monorepo, every deploy meant a person manually repeating the same steps — a local build, S3 upload, and CloudFront invalidation for React; SSH into EC2, git pull, build, and restart for Next.js. The procedure lived in people's heads instead of being automated, so it had to be re-explained every time ownership changed, and all that manual work meant human error kept creeping in. Rollbacks were manual recoveries that took a long time too.",
        results: [
          "Anyone can run the same deploy procedure without hand-offs, no matter who owns the service now",
          "No deployment expertise needed — anyone can ship with a single command",
          "The validation workflow auto-checks version format and permissions, blocking bad deploys before they happen",
          "Deploy and rollback both complete in minutes",
          "Eliminated repetitive manual work, preventing human error",
        ],
        title: "CI/CD Automation",
        blogSlug: "github-actions-cicd",
      },
      {
        detail: [
          "Migrated 10 scattered multi-repos into a single Turborepo-based monorepo",
          "Structured shared code into 8 category packages — apis · components · hooks · utils · services · types · styles — with 164 components, 46 hooks, 40 utils, and 300+ modules in total",
          "Built 153 tests across hooks, utils, and components with Vitest + Testing Library, catching regressions before they ship",
        ],
        problem:
          "As services grew, shared components and utilities kept getting copy-pasted across repos. Fixing a bug in one place didn't propagate to the others, causing repeated version drift.",
        results: [
          "10 apps share identical packages — fixes apply instantly everywhere",
          "44 of 46 hooks, 37 of 40 utils, and 72 of 164 components have tests — 52% line coverage across shared packages",
        ],
        title: "Monorepo Architecture",
        blogSlug: "monorepo-shared-components",
      },
      {
        detail: [
          "Code-split with lazy imports, scoping the initial load to a per-page basis",
          "Designed Vite manualChunks separation rules — vendor libraries, shared packages, and app code split by kind, so unchanged libraries reuse the browser cache",
          "Removed 1,600 barrel files and moved assets/i18n into each app — blocking unused SVGs, images, and language files from being bundled",
        ],
        problem:
          "The React apps' build output was concentrated into a single index.js, making initial load slow.",
        results: [
          "Entry bundle cut up to 92% (carAdmin 4,990kB → 375kB)",
          "index.js cut up to 91% after manualChunks (carInspection 925kB → 86kB)",
        ],
        title: "Bundle Optimization",
        blogSlug: "vite-manual-chunks",
      },
      {
        detail: [
          "Fixed a logout bug by narrowing useModal's subscription to only the function references it needed, removing the full modals-array subscription that caused unnecessary re-renders",
          "Converted RoutePathProvider, AuthProvider (class instance + ContextAPI), useGoogleMap, Toast, Navbar, and others to Zustand selectors and React.memo to eliminate unnecessary re-renders",
          "Replaced the useLocation dependency with window.location.pathname and a router singleton pattern, removing extra re-renders from react-router-dom state changes",
          "Moved the improved shared code (Auth.tsx, authStore.ts, etc.) into packages/ and rolled it out across all 10 apps at once",
        ],
        problem:
          "A structure that mis-shared global state was causing unnecessary re-renders, some of which turned into real bugs. Because useModal subscribed to the entire modals array, logging out triggered modal state reset → full re-render → API re-request with an expired token → 401 error → a blank white screen. We also confirmed via React DevTools Profiler that, since RoutePathProvider, AuthProvider, and others were ContextAPI-based, every click on the NavigationBar re-rendered every icon, button, and dropdown inside the Header.",
        results: [
          "Fixed the 401 error + white screen bug on logout",
          "Eliminated full Header re-renders on NavigationBar clicks (confirmed via React DevTools Profiler)",
          "Overhauled the unnecessary re-render structure across all 10 apps",
        ],
        title: "Global State Optimization",
        blogSlug: "context-to-zustand",
      },
    ],
    otherImprovements: [
      {
        description:
          "As the i18next translation type declarations grew in the monorepo, autocomplete computation took up to 10 seconds. Upgraded to TypeScript 5, split JSON per service, simplified type declarations (typeof json → Record<key, string>), and removed roughly 1,600 barrel files in stages, cutting it to 2 seconds (-80%).",
        title: "Faster VSCode autocomplete (10s → 2s)",
        blogSlug: "vite-manual-chunks",
      },
      {
        description:
          "Built a useMutation-based custom hook to stop the same API firing multiple times on rapid button clicks. Assigns a unique ID to in-flight requests to block duplicates, and forces every hook usage to explicitly choose an error-handling mode (global or per-screen), preventing missed error handling across the team.",
        title: "Duplicate API call prevention (useSafeMutation)",
        blogSlug: "duplicate-api-call",
      },
      {
        description:
          "Enforces ESLint auto-fix and Prettier formatting before every commit, blocks commits without an allowed prefix, and analyzes staged files to auto-prepend the service name to the commit message. Removed code-style nitpicks from PR review, freeing reviewers to focus on core logic.",
        title: "Commit automation (Husky + lint-staged)",
      },
      {
        description:
          "ESLint — auto-sorts import order and enforces import type. Stylelint — auto-sorts CSS property order. Automated static analysis keeps reviews focused on core logic instead of style nitpicks.",
        title: "Static analysis automation (ESLint / Stylelint)",
      },
    ],
  },
};

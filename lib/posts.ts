export interface Post {
  date: string;
  description: string;
  slug: string;
  tags: string[];
  title: string;
}

export const POSTS: Post[] = [
  {
    slug: "github-actions-cicd",
    title:
      '"다음엔 누가 배포하죠?" — 인수인계 없이 버튼 하나로 끝나는 GitHub Actions 배포 파이프라인',
    description:
      "매번 사람이 손으로 하던 배포를 GitHub Actions로 자동화해, 담당자가 바뀌어도 절차를 새로 배울 필요 없이 버튼 하나로 배포·롤백할 수 있게 만든 과정. 버전별 S3 폴더링으로 재빌드 없는 롤백, build·release 분리로 실측 빌드 43%·배포 26% 단축, 공용 validation 워크플로우로 배포 전 자동 검증까지 다룹니다.",
    date: "2026-07-10",
    tags: ["GitHub Actions", "CI/CD", "AWS", "IAM Role"],
  },
  {
    slug: "monorepo-shared-components",
    title: "디자인 하나 바뀔 때마다 레포 10개를 돌아야 했던 이야기",
    description:
      "같은 피그마 디자인을 쓰는 10개 어드민이 레포마다 흩어져 있던 문제를 모노레포로 합친 과정. Turborepo 도구 선택, 캐시 신뢰 문제, 공용 코드 테스트 자동화까지 공유합니다.",
    date: "2026-07-10",
    tags: ["Turborepo", "Monorepo", "pnpm", "아키텍처"],
  },
  {
    slug: "typia-runtime-validation",
    title:
      '"어? 화면이 안 보여요" API 명세 불일치를 서비스 중단 없이 막아낸 이야기',
    description:
      "Typia 런타임 검증과 RecursiveUndefined 타입 설계로 API 불일치 필드를 격리하고, 200곳 넘게 반복되던 검증 코드를 팩토리 패턴으로 줄인 과정을 공유합니다.",
    date: "2026-07-09",
    tags: ["TypeScript", "Typia", "API", "타입설계"],
  },
  {
    slug: "vite-manual-chunks",
    title:
      "초기 번들 4,990kB → 375kB — Vite manualChunks + 배럴 파일 1,600개 제거",
    description:
      "10개 어드민 앱이 공유하는 모노레포에서 번들 사이즈를 92% 줄인 과정. lazy import, manualChunks 청크 전략, 배럴 파일 제거까지 단계별로 정리합니다.",
    date: "2026-06-25",
    tags: ["Vite", "번들최적화", "DX", "Turborepo"],
  },
  {
    slug: "context-to-zustand",
    title:
      "로그아웃 시 401 + 흰 화면 버그의 진짜 원인 — Context API에서 Zustand Selector로",
    description:
      "useModal의 과도한 상태 구독이 로그아웃 플로우를 망가뜨린 버그를 추적한 과정. React DevTools Profiler로 원인을 찾고, Context API 기반 Provider들을 Zustand selector로 교체해 Header 전체 리렌더링을 제거했습니다.",
    date: "2026-06-25",
    tags: ["Zustand", "React", "성능최적화", "버그추적"],
  },

  {
    slug: "duplicate-api-call",
    title: "따닥 클릭으로 API가 두 번 호출되는 문제를 API 레이어에서 막기",
    description:
      "버튼 disabled 처리만으로는 충분하지 않았다. Set 기반 락으로 진행 중인 요청을 추적하고, useSafeMutation으로 TanStack Query에 통합해 중복 호출과 예상치 못한 에러를 한 번에 처리한 방법을 공유합니다.",
    date: "2026-06-25",
    tags: ["TanStack Query", "TypeScript", "API", "패턴"],
  },
  {
    slug: "navigation-blocking",
    title:
      "폼 작성 중 실수로 나가면? — React Router useBlocker로 이탈 방지 구현",
    description:
      "SPA 내부 라우팅과 브라우저 이탈을 모두 처리하는 useNavigationBlocking 훅 구현기. useBlocker로 라우팅을 가로채고 beforeunload로 탭 닫기까지 막은 다음, useFormWithNavigationBlocking으로 한 줄 적용까지.",
    date: "2026-06-25",
    tags: ["React Router", "React Hook Form", "UX", "패턴"],
  },
  {
    slug: "zod-schema-factory",
    title:
      "10개 앱의 폼 유효성 검사를 한 곳에서 관리하기 — SCHEMA + REFINE 패턴",
    description:
      "앱마다 조금씩 달랐던 에러 메시지와 중복된 Zod 스키마를 공용 팩토리 패턴으로 통일한 과정. SCHEMA 객체와 REFINE 객체로 선언적 유효성 검사를 구성하고 10개 앱에 일괄 적용했습니다.",
    date: "2026-06-25",
    tags: ["Zod", "React Hook Form", "TypeScript", "DX"],
  },
  {
    slug: "msw-s3-mock",
    title: "MSW로 S3 프리사인드 URL 업로드 플로우 완전히 모킹하기",
    description:
      "파일 업로드 기능을 개발할 때 실제 S3 없이 MSW만으로 프리사인드 URL 발급 → 파일 업로드 → 조회까지 전체 플로우를 재현한 방법. in-memory Map으로 가짜 S3 스토리지를 구현해 E2E에 가까운 개발 환경을 만든 과정을 공유합니다.",
    date: "2026-06-25",
    tags: ["MSW", "테스트", "DX", "S3"],
  },
  {
    slug: "msw-adoption",
    title:
      '"서버는 아직인데 화면은 언제 볼 수 있어요?" MSW로 API 없이 이벤트 3종을 완성한 이야기',
    description:
      "신규 이벤트 앱 kokkok-event를 만들며 API 서버가 준비되기 전에 MSW로 화면부터 완성한 과정. 룰렛 애니메이션과 mock 응답을 맞추는 로직, 서버 enum이 바뀔 때마다 mock을 갱신해 스펙 불일치를 막은 경험을 공유합니다.",
    date: "2026-07-10",
    tags: ["MSW", "DX", "협업", "이벤트"],
  },
];

// 포스트 임시 비활성화 중에도 검토가 끝난 글만 예외적으로 노출
export const VISIBLE_POST_SLUGS: string[] = [
  "typia-runtime-validation",
  "monorepo-shared-components",
  "github-actions-cicd",
];

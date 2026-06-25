export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "typia-runtime-validation",
    title: "API 타입 불일치를 서비스 중단 없이 처리하기 — Typia + RecursiveUndefined 설계",
    description:
      "백엔드 API 명세가 프론트 타입과 다를 때 화면이 터지는 문제를 해결한 방법. Typia 런타임 검증과 Pessimistic 타입 설계로 불일치 필드를 격리하고 서비스를 계속 유지한 과정을 공유합니다.",
    date: "2026-06-25",
    tags: ["TypeScript", "Typia", "API", "타입설계"],
  },
  {
    slug: "vite-manual-chunks",
    title: "초기 번들 4,990kB → 375kB — Vite manualChunks + 배럴 파일 1,600개 제거",
    description:
      "10개 어드민 앱이 공유하는 모노레포에서 번들 사이즈를 92% 줄인 과정. lazy import, manualChunks 청크 전략, 배럴 파일 제거까지 단계별로 정리합니다.",
    date: "2026-06-25",
    tags: ["Vite", "번들최적화", "DX", "Turborepo"],
  },
  {
    slug: "monorepo-shared-components",
    title: "10개 앱이 공용 컴포넌트 206개를 안전하게 쓰는 방법 — pnpm workspace + Turborepo",
    description:
      "공용 컴포넌트 수정이 일부 앱만 깨뜨리는 문제를 Turborepo 파이프라인과 Vitest로 해결한 방법. 모노레포 전환 의사결정부터 패키지 구조 설계까지 공유합니다.",
    date: "2026-06-25",
    tags: ["Turborepo", "Monorepo", "pnpm", "아키텍처"],
  },
  {
    slug: "context-to-zustand",
    title: "로그아웃 시 401 + 흰 화면 버그의 진짜 원인 — Context API에서 Zustand Selector로",
    description:
      "useModal의 과도한 상태 구독이 로그아웃 플로우를 망가뜨린 버그를 추적한 과정. React DevTools Profiler로 원인을 찾고, Context API 기반 Provider들을 Zustand selector로 교체해 Header 전체 리렌더링을 제거했습니다.",
    date: "2026-06-25",
    tags: ["Zustand", "React", "성능최적화", "버그추적"],
  },
];

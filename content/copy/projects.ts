import type { Dictionary } from "@/lib/locale";

interface ProjectStat {
  value: string;
  label: string;
}

interface ProjectLink {
  href: string;
  label: string;
}

interface Project {
  role: string;
  isPrivate?: boolean;
  description: string;
  links?: ProjectLink[];
  newTech?: string[];
  period?: string;
  stats: ProjectStat[];
  tags: string[];
  title: string;
}

interface OtherAdmin {
  description: string;
  title: string;
}

interface LandingPage {
  href: string;
  label: string;
}

interface ProjectsCopy {
  landingPages: LandingPage[];
  landingPagesDescription: string;
  landingPagesTags: string[];
  landingPagesTitle: string;
  mainProjects: Project[];
  newTechLabel: string;
  otherAdmins: OtherAdmin[];
  otherAdminsLabel: string;
  sideIntro: string;
  sideProjects: Project[];
  workIntro: string;
  workTitle: string;
}

const LANDING_PAGES: LandingPage[] = [
  { href: "https://laosmartmobility.com", label: "laosmartmobility.com" },
  { href: "https://coconutsilo.com", label: "coconutsilo.com" },
  { href: "https://data.coconutsilo.com", label: "data.coconutsilo.com" },
];

const LANDING_PAGES_TAGS = [
  "Next.js",
  "TypeScript",
  "Emotion",
  "i18next",
  "TanStack Query",
];

export const projectsCopy: Dictionary<ProjectsCopy> = {
  ko: {
    landingPages: LANDING_PAGES,
    landingPagesDescription:
      "KOKKOK 서비스 소개, 코코넛사일로 회사 소개, 데이터 바우처 신청. 웹·모바일 적응형 UI, 다국어.",
    landingPagesTags: LANDING_PAGES_TAGS,
    landingPagesTitle: "랜딩 페이지 3종",
    newTechLabel: "새로 적용한 기술",
    otherAdminsLabel: "그 외 어드민",
    sideIntro: "사이드 프로젝트",
    workIntro:
      "라오스 현지 O2O 플랫폼. React 기반 서비스 10개, Next.js 랜딩 페이지 3개를 설계·개발·운영.",
    workTitle: "KOKKOK Platform",
    mainProjects: [
      {
        description:
          "라오스 음식 배달·마트 배달·이커머스·eGift·드라이버·고객·지원 관리 등 KOKKOK 플랫폼 전체를 관리하는 메인 어드민. 4개의 비즈니스 도메인을 통합 관리하며 도메인별 접근 권한 제어·다국어·실시간 지도 연동·대량 데이터 테이블 처리가 복합적으로 얽혀 있습니다.",
        isPrivate: true,
        links: [
          {
            href: "https://laosmartmobility.com/service/kokkok",
            label: "서비스소개",
          },
        ],
        role: "초기 아키텍처 설계, 공용 컴포넌트 설계, API 연동, 권한 시스템 설계, 운영 전반",
        stats: [
          { label: "Pages", value: "172" },
          { label: "Domains", value: "4" },
          { label: "Team Size", value: "2~6인" },
        ],
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Zustand",
          "Emotion",
          "Google Maps API",
          "i18next",
          "Typia",
          "MSW",
          "Vite",
          "Turborepo",
        ],
        title: "KOKKOK Admin WEB",
      },
      {
        description:
          "라오스 전기 툭툭 택시 서비스 어드민. 실시간 차량 위치 추적, 기사·차량·배터리·고객 관리, 배차 모니터링, 랭킹 등. GPS 기반 실시간 지도와 IoT 기기 상태를 함께 처리합니다.",
        isPrivate: true,
        links: [
          {
            href: "https://laosmartmobility.com/service/move",
            label: "서비스소개",
          },
          {
            href: "https://play.google.com/store/apps/details?id=com.coconutsilo.kokkokexpress.shipper",
            label: "Android",
          },
          {
            href: "https://apps.apple.com/kr/app/kokkok-move/id6444350846",
            label: "iOS",
          },
        ],
        role: "프로젝트 초기 세팅, 주요 화면 개발, API 연동, 지도 기반 차량 위치 기능 구현, 운영 및 유지보수",
        stats: [
          { label: "Pages", value: "27" },
          { label: "Feature", value: "실시간 GPS" },
        ],
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Zustand",
          "Emotion",
          "Google Maps API",
          "i18next",
          "Typia",
          "MSW",
          "Vite",
          "Turborepo",
        ],
        title: "KOKKOK Move Admin WEB",
      },
      {
        description:
          "라오스 신차·중고차 판매 플랫폼 어드민. 차량 등록·판매 관리, 광고 배너, 딜러·고객 관리 등.",
        isPrivate: true,
        links: [
          {
            href: "https://laosmartmobility.com/service/car",
            label: "서비스소개",
          },
          {
            href: "https://play.google.com/store/apps/details?id=com.laosmartmobility.car",
            label: "Android",
          },
          {
            href: "https://apps.apple.com/kr/app/kokkok-car/id6670530526",
            label: "iOS",
          },
        ],
        role: "프로젝트 초기 세팅, 차량 등록·관리 화면 개발, API 연동, 공용 컴포넌트 적용, 운영 및 유지보수",
        stats: [
          { label: "Pages", value: "55" },
          { label: "Features", value: "차량 등록·판매" },
        ],
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Zustand",
          "Emotion",
          "i18next",
          "Typia",
          "MSW",
          "Vite",
          "Turborepo",
        ],
        title: "KOKKOK Car Admin WEB",
      },
    ],
    otherAdmins: [
      {
        description:
          "물류 배송·배차·인보이스 관리, 기사·차량 등록 (16개 페이지)",
        title: "KOKKOK Logistics Admin",
      },
      { description: "배달 주문 관리 (9개 페이지)", title: "KOKKOK Delivery" },
      { description: "차량 검수 어드민", title: "KOKKOK Car Inspection" },
      { description: "IoT 기기 관리 어드민", title: "KOKKOK Move IoT" },
      { description: "출석체크·룰렛 등 이벤트 페이지", title: "KOKKOK Event" },
      { description: "스토어 관리 어드민", title: "KOKKOK Store" },
      {
        description:
          "택시 기사 랭킹 뷰 — 순위·평균 운행 지표 확인 (기사용, 1개 페이지)",
        title: "KOKKOK Move Ranking",
      },
    ],
    sideProjects: [
      {
        description:
          "주식·ETF·예금·부동산·코인 등 12개 자산 유형을 통합 관리하는 개인 자산 추적 웹앱. 날짜별 원금·평가액 기록, 수익률·IRR 자동 계산, Yahoo Finance / Finnhub 실시간 시세 연동, Recharts 포트폴리오 시각화, 회원가입 없이 체험 가능한 데모 모드, 다크모드, 한국어·영어 지원.",
        links: [
          { href: "https://asset-management-tools.vercel.app", label: "Live" },
        ],
        newTech: [
          "Next.js App Router + React 19",
          "Supabase 풀스택 설계",
          "외부 시세 API 서버 측 호출 횟수 제한 (과다 요청 방지)",
          "Vitest + Playwright E2E 테스트 환경 구축",
        ],
        period: "2026.05",
        role: "Solo (기획·설계·개발·배포 전 과정)",
        stats: [
          { label: "Asset Types", value: "12" },
          { label: "E2E Tests", value: "Playwright" },
          { label: "Deploy", value: "Vercel" },
        ],
        tags: [
          "Next.js",
          "React 19",
          "TypeScript",
          "Supabase",
          "Zustand",
          "React Hook Form",
          "Zod",
          "Recharts",
          "Vitest",
          "Playwright",
        ],
        title: "자산 관리 스튜디오",
      },
      {
        description:
          "완전 모유수유 기록과 관리를 돕는 Flutter 기반 모바일 앱. Supabase 기반 백엔드 연동 및 앱 개발 진행 중.",
        period: "2026.06",
        role: "Solo",
        stats: [
          { label: "Platform", value: "Mobile" },
          { label: "Status", value: "개발 중" },
        ],
        tags: ["Flutter", "Dart", "Supabase"],
        title: "모유미유",
      },
      {
        description:
          "모바일·태블릿·웹 전 기기에서 쓸 수 있는 반응형 PWA로 실사용자 대상 운영 중. R2 Cache-Control·next/image 최적화·cache tag revalidate 3중 캐싱으로 이미지 네트워크 요청을 최소화했고, 어드민에서 주보 업로드·순서 변경(드래그앤드롭)·관리자 계정 관리·로그인 기록 조회·R2 무료 티어 사용량 모니터링을 제공. 기존 주보 이미지를 크롤링해 미리보기 후 일괄 등록하는 기능도 구현. 추후 Flutter 기반 네이티브 앱으로 확장 배포 예정.",
        links: [{ href: "https://jamjoong.vercel.app", label: "Live" }],
        period: "2026.06",
        role: "Solo (기획·설계·개발·배포 전 과정)",
        stats: [
          { label: "Platform", value: "Responsive PWA" },
          { label: "Tests", value: "Vitest + Playwright" },
          { label: "Deploy", value: "Vercel" },
          { label: "Roadmap", value: "Flutter 앱 예정" },
        ],
        tags: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "Drizzle ORM",
          "Supabase",
          "Cloudflare R2",
          "Playwright",
        ],
        title: "주보 뷰어 PWA (잠실중앙교회)",
      },
    ],
  },
  en: {
    landingPages: LANDING_PAGES,
    landingPagesDescription:
      "KOKKOK service intro, Coconutsilo company intro, data voucher application. Responsive web/mobile UI, multilingual.",
    landingPagesTags: LANDING_PAGES_TAGS,
    landingPagesTitle: "3 Landing Pages",
    newTechLabel: "New tech adopted",
    otherAdminsLabel: "Other Admin Tools",
    sideIntro: "Side projects",
    workIntro:
      "An O2O platform in Laos. Designed, built, and operate 10 React-based services and 3 Next.js landing pages.",
    workTitle: "KOKKOK Platform",
    mainProjects: [
      {
        description:
          "The main admin managing the entire KOKKOK platform — food delivery, mart delivery, e-commerce, eGift, driver/customer management, and support. Integrates 4 business domains, combining domain-level access control, i18n, real-time map integration, and large-scale data tables.",
        isPrivate: true,
        links: [
          {
            href: "https://laosmartmobility.com/service/kokkok",
            label: "Service Intro",
          },
        ],
        role: "Initial architecture design, shared component design, API integration, permission system design, ongoing operations",
        stats: [
          { label: "Pages", value: "172" },
          { label: "Domains", value: "4" },
          { label: "Team Size", value: "2–6" },
        ],
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Zustand",
          "Emotion",
          "Google Maps API",
          "i18next",
          "Typia",
          "MSW",
          "Vite",
          "Turborepo",
        ],
        title: "KOKKOK Admin WEB",
      },
      {
        description:
          "Admin for an electric tuk-tuk taxi service in Laos. Real-time vehicle tracking, driver/vehicle/battery/customer management, dispatch monitoring, rankings, and more — combining a GPS-based live map with IoT device status.",
        isPrivate: true,
        links: [
          {
            href: "https://laosmartmobility.com/service/move",
            label: "Service Intro",
          },
          {
            href: "https://play.google.com/store/apps/details?id=com.coconutsilo.kokkokexpress.shipper",
            label: "Android",
          },
          {
            href: "https://apps.apple.com/kr/app/kokkok-move/id6444350846",
            label: "iOS",
          },
        ],
        role: "Initial project setup, core screen development, API integration, map-based vehicle tracking, ongoing operations and maintenance",
        stats: [
          { label: "Pages", value: "27" },
          { label: "Feature", value: "Live GPS" },
        ],
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Zustand",
          "Emotion",
          "Google Maps API",
          "i18next",
          "Typia",
          "MSW",
          "Vite",
          "Turborepo",
        ],
        title: "KOKKOK Move Admin WEB",
      },
      {
        description:
          "Admin for a new/used car sales platform in Laos. Vehicle listing/sales management, ad banners, dealer/customer management, and more.",
        isPrivate: true,
        links: [
          {
            href: "https://laosmartmobility.com/service/car",
            label: "Service Intro",
          },
          {
            href: "https://play.google.com/store/apps/details?id=com.laosmartmobility.car",
            label: "Android",
          },
          {
            href: "https://apps.apple.com/kr/app/kokkok-car/id6670530526",
            label: "iOS",
          },
        ],
        role: "Initial project setup, vehicle listing/management screens, API integration, applying shared components, ongoing operations and maintenance",
        stats: [
          { label: "Pages", value: "55" },
          { label: "Features", value: "Vehicle listing & sales" },
        ],
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Zustand",
          "Emotion",
          "i18next",
          "Typia",
          "MSW",
          "Vite",
          "Turborepo",
        ],
        title: "KOKKOK Car Admin WEB",
      },
    ],
    otherAdmins: [
      {
        description:
          "Logistics delivery/dispatch/invoice management, driver/vehicle registration (16 pages)",
        title: "KOKKOK Logistics Admin",
      },
      {
        description: "Delivery order management (9 pages)",
        title: "KOKKOK Delivery",
      },
      {
        description: "Vehicle inspection admin",
        title: "KOKKOK Car Inspection",
      },
      { description: "IoT device management admin", title: "KOKKOK Move IoT" },
      {
        description: "Event pages — check-ins, roulette, and more",
        title: "KOKKOK Event",
      },
      { description: "Store management admin", title: "KOKKOK Store" },
      {
        description:
          "Driver-facing ranking view — rank and average trip metrics (1 page)",
        title: "KOKKOK Move Ranking",
      },
    ],
    sideProjects: [
      {
        description:
          "A personal asset tracking web app unifying 12 asset types — stocks, ETFs, deposits, real estate, crypto, and more. Records principal/valuation by date, auto-calculates returns and IRR, integrates live quotes from Yahoo Finance/Finnhub, visualizes portfolios with Recharts, offers a no-signup demo mode, dark mode, and Korean/English support.",
        links: [
          { href: "https://asset-management-tools.vercel.app", label: "Live" },
        ],
        newTech: [
          "Next.js App Router + React 19",
          "Full-stack design on Supabase",
          "Server-side rate limiting for external quote APIs (prevents excessive requests)",
          "Built a Vitest + Playwright E2E test environment",
        ],
        period: "May 2026",
        role: "Solo (planning, design, development, and deployment end-to-end)",
        stats: [
          { label: "Asset Types", value: "12" },
          { label: "E2E Tests", value: "Playwright" },
          { label: "Deploy", value: "Vercel" },
        ],
        tags: [
          "Next.js",
          "React 19",
          "TypeScript",
          "Supabase",
          "Zustand",
          "React Hook Form",
          "Zod",
          "Recharts",
          "Vitest",
          "Playwright",
        ],
        title: "Asset Management Studio",
      },
      {
        description:
          "A Flutter-based mobile app that helps track and manage exclusive breastfeeding. In progress, with a Supabase-based backend integration.",
        period: "Jun 2026",
        role: "Solo",
        stats: [
          { label: "Platform", value: "Mobile" },
          { label: "Status", value: "In progress" },
        ],
        tags: ["Flutter", "Dart", "Supabase"],
        title: "Moyu Miyu",
      },
      {
        description:
          "A responsive PWA usable across mobile, tablet, and web, running in production for real users. Minimizes image network requests with 3-layer caching — R2 Cache-Control, next/image optimization, and cache-tag-based revalidation. Admin panel covers bulletin upload with drag-and-drop reordering, admin account management, login history, and R2 free-tier usage monitoring. Also crawls existing bulletin images from the church's official website with preview-then-import bulk registration. A native Flutter app is planned for future release.",
        links: [{ href: "https://jamjoong.vercel.app", label: "Live" }],
        period: "Jun 2026",
        role: "Solo (planning, design, development, and deployment end-to-end)",
        stats: [
          { label: "Platform", value: "Responsive PWA" },
          { label: "Tests", value: "Vitest + Playwright" },
          { label: "Deploy", value: "Vercel" },
          { label: "Roadmap", value: "Flutter app planned" },
        ],
        tags: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "Drizzle ORM",
          "Supabase",
          "Cloudflare R2",
          "Playwright",
        ],
        title: "Bulletin Viewer PWA (Jamsil Joongang Church)",
      },
    ],
  },
};

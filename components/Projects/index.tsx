import { ArrowUpRight } from "lucide-react";

interface ProjectTag {
  label: string;
}

interface ProjectStat {
  label: string;
  value: string;
}

interface ProjectLink {
  href: string;
  label: string;
}

interface Project {
  description: string;
  isPrivate?: boolean;
  links?: ProjectLink[];
  period: string;
  role: string;
  stats: ProjectStat[];
  tags: string[];
  title: string;
}

interface ProjectGroup {
  items: Project[];
  label: string;
}

const MAIN_PROJECTS: Project[] = [
  {
    description:
      "라오스 음식 배달·마트 배달·이커머스·eGift·드라이버·고객·지원 관리 등 KOKKOK 플랫폼 전체를 관리하는 메인 어드민. 7개 이상의 비즈니스 도메인을 통합 관리하며 도메인별 접근 권한 제어·다국어·실시간 지도 연동·대량 데이터 테이블 처리가 복합적으로 얽혀 있습니다.",
    isPrivate: true,
    links: [
      {
        href: "https://laosmartmobility.com/service/kokkok",
        label: "서비스 소개",
      },
    ],
    period: "2020.12 ~ 현재",
    role: "초기 아키텍처 설계, 공용 컴포넌트 설계, API 연동, 권한 시스템 설계, 운영 전반",
    stats: [
      { label: "Pages", value: "172" },
      { label: "Domains", value: "7+" },
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
        label: "서비스 소개",
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
    period: "2022 ~",
    role: "프로젝트 초기 세팅, 주요 화면 개발, 지도 기반 차량 위치 기능 구현, 운영 및 유지보수",
    stats: [
      { label: "Pages", value: "27" },
      { label: "Feature", value: "실시간 GPS" },
      { label: "Feature", value: "IoT 연동" },
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
        label: "서비스 소개",
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
    period: "2023 ~",
    role: "프로젝트 초기 세팅, 차량 등록·관리 화면 개발, 공용 컴포넌트 적용, 운영 및 유지보수",
    stats: [
      { label: "Pages", value: "55" },
      { label: "Features", value: "차량 등록·판매" },
      { label: "Features", value: "광고 배너" },
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
];

const OTHER_ADMINS = [
  { description: "물류 배송·배차·인보이스 관리, 기사·차량 등록 (16개 페이지)", title: "KOKKOK Logistics Admin" },
  { description: "배달 주문 관리 (9개 페이지)", title: "KOKKOK Delivery" },
  { description: "차량 검수 어드민", title: "KOKKOK Car Inspection" },
  { description: "IoT 기기 관리 어드민", title: "KOKKOK Move IoT" },
  { description: "출석체크·룰렛 등 이벤트 페이지", title: "KOKKOK Event" },
  { description: "스토어 관리 어드민", title: "KOKKOK Store" },
];

const SIDE_PROJECTS: Project[] = [
  {
    description:
      "주식·ETF·예금·부동산·코인 등 12개 자산 유형을 통합 관리하는 개인 자산 추적 웹앱. 날짜별 원금·평가액 기록, 수익률·IRR 자동 계산, 실시간 시세 연동, 데모 모드, 다크모드, 한국어·영어 지원.",
    links: [{ href: "https://asset-management-tools.vercel.app", label: "Live" }],
    period: "2024 ~",
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
    period: "2025 ~",
    role: "Solo",
    stats: [
      { label: "Platform", value: "Mobile" },
      { label: "Status", value: "개발 중" },
    ],
    tags: ["Flutter", "Dart", "Supabase"],
    title: "모유미유",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const { description, isPrivate, links, period, role, stats, tags, title } =
    project;

  return (
    <div className="bg-[var(--background)] p-8 md:p-10 space-y-6">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            {title}
          </h3>
          {isPrivate ? (
            <span className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded">
              B2B Internal
            </span>
          ) : null}
          {links?.map(({ href, label }) => (
            <a
              key={label}
              className="flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)]">{role}</p>
      </div>

      <p className="text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-6">
        {stats.map(({ label, value }) => (
          <div key={`${label}-${value}`} className="space-y-0.5">
            <p className="text-lg font-bold text-[var(--foreground)]">{value}</p>
            <p className="text-xs text-[var(--muted)]">{label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-[var(--muted)] bg-[#f5f5f5] px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto w-full space-y-20">
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
            <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
              Work
            </p>
            <div className="space-y-1">
              <p className="text-base text-[var(--foreground)] font-medium">
                KOKKOK Platform
              </p>
              <p className="text-sm text-[var(--muted)]">
                라오스 현지 O2O 플랫폼. React 어드민 10개, Next.js 랜딩 페이지
                3개를 설계·개발·운영.
              </p>
            </div>
          </div>

          <div className="space-y-px bg-[var(--border)]">
            {MAIN_PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="lg:ml-[calc(200px+6rem)]">
            <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-4">
              그 외 어드민
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {OTHER_ADMINS.map(({ description, title }) => (
                <div
                  key={title}
                  className="space-y-1 py-4 border-t border-[var(--border)]"
                >
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    {title}
                  </p>
                  <p className="text-xs text-[var(--muted)]">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 py-4 border-t border-[var(--border)]">
              <p className="text-sm font-medium text-[var(--foreground)] mb-1">
                랜딩 페이지 3종
              </p>
              <p className="text-xs text-[var(--muted)]">
                laosmartmobility.com / coconutsilo.com / data.coconutsilo.com —
                KOKKOK 서비스 소개, 코코넛사일로 회사 소개, 데이터 바우처 신청.
                웹·모바일 적응형 UI, 다국어.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["Next.js", "TypeScript", "Emotion", "i18next", "TanStack Query"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[var(--muted)] bg-[#f5f5f5] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
            <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
              Side
            </p>
            <p className="text-base text-[var(--muted)]">사이드 프로젝트</p>
          </div>

          <div className="space-y-px bg-[var(--border)]">
            {SIDE_PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

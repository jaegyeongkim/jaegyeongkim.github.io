import { ArrowUpRight } from "lucide-react";

interface ProjectStat {
  label: string;
  value: string;
}

interface Project {
  description: string;
  href?: string;
  period: string;
  role: string;
  stats: ProjectStat[];
  tags: string[];
  title: string;
}

const PROJECTS: Project[] = [
  {
    description:
      "라오스 현지 O2O 플랫폼 KOKKOK의 어드민 시스템. 주문관리, 정산, 회원관리, 마케팅 등 핵심 도메인을 커버하는 어드민 10개를 설계·개발·운영.",
    period: "2020.12 ~ 현재",
    role: "Frontend Lead",
    stats: [
      { label: "Admin Pages", value: "172+" },
      { label: "Domains", value: "7+" },
      { label: "Admin Services", value: "10+" },
      { label: "Team Size", value: "2~6인" },
    ],
    tags: ["React", "TypeScript", "Turborepo", "TanStack Query", "Vite", "MSW"],
    title: "KOKKOK Admin Platform",
  },
  {
    description:
      "주식·ETF·예금·부동산 등 12개 자산을 통합 관리하는 풀스택 웹앱. 수익률·IRR 자동 계산, 실시간 시세 연동, Playwright E2E 테스트 환경 구축.",
    href: "https://asset-management-tools.vercel.app",
    period: "2024 ~",
    role: "Solo",
    stats: [
      { label: "Asset Types", value: "12" },
      { label: "E2E Tests", value: "Playwright" },
      { label: "Deploy", value: "Vercel" },
      { label: "Stack", value: "Full-stack" },
    ],
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Supabase",
      "Vitest",
      "Playwright",
    ],
    title: "Asset Management Studio",
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            Projects
          </p>
          <p className="text-base text-[var(--muted)]">주요 프로젝트</p>
        </div>

        <div className="space-y-px bg-[var(--border)]">
          {PROJECTS.map(
            ({ description, href, period, role, stats, tags, title }) => (
              <div
                key={title}
                className="bg-[var(--background)] p-8 md:p-12 space-y-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">
                        {title}
                      </h3>
                      {href ? (
                        <a
                          className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                          href={href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      ) : null}
                    </div>
                    <p className="text-sm text-[var(--muted)]">
                      {period} · {role}
                    </p>
                  </div>
                </div>

                <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">
                  {description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map(({ label, value }) => (
                    <div key={label} className="space-y-0.5">
                      <p className="text-xl font-bold text-[var(--foreground)]">
                        {value}
                      </p>
                      <p className="text-xs text-[var(--muted)]">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[var(--muted)] bg-[#f5f5f5] px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

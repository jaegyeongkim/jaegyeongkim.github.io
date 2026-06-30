import { projectsCopy } from "@/content/copy/projects";
import type { Locale } from "@/lib/locale";

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

const ExternalLinkIcon = () => (
  <svg
    height="10"
    width="10"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const ProjectCard = ({
  newTechLabel,
  project,
}: {
  newTechLabel: string;
  project: Project;
}) => {
  const {
    description,
    isPrivate,
    links,
    newTech,
    period,
    role,
    stats,
    tags,
    title,
  } = project;

  return (
    <div className="bg-[var(--background)] p-8 md:p-10 space-y-6">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
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
              className="flex items-center gap-1 text-xs font-mono text-[var(--foreground)] border border-[var(--border)] px-2 py-0.5 rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-150"
              href={href}
              key={label}
              rel="noopener noreferrer"
              target="_blank"
            >
              {label} <ExternalLinkIcon />
            </a>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)]">
          {period ? `${period} · ` : ""}
          {role}
        </p>
      </div>

      <p className="text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-6">
        {stats.map(({ label, value }) => (
          <div className="space-y-0.5" key={`${label}-${value}`}>
            <p className="text-lg font-bold text-[var(--foreground)]">
              {value}
            </p>
            <p className="text-xs text-[var(--muted)]">{label}</p>
          </div>
        ))}
      </div>

      {newTech && newTech.length > 0 && (
        <div className="space-y-2 pt-1 border-t border-[var(--border)]">
          <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
            {newTechLabel}
          </p>
          <ul className="space-y-1">
            {newTech.map((item) => (
              <li
                className="flex items-start gap-2 text-sm text-[var(--muted)]"
                key={item}
              >
                <span className="text-[var(--accent)] shrink-0 mt-px">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            className="text-xs font-mono text-[var(--muted)] bg-[var(--surface)] px-2 py-0.5 rounded"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

interface ProjectsProps {
  locale?: Locale;
}

const Projects = ({ locale = "ko" }: ProjectsProps) => {
  const t = projectsCopy[locale];

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-10 border-t border-[var(--border)]"
      id="projects"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="space-y-8" id="projects-work">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
            <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
              Work
            </p>
            <div className="space-y-8">
              <div className="space-y-1">
                <p className="text-base text-[var(--foreground)] font-medium">
                  {t.workTitle}
                </p>
                <p className="text-sm text-[var(--muted)]">{t.workIntro}</p>
              </div>

              <div className="space-y-px bg-[var(--border)]">
                {t.mainProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    newTechLabel={t.newTechLabel}
                    project={project}
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-4">
                  {t.otherAdminsLabel}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {t.otherAdmins.map(({ description, title }) => (
                    <div
                      className="space-y-1 py-4 border-t border-[var(--border)]"
                      key={title}
                    >
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        {title}
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 py-4 border-t border-[var(--border)]">
                  <p className="text-sm font-medium text-[var(--foreground)] mb-3">
                    {t.landingPagesTitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {t.landingPages.map(({ href, label }) => (
                      <a
                        className="flex items-center gap-1 text-xs font-mono text-[var(--accent)] hover:underline"
                        href={href}
                        key={label}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {label}
                        <ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--muted)]">
                    {t.landingPagesDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {t.landingPagesTags.map((tag) => (
                      <span
                        className="text-xs font-mono text-[var(--muted)] bg-[var(--surface)] px-2 py-0.5 rounded"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8" id="projects-side">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
            <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
              Side
            </p>
            <p className="text-base text-[var(--muted)]">{t.sideIntro}</p>
          </div>

          <div className="space-y-px bg-[var(--border)]">
            {t.sideProjects.map((project) => (
              <ProjectCard
                key={project.title}
                newTechLabel={t.newTechLabel}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

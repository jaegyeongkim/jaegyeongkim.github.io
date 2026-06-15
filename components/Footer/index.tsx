import { Mail } from "lucide-react";

import PrintButton from "@/components/PrintButton";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    fill="currentColor"
    height={size}
    role="img"
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Footer = ({ compact = false }: { compact?: boolean }) => {
  return (
    <footer className={`px-6 md:px-12 lg:px-24 border-t border-[var(--border)] ${compact ? "py-6" : "py-24"}`}>
      <div className="max-w-6xl mx-auto w-full">
        <div className={`flex flex-col lg:flex-row lg:justify-between items-end ${compact ? "gap-6" : "gap-16"}`}>
          <div className={compact ? "space-y-1" : "space-y-4"}>
            <p className="text-sm text-[var(--muted)]">
              문제를 끝까지 파고들어 개선하는 개발자
            </p>
            <h2 className={`font-bold text-[var(--foreground)] tracking-tight ${compact ? "text-xl" : "text-4xl md:text-5xl"}`}>
              김재경
            </h2>
          </div>

          <div className={`lg:text-right ${compact ? "space-y-2" : "space-y-6"}`}>
            <div className="flex flex-col lg:items-end gap-3">
              <a
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
                href="mailto:tkwk1205@naver.com"
              >
                <Mail size={16} />
                tkwk1205@naver.com
              </a>
              <a
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                href="https://github.com/jaegyeongkim"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon size={16} />
                github.com/jaegyeongkim
              </a>
            </div>

            <div className="flex lg:justify-end">
              <PrintButton label="PDF로 저장" />
            </div>
            <p className="text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} 김재경. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

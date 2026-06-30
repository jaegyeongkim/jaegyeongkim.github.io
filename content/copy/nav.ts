import type { Dictionary } from "@/lib/locale";

interface NavCopy {
  blog: string;
  portfolio: string;
  resume: string;
}

export const navCopy: Dictionary<NavCopy> = {
  ko: {
    blog: "블로그",
    resume: "이력서",
    portfolio: "포트폴리오",
  },
  en: {
    blog: "Blog",
    resume: "Resume",
    portfolio: "Portfolio",
  },
};

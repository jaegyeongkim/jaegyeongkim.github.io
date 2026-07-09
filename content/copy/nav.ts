import type { Dictionary } from "@/lib/locale";

interface NavCopy {
  portfolio: string;
  post: string;
  resume: string;
}

export const navCopy: Dictionary<NavCopy> = {
  ko: {
    post: "포스트",
    resume: "이력서",
    portfolio: "포트폴리오",
  },
  en: {
    post: "Post",
    resume: "Resume",
    portfolio: "Portfolio",
  },
};

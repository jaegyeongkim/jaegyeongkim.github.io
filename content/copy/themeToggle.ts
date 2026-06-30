import type { Dictionary } from "@/lib/locale";

interface ThemeToggleCopy {
  ariaLabel: string;
}

export const themeToggleCopy: Dictionary<ThemeToggleCopy> = {
  ko: { ariaLabel: "다크모드 전환" },
  en: { ariaLabel: "Toggle dark mode" },
};

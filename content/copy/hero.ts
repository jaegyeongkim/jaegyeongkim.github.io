import type { Dictionary } from "@/lib/locale";

interface StatCard {
  value: string;
  anchor: string;
  label: string;
  suffix: string;
}

interface HeroCopy {
  name: string;
  avatarAlt: string;
  period: string;
  printLabel: string;
  stats: StatCard[];
  tagline: string;
}

const STATS: StatCard[] = [
  { anchor: "#projects", label: "Admin Services", suffix: "+", value: "10" },
  {
    anchor: "#achievements",
    label: "Shared Components",
    suffix: "+",
    value: "206",
  },
  { anchor: "#achievements", label: "Tests", suffix: "+", value: "165" },
  {
    anchor: "#achievements",
    label: "Bundle Reduction",
    suffix: "%",
    value: "92",
  },
];

export const heroCopy: Dictionary<HeroCopy> = {
  ko: {
    avatarAlt: "김재경 프로필",
    name: "김재경",
    period: "2020.12 ~ 현재",
    printLabel: "PDF로 저장",
    stats: STATS,
    tagline: "문제를 끝까지 파고들어 개선하는 개발자",
  },
  en: {
    avatarAlt: "Jaegyeong Kim",
    name: "Jaegyeong Kim",
    period: "Dec 2020 – Present",
    printLabel: "Save as PDF",
    stats: STATS,
    tagline: "Engineer who digs into problems until they're solved",
  },
};

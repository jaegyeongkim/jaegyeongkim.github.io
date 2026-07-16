import type { Dictionary } from "@/lib/locale";

interface StatCard {
  value: string;
  anchor: string;
  label: string;
  suffix: string;
}

interface HeroCopy {
  name: string;
  role: string;
  avatarAlt: string;
  period: string;
  printLabel: string;
  stats: StatCard[];
  tagline: string;
}

const STATS: StatCard[] = [
  { anchor: "#projects", label: "Services", suffix: "", value: "10" },
  {
    anchor: "#achievements",
    label: "Shared Code",
    suffix: "+",
    value: "200",
  },
  { anchor: "#achievements", label: "Tests", suffix: "", value: "1,097" },
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
    role: "Frontend Engineer / FE Team Lead (2021~)",
    stats: STATS,
    tagline: "문제를 끝까지 파고들어 구조로 개선하는 개발자",
  },
  en: {
    avatarAlt: "Jaegyeong Kim",
    name: "Jaegyeong Kim",
    period: "Dec 2020 – Present",
    printLabel: "Save as PDF",
    role: "Frontend Engineer / FE Team Lead (since 2021)",
    stats: STATS,
    tagline: "Engineer who digs into problems until they become structure",
  },
};

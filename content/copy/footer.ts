import type { Dictionary } from "@/lib/locale";

interface FooterCopy {
  name: string;
  printLabel: string;
  rights: string;
  tagline: string;
}

export const footerCopy: Dictionary<FooterCopy> = {
  ko: {
    name: "김재경",
    tagline: "문제를 끝까지 파고들어 구조로 개선하는 개발자",
    printLabel: "PDF로 저장",
    rights: "All rights reserved.",
  },
  en: {
    name: "Jaegyeong Kim",
    tagline: "Engineer who digs into problems until they become structure",
    printLabel: "Save as PDF",
    rights: "All rights reserved.",
  },
};

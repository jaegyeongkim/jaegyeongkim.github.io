import type { Metadata } from "next";

import ResumeView from "@/components/ResumeView";

export const metadata: Metadata = {
  title: { absolute: "김재경 이력서 · 6년차 프론트엔드 팀리드" },
  description:
    "6년차 FE 팀리드 김재경의 이력서. React / TypeScript / Next.js 기반 플랫폼 엔지니어. 모노레포·CI/CD·번들 최적화로 팀 생산성을 높여온 경력을 정리했습니다.",
  openGraph: {
    url: "https://jaegyeongkim.github.io",
    title: "김재경 이력서 · 6년차 프론트엔드 팀리드",
    description:
      "6년차 FE 팀리드 김재경의 이력서. React / TypeScript / Next.js 기반 플랫폼 엔지니어.",
  },
  alternates: {
    canonical: "https://jaegyeongkim.github.io",
    languages: {
      en: "https://jaegyeongkim.github.io/en",
    },
  },
};

const ResumePage = () => <ResumeView locale="ko" />;

export default ResumePage;

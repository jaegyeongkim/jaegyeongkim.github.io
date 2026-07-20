import type { Metadata } from "next";

import PortfolioView from "@/components/PortfolioView";

export const metadata: Metadata = {
  title: { absolute: "김재경 포트폴리오 · Frontend Engineer · Platform & DX" },
  description:
    "6년차 FE 팀리드 김재경의 포트폴리오. 모노레포·CI/CD·번들 최적화 상세 내용. Type-safe API Layer, Monorepo Architecture, Bundle & DX Optimization 등 주요 성과를 정리했습니다.",
  keywords: [
    "포트폴리오",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "모노레포",
    "번들최적화",
    "CI/CD",
    "김재경",
  ],
  openGraph: {
    type: "website",
    url: "https://jaegyeongkim.github.io/portfolio",
    title: "김재경 포트폴리오 · Frontend Engineer · Platform & DX",
    description:
      "6년차 FE 팀리드 김재경의 포트폴리오. 모노레포·CI/CD·번들 최적화 상세 내용.",
    locale: "ko_KR",
    siteName: "김재경 이력서 · 포트폴리오",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "김재경 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김재경 포트폴리오 · Frontend Engineer · Platform & DX",
    description:
      "6년차 FE 팀리드 김재경의 포트폴리오. 모노레포·CI/CD·번들 최적화 상세 내용.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jaegyeongkim.github.io/portfolio",
    languages: {
      en: "https://jaegyeongkim.github.io/en/portfolio",
    },
  },
};

const Home = () => <PortfolioView locale="ko" />;

export default Home;

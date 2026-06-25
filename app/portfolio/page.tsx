import type { Metadata } from "next";

import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TableOfContents, {
  PORTFOLIO_SECTIONS,
} from "@/components/TableOfContents";
import TeamLead from "@/components/TeamLead";
import TechMigrations from "@/components/TechMigrations";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: { absolute: "김재경 포트폴리오 | Frontend Engineer · Platform & DX" },
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
    title: "김재경 포트폴리오 | Frontend Engineer · Platform & DX",
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
    title: "김재경 포트폴리오 | Frontend Engineer · Platform & DX",
    description:
      "6년차 FE 팀리드 김재경의 포트폴리오. 모노레포·CI/CD·번들 최적화 상세 내용.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jaegyeongkim.github.io/portfolio",
  },
};

const Home = () => {
  return (
    <>
      <TableOfContents sections={PORTFOLIO_SECTIONS} />
      <main>
        <Hero />
        <About />
        <TeamLead />
        <Achievements />
        <TechMigrations />
        <Timeline />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default Home;

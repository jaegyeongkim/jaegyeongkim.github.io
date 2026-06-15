import type { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: { absolute: "김재경 포트폴리오 | Frontend Engineer · Platform & DX" },
  description:
    "6년차 FE 팀리드 김재경의 포트폴리오. 모노레포·CI/CD·번들 최적화 상세 내용.",
  openGraph: {
    url: "https://jaegyeongkim.github.io/portfolio",
    title: "김재경 포트폴리오 | Frontend Engineer · Platform & DX",
    description:
      "6년차 FE 팀리드 김재경의 포트폴리오. 모노레포·CI/CD·번들 최적화 상세 내용.",
  },
};
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TeamLead from "@/components/TeamLead";
import TechMigrations from "@/components/TechMigrations";
import Timeline from "@/components/Timeline";

const Home = () => {
  return (
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
  );
};

export default Home;

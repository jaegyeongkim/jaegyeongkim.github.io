import type { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: { absolute: "김재경 | Frontend Engineer - 포트폴리오" },
  description:
    "모노레포 전환, CI/CD 자동화, 번들 최적화 등 팀 생산성과 서비스 안정성을 높이는 플랫폼·아키텍처 개선을 주도한 프론트엔드 엔지니어 김재경의 포트폴리오입니다.",
  openGraph: {
    url: "https://jaegyeongkim.github.io/portfolio",
    title: "김재경 | Frontend Engineer - 포트폴리오",
    description:
      "모노레포 전환, CI/CD 자동화, 번들 최적화 등 팀 생산성과 서비스 안정성을 높이는 플랫폼·아키텍처 개선을 주도한 프론트엔드 엔지니어입니다.",
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

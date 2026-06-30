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
import type { Locale } from "@/lib/locale";

interface PortfolioViewProps {
  locale?: Locale;
}

const PortfolioView = ({ locale = "ko" }: PortfolioViewProps) => {
  return (
    <>
      <TableOfContents sections={PORTFOLIO_SECTIONS} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <TeamLead locale={locale} />
        <Achievements locale={locale} />
        <TechMigrations locale={locale} />
        <Timeline locale={locale} />
        <Projects locale={locale} />
        <Footer locale={locale} />
      </main>
    </>
  );
};

export default PortfolioView;

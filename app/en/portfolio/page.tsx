import type { Metadata } from "next";

import PortfolioView from "@/components/PortfolioView";

export const metadata: Metadata = {
  title: {
    absolute: "Jaegyeong Kim — Portfolio · 6-Year Frontend Team Lead",
  },
  description:
    "Portfolio of Jaegyeong Kim, a 6-year FE team lead. Details on monorepo, CI/CD, and bundle optimization work — Type-safe API Layer, Monorepo Architecture, Bundle & DX Optimization, and more.",
  keywords: [
    "Portfolio",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Monorepo",
    "Bundle Optimization",
    "CI/CD",
    "Jaegyeong Kim",
  ],
  authors: [{ name: "Jaegyeong Kim" }],
  openGraph: {
    type: "website",
    url: "https://jaegyeongkim.github.io/en/portfolio",
    title: "Jaegyeong Kim — Portfolio · 6-Year Frontend Team Lead",
    description:
      "Portfolio of Jaegyeong Kim, a 6-year FE team lead. Details on monorepo, CI/CD, and bundle optimization work.",
    locale: "en_US",
    siteName: "Jaegyeong Kim — Resume & Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jaegyeong Kim — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaegyeong Kim — Portfolio · 6-Year Frontend Team Lead",
    description:
      "Portfolio of Jaegyeong Kim, a 6-year FE team lead. Details on monorepo, CI/CD, and bundle optimization work.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jaegyeongkim.github.io/en/portfolio",
    languages: {
      ko: "https://jaegyeongkim.github.io/portfolio",
    },
  },
};

const Home = () => <PortfolioView locale="en" />;

export default Home;

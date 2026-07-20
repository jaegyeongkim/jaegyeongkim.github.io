import type { Metadata } from "next";

import ResumeView from "@/components/ResumeView";

export const metadata: Metadata = {
  title: {
    absolute: "Jaegyeong Kim — Resume · 6-Year Frontend Team Lead",
  },
  description:
    "Resume of Jaegyeong Kim, a 6-year FE team lead and platform engineer working with React, TypeScript, and Next.js. Monorepo, CI/CD, and bundle optimization that lifted team productivity.",
  keywords: [
    "Frontend",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "FE Team Lead",
    "Platform Engineer",
    "Jaegyeong Kim",
    "Resume",
    "Portfolio",
  ],
  authors: [{ name: "Jaegyeong Kim" }],
  openGraph: {
    url: "https://jaegyeongkim.github.io/en",
    title: "Jaegyeong Kim — Resume · 6-Year Frontend Team Lead",
    description:
      "Resume of Jaegyeong Kim, a 6-year FE team lead and platform engineer working with React, TypeScript, and Next.js.",
    locale: "en_US",
    siteName: "Jaegyeong Kim — Resume & Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaegyeong Kim — Resume · 6-Year Frontend Team Lead",
    description:
      "Resume of Jaegyeong Kim, a 6-year FE team lead and platform engineer working with React, TypeScript, and Next.js.",
  },
  alternates: {
    canonical: "https://jaegyeongkim.github.io/en",
    languages: {
      ko: "https://jaegyeongkim.github.io",
    },
  },
};

const ResumePage = () => <ResumeView locale="en" />;

export default ResumePage;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://jaegyeongkim.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "김재경 이력서 · 포트폴리오 | Frontend Engineer",
    template: "%s | 김재경",
  },
  description:
    "6년차 FE 팀리드 김재경의 이력서·포트폴리오. 모노레포·CI/CD·번들 최적화로 팀 생산성을 높여온 플랫폼 엔지니어.",
  keywords: [
    "프론트엔드",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "팀 리드",
    "플랫폼 엔지니어",
    "김재경",
    "이력서",
    "포트폴리오",
  ],
  authors: [{ name: "김재경" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "김재경 이력서 · 포트폴리오",
    title: "김재경 이력서 · 포트폴리오 | Frontend Engineer",
    description:
      "6년차 FE 팀리드 김재경의 이력서·포트폴리오. 모노레포·CI/CD·번들 최적화로 팀 생산성을 높여온 플랫폼 엔지니어.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "김재경 이력서 · 포트폴리오 — 6년차 Frontend Engineer · FE Team Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김재경 이력서 · 포트폴리오 | Frontend Engineer",
    description:
      "6년차 FE 팀리드 김재경의 이력서·포트폴리오. 모노레포·CI/CD·번들 최적화로 팀 생산성을 높여온 플랫폼 엔지니어.",
    images: ["/og-image.png"],
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  icons: {
    icon: "/icon.webp",
    apple: "/icon.webp",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  email: "tkwk1205@naver.com",
  jobTitle: "Frontend Engineer",
  knowsAbout: ["React", "TypeScript", "Next.js", "Turborepo", "Frontend Platform"],
  name: "김재경",
  sameAs: ["https://github.com/jaegyeongkim"],
  url: SITE_URL,
  worksFor: {
    "@type": "Organization",
    name: "Coconutsilo",
  },
};

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      lang="ko"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
          type="application/ld+json"
        />
      </head>
      <body className="min-h-full">
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

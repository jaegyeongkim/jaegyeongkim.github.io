import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
    default: "김재경 | Frontend Engineer",
    template: "%s | 김재경",
  },
  description:
    "10개 어드민 서비스의 플랫폼과 DX를 설계하는 프론트엔드 엔지니어입니다. React · TypeScript · Next.js · Turborepo",
  keywords: [
    "프론트엔드",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "팀 리드",
    "플랫폼 엔지니어",
    "김재경",
  ],
  authors: [{ name: "김재경" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "김재경 포트폴리오",
    title: "김재경 | Frontend Engineer",
    description:
      "10개 어드민 서비스의 플랫폼과 DX를 설계하는 프론트엔드 엔지니어입니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "김재경 | Frontend Engineer",
    description:
      "10개 어드민 서비스의 플랫폼과 DX를 설계하는 프론트엔드 엔지니어입니다.",
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

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      lang="ko"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
};

export default RootLayout;

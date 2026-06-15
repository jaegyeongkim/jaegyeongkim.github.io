import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// repo 이름이 jaegyeongkim.github.io 로 바뀌면 basePath 제거
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/profile" : "",
};

export default nextConfig;

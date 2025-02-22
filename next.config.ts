import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/edenic/' : '', 
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doodleipsum.com",
      },
    ],
  },
};

export default nextConfig;

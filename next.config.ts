import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // 👈 Esto permite las fotos de Sanity
      },
    ],
  },
};

export default nextConfig;
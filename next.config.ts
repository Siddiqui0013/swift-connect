import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['swift-connect-mu.vercel.app/'], // Add your Vercel domain here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src/sass'],
    prependData: `@import "main.sass"`,
  },
};

export default nextConfig;

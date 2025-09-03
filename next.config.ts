import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfigWithAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

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
    prependData: `@use "main.sass" as *;`,
  },
};

export default nextConfigWithAnalyzer(nextConfig);

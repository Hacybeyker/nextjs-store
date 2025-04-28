import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.shopify.com'],
  },
  sassOptions: {
    includePaths: ['./src/sass'],
    prependData: `@import "@/sass/main.sass";`,
  },
};

export default nextConfig;

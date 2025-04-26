import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src/sass'],
    prependData: `@import "@/sass/main.sass";`,
  },
};

export default nextConfig;

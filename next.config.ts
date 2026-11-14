import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // stray lockfiles (e.g. ~/package-lock.json) make Next guess the wrong workspace root
  turbopack: { root: process.cwd() },
};

export default nextConfig;

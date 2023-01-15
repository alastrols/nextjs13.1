/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["localhost"],
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;

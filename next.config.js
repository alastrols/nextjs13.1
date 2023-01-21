/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["localhost"],
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;

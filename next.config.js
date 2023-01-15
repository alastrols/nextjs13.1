/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  trailingSlash: true,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;

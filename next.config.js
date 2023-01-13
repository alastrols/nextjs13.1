/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true,
    },
  },
  images: {
    domains: ["localhost"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;

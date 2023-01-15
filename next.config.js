/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ["localhost"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;

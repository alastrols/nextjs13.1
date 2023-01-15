/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
=======
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
  images: {
    domains: ["localhost"],
  },
  trailingSlash: true,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;

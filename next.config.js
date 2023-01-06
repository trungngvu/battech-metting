/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    localeDetection: false,
  },
  pageExtensions: ['page.ts', 'page.tsx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'default',
    domains: ['localhost', 'res.cloudinary.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

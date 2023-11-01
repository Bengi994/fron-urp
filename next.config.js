/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ignoreDuringBuilds: true,
  typescript:{
    ignoreDuringBuilds: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig

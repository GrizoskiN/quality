/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  siteUrl: process.env.SITE_URL || 'https://qualityestimation.us',
  generateRobotsTxt: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.gobro.studio',
        port: '',
    
      },
    ],
  },
}
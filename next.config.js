/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qualityestimation.us',
        port: '',
    
      },
    ],
  },
}
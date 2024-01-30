/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
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
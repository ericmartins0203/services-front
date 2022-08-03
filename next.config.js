/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      's3.amazonaws.com',
      'res.cloudinary.com'
    ],
  }

}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'upload.wikimedia.org',
      'wikipedia.org',
      'pngimg.com',
      // Add any other external image domains you use here
    ],
  },
}

export default nextConfig

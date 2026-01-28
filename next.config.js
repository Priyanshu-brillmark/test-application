/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/test-application',
  assetPrefix: '/test-application',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

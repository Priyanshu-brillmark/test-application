/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/test-application',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig

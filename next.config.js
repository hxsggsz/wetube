/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['https://github.com'],
  },
}

module.exports = nextConfig
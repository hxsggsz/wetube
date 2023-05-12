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
    domains: ['https://github.com', 'sdrsduyvpgydxlxzswzl.supabase.co', 'https://sdrsduyvpgydxlxzswzl.supabase.co'],
  },
}

module.exports = nextConfig
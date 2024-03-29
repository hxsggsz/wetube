/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [
      'https://github.com', 'sdrsduyvpgydxlxzswzl.supabase.co', 'img.youtube.com'
    ],
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src/pages', 'src/components', 'src/lib'] //default -> pages,components,lib
  }
}

module.exports = nextConfig

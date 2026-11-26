/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  // Id fixo: o deploy por FTP nao precisa apagar a pasta _next/<id> do build
  // anterior (a Hostinger responde 550 nessa remocao). Os chunks continuam com hash.
  generateBuildId: async () => 'build',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },

};

module.exports = nextConfig;

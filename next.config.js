/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ADICIONE ISSO para gerar a pasta /out
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para Exportação Estática
  output: 'export',
  // Desabilita a Otimização de Imagem
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
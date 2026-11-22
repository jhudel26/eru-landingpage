/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/download/:file+',
        destination: 'https://pub-e9c0d926dfb34fa29e5b2e6cc7ec9e90.r2.dev/:file+',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/download',
        destination: '/#download',
        permanent: false,
      },
      {
        source: '/features',
        destination: '/#features',
        permanent: false,
      },
      {
        source: '/screenshots',
        destination: '/#screenshots',
        permanent: false,
      },
      {
        source: '/preview',
        destination: '/#screenshots',
        permanent: false,
      },
      {
        source: '/tech-stack',
        destination: '/#tech-stack',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

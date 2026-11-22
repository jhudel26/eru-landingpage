/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/download/:path*',
        destination: 'https://pub-e9c0d926dfb34fa29e5b2e6cc7ec9e90.r2.dev/:path*',
      },
    ];
  },
};

export default nextConfig;

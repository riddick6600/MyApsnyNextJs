import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/wp-content/:slug*',
        destination: 'https://myapsny.ru/wp-content/:slug*',
        permanent: false
      },
    ]
  },
}

export default nextConfig;

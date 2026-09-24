import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/calculator",
        destination: "/seller-net-proceeds-calculator",
        permanent: true,
      },
      {
        source: "/house-sale-calculator",
        destination: "/seller-net-proceeds-calculator",
        permanent: true,
      },
      {
        source: "/home-sale-profit-calculator",
        destination: "/seller-net-proceeds-calculator",
        permanent: true,
      },
      {
        source: "/house-selling-calculator",
        destination: "/seller-net-proceeds-calculator",
        permanent: true,
      },
      {
        source: "/compare",
        destination: "/compare/opendoor-offerpad-alternatives",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

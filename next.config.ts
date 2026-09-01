import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mundodigitalsolucoes.com.br",
          },
        ],
        destination: "https://mundodigitalsolucoes.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

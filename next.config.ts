import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/go/site",
        destination:
          "https://site.mundodigitalsolucoes.com.br/?utm_source=youtube&utm_medium=organic_video&utm_campaign=bora_vender_google_ia&utm_content=site_profissional",
        permanent: false,
      },
      {
        source: "/go/trafego",
        destination:
          "https://mundodigitalsolucoes.com.br/trafego?utm_source=youtube&utm_medium=organic_video&utm_campaign=bora_vender_google_ia&utm_content=trafego_pago",
        permanent: false,
      },
      {
        source: "/go/consultoria",
        destination:
          "https://mundodigitalsolucoes.com.br/bio?utm_source=youtube&utm_medium=organic_video&utm_campaign=bora_vender_google_ia&utm_content=consultoria",
        permanent: false,
      },
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

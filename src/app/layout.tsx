import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AtendimentoWidget from "@/components/layout/AtendimentoWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://mundodigitalsolucoes.com.br"),
  title: "Mundo Digital Soluções",
  description:
    "Assessoria de marketing e vendas com foco em crescimento previsível.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mundo Digital Soluções",
    description:
      "Assessoria de marketing e vendas com foco em crescimento previsível.",
    url: "/",
    siteName: "Mundo Digital Soluções",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <AtendimentoWidget />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AtendimentoWidget from "@/components/layout/AtendimentoWidget";

export const metadata: Metadata = {
  title: "Mundo Digital Soluções",
  description: "Assessoria de marketing e vendas com foco em crescimento previsível.",
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
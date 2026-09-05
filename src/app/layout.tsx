import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AtendimentoWidget from "@/components/layout/AtendimentoWidget";

const GTM_ID = "GTM-P2GZ7PL9";

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
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <AtendimentoWidget />
      </body>
    </html>
  );
}

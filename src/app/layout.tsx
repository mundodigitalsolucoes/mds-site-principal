import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mundo Digital Soluções | Método MDS",
  description:
    "Assessoria de marketing e vendas com foco em crescimento previsível, automação, CRM, tráfego pago, social media e sites inteligentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
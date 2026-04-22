import Script from "next/script";

export default function AtendimentoWidget() {
  return (
    <>
      <Script id="mds-atendimento-widget-config" strategy="afterInteractive">
        {`
          window.MDSAtendimentoWidget = {
            orgSlug: 'mundo-digital'
          };
        `}
      </Script>

      <Script
        id="mds-atendimento-widget-loader"
        src="https://crm.mundodigitalsolucoes.com.br/widget/loader.js"
        strategy="afterInteractive"
      />
    </>
  );
}

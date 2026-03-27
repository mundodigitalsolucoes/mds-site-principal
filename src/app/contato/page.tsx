import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Mundo Digital Soluções",
  description:
    "Fale com a Mundo Digital Soluções e solicite uma consultoria gratuita para marketing, vendas, CRM, tráfego e sites inteligentes.",
};

const diferenciais = [
  "Diagnóstico estratégico da presença digital",
  "Visão integrada de marketing e vendas",
  "Plano inicial de crescimento previsível",
  "Direcionamento para tráfego, CRM, social e automações",
];

export default function ContatoPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[#374b89] selection:text-white">
      <section className="relative overflow-hidden bg-[#2f3453] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(55,75,137,0.45),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Fale com a Mundo Digital Soluções
            </span>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Vamos desenhar o próximo passo do seu crescimento.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Se você quer organizar marketing, vendas, tráfego, CRM, social
              media ou automações, essa página é a porta de entrada.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#f5c84c] px-6 py-3 text-center text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
              >
                Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@mundodigitalsolucoes.com.br"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(55,75,137,0.28)_100%)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                O que você recebe
              </p>

              <div className="mt-6 grid gap-4">
                {diferenciais.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-white/80">
                Atendimento direto, visão estratégica e linguagem de negócio.
                Sem fumaça. Sem enfeite. Só direção clara.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-3 lg:px-8">
          <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              WhatsApp
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#2f3453]">
              Atendimento rápido
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Ideal para tirar dúvidas, pedir orçamento e acelerar a conversa.
            </p>
            <a
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#374b89]"
            >
              (17) 99282-2597
            </a>
          </div>

          <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              E-mail
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#2f3453]">
              Contato comercial
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Para propostas, alinhamentos e solicitações mais detalhadas.
            </p>
            <a
              href="mailto:contato@mundodigitalsolucoes.com.br"
              className="mt-8 inline-flex break-all rounded-full bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#374b89]"
            >
              contato@mundodigitalsolucoes.com.br
            </a>
          </div>

          <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Base
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#2f3453]">
              Onde estamos
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Atendemos negócios locais e empresas que querem vender mais com
              estrutura.
            </p>
            <div className="mt-8 space-y-2 text-sm font-medium text-slate-700">
              <p>São José do Rio Preto/SP</p>
              <p>CNPJ: 58.694.408/0001-90</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Como podemos te ajudar
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Escolha a frente que faz mais sentido para o teu momento.
            </h2>

            <div className="mt-10 grid gap-4">
              {[
                "Estruturar marketing e vendas",
                "Melhorar presença digital e autoridade",
                "Organizar atendimento com CRM",
                "Criar campanhas de tráfego pago",
                "Montar sites e páginas de alta conversão",
                "Conectar operação com automações",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#2f3453_0%,#374b89_100%)] p-8 text-white shadow-[0_30px_80px_-30px_rgba(47,52,83,0.3)]">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Próximo passo
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Bora abrir a conversa da forma mais rápida.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Hoje o caminho mais forte é WhatsApp e e-mail. Na próxima etapa a
              gente pluga formulário, CRM e automações por aqui.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:contato@mundodigitalsolucoes.com.br"
                className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
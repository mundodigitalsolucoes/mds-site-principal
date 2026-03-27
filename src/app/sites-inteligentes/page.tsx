import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sites Inteligentes | Mundo Digital Soluções",
  description:
    "Sites inteligentes, landing pages e lojas virtuais com automações para captar leads, organizar atendimento e vender mais com a Mundo Digital Soluções.",
  alternates: {
    canonical: "https://mundodigitalsolucoes.com.br/sites-inteligentes",
  },
  openGraph: {
    title: "Sites Inteligentes | Mundo Digital Soluções",
    description:
      "Seu site não precisa só existir. Ele precisa captar, organizar e vender com mais inteligência.",
    url: "https://mundodigitalsolucoes.com.br/sites-inteligentes",
    siteName: "Mundo Digital Soluções",
    locale: "pt_BR",
    type: "website",
  },
};

const dores = [
  "Leads perdidos no WhatsApp",
  "Seu negócio aparece pouco no Google",
  "Contatos espalhados em todo lugar",
  "Tempo e equipe sem ritmo comercial",
];

const etapas = [
  {
    step: "1",
    title: "Estratégia e briefing",
    text: "Entendimento do negócio, da oferta, da dor principal e da melhor estrutura para conversão.",
  },
  {
    step: "2",
    title: "Estrutura no ar",
    text: "Layout, copy, páginas, SEO técnico e base de captação funcionando.",
  },
  {
    step: "3",
    title: "Automação e CRM",
    text: "Conexão com formulários, WhatsApp, CRM e fluxos para não deixar lead esfriar.",
  },
  {
    step: "4",
    title: "Rastreamento e otimização",
    text: "Tags, métricas, eventos e leitura de dados para ajustar o que gera resultado.",
  },
  {
    step: "5",
    title: "Manutenção e evolução",
    text: "A estrutura cresce junto com a operação, sem depender de gambiarra.",
  },
  {
    step: "6",
    title: "Vendedor automático 24/7",
    text: "Seu site deixa de ser cartão de visita e vira uma máquina de captação e organização.",
  },
];

const ofertas = [
  {
    title: "Landing Page com Automação",
    price: "a partir de R$ 497",
    featured: false,
    items: [
      "Página focada em conversão",
      "Copy persuasiva",
      "CTA para WhatsApp e formulário",
      "Integração com CRM e automação",
      "SEO básico e velocidade",
    ],
    cta: "Quero minha LP",
  },
  {
    title: "Site Inteligente",
    price: "a partir de R$ 797",
    featured: true,
    items: [
      "Site institucional com estratégia",
      "Captação de leads integrada",
      "WhatsApp + formulário + CRM",
      "Organização da jornada",
      "SEO técnico e estrutura escalável",
    ],
    cta: "Quero meu site inteligente",
  },
  {
    title: "Loja Virtual Automatizada",
    price: "a partir de R$ 1.597",
    featured: false,
    items: [
      "Estrutura para catálogo e venda",
      "Automação comercial",
      "Conexão com CRM e atendimento",
      "Base pronta para tráfego",
      "Operação mais profissional",
    ],
    cta: "Quero minha loja",
  },
];

const diferenciais = [
  {
    title: "Hospedagem dedicada",
    text: "Mais estabilidade, mais segurança e mais controle para o projeto evoluir.",
  },
  {
    title: "Automação real",
    text: "Seu site conversa com ferramentas e processos, não fica parado esperando.",
  },
  {
    title: "SEO técnico",
    text: "Estrutura pensada para indexação, performance e presença digital mais forte.",
  },
  {
    title: "CRM conectado",
    text: "Leads entram no sistema e a operação comercial ganha clareza.",
  },
  {
    title: "Orientado a resultado",
    text: "Não é só design. É estrutura comercial com lógica de conversão.",
  },
  {
    title: "Suporte contínuo",
    text: "Projeto pensado para durar, evoluir e acompanhar o crescimento do negócio.",
  },
];

const logos = [
  "Cliente 01",
  "Cliente 02",
  "Cliente 03",
  "Cliente 04",
  "Cliente 05",
];

const faqs = [
  {
    q: "Preciso entender de tecnologia para ter um site inteligente?",
    a: "Não. A proposta é justamente simplificar a operação para você, deixando a parte técnica organizada de forma estratégica.",
  },
  {
    q: "Meu site vai aparecer no Google?",
    a: "A estrutura já nasce com base de SEO técnico, performance e organização para facilitar presença digital e crescimento orgânico.",
  },
  {
    q: "As automações do WhatsApp funcionam com meu negócio atual?",
    a: "Na maioria dos casos, sim. O ideal é mapear a jornada do lead e conectar atendimento, formulário, CRM e processos.",
  },
  {
    q: "O que acontece depois que o site fica pronto?",
    a: "A ideia é que ele continue evoluindo com rastreamento, ajustes, automações e integração com a operação comercial.",
  },
  {
    q: "Dá para começar com uma LP e depois virar site?",
    a: "Sim. Essa é uma rota ótima para validar oferta, captar demanda e depois expandir a estrutura.",
  },
];

export default function SitesInteligentesPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[#374b89] selection:text-white">
      <section className="relative overflow-hidden bg-[#2f3453] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(55,75,137,0.45),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Sites + CRM + automações
            </span>

            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Seu site trabalha enquanto você descansa.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Criamos sites, landing pages e lojas virtuais pensados para captar,
              organizar e transformar contatos em oportunidades reais.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
              >
                Quero meu site inteligente
              </a>
              <a
                href="#ofertas"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Ver planos
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/65">
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Captação de leads
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                CRM integrado
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Automação comercial
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#41549a_0%,#2c3769_100%)] p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs text-white/60">Leads captados</p>
                    <p className="mt-2 text-2xl font-bold text-white">+64</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs text-white/60">Oportunidades</p>
                    <p className="mt-2 text-2xl font-bold text-white">+37</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs text-white/60">Processos</p>
                    <p className="mt-2 text-2xl font-bold text-white">8</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs text-white/60">Mais controle</p>
                    <p className="mt-2 text-2xl font-bold text-white">23%</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">Estrutura conectada</p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Site no ar",
                      "Formulário captando",
                      "Lead entrando no CRM",
                      "Atendimento organizado",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/8 px-3 py-2 text-sm text-white/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f3453]">
                  Deixa seu site vender.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              A real dúvida
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Seu site atual é só cartão de visita?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {dores.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-[#2f3453]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#374b89] p-8 text-center text-white shadow-[0_30px_80px_-35px_rgba(55,75,137,0.5)]">
            <h3 className="text-2xl font-bold">E se seu site fizesse tudo isso por você?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80">
              Não criamos site para existir. Criamos estrutura para captar, organizar,
              responder melhor e apoiar vendas de forma contínua.
            </p>
            <a
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453]"
            >
              Quero ver como funciona
            </a>
          </div>
        </div>
      </section>

      <section id="processo" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Processo
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Do zero ao sistema funcionando.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {etapas.map((item) => (
              <div
                key={item.step}
                className={`rounded-3xl border p-6 ${
                  item.step === "6"
                    ? "border-[#2f3453] bg-[#2f3453] text-white"
                    : "border-slate-200 bg-[#f8f9ff] text-slate-900"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                    item.step === "6"
                      ? "bg-white text-[#2f3453]"
                      : "bg-[#374b89] text-white"
                  }`}
                >
                  {item.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    item.step === "6" ? "text-white/80" : "text-slate-600"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ofertas" className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Soluções
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Escolha o que seu negócio precisa agora.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {ofertas.map((item) => (
              <div
                key={item.title}
                className={`relative rounded-[2rem] p-8 ${
                  item.featured
                    ? "border border-[#374b89] bg-white shadow-[0_30px_80px_-35px_rgba(55,75,137,0.35)]"
                    : "border border-slate-200 bg-white shadow-sm"
                }`}
              >
                {item.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#374b89] px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Mais pedido
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-[#2f3453]">{item.title}</h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {item.items.map((sub) => (
                    <li key={sub}>• {sub}</li>
                  ))}
                </ul>
                <p className="mt-8 text-2xl font-bold text-[#2f3453]">{item.price}</p>
                <a
                  href="https://wa.me/5517992822597"
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold ${
                    item.featured
                      ? "bg-[#2f3453] text-white"
                      : "bg-[#eef2ff] text-[#2f3453]"
                  }`}
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Porque é MDS
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Não é só site. É um sistema de vendas.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-[#f8f9ff] p-6"
              >
                <h3 className="text-xl font-semibold text-[#2f3453]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Parceiros
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Quem confia na MDS
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {logos.map((item) => (
              <div
                key={item}
                className="flex min-h-[110px] items-center justify-center rounded-3xl border border-white/10 bg-white/8 p-6 text-center text-sm font-semibold text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#374b89] text-white">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
            Conteúdo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Receba conteúdos que ajudam a vender mais na internet
          </h2>
          <p className="mt-6 text-base leading-7 text-white/78">
            Depois aqui você pluga formulário real, CRM e automação.
          </p>

          <form className="mx-auto mt-10 max-w-3xl space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="WhatsApp"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="Seu segmento de negócio"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <textarea
              placeholder="Qual conteúdo você mais quer receber?"
              className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#2f3453]"
            >
              Quero receber os conteúdos
            </button>
          </form>
        </div>
      </section>

      <section id="faq" className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Respondendo antes de você perguntar
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none text-left text-base font-semibold text-[#2f3453]">
                  {item.q}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
            Pronto para ter um site que vende por você?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Fale com a MDS e entenda qual estrutura faz mais sentido para o seu momento.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-20px_rgba(37,211,102,0.6)]"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://site.mundodigitalsolucoes.com.br/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#2f3453] px-6 py-3 text-sm font-semibold text-white"
            >
              Ver LP atual
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
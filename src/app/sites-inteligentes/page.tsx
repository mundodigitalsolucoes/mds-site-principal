import type { Metadata } from "next";
import Image from "next/image";
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

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Método MDS", href: "/metodo-mds" },
  { label: "Soluções", href: "/solucoes" },
  { label: "CRM", href: "/crm" },
  { label: "Cases", href: "/#cases" },
  { label: "Conteúdos", href: "/#conteudos" },
  { label: "Contato", href: "/#contato" },
];

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
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-mundo-digital.png"
              alt="Mundo Digital Soluções"
              width={320}
              height={64}
              className="h-auto w-[170px] sm:w-[220px] lg:w-[260px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-[#2f3453]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://crm.mundodigitalsolucoes.com.br"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-[#2f3453] transition hover:border-[#2f3453] hover:bg-slate-50"
            >
              Login CRM
            </a>
            <Link
              href="/#contato"
              className="rounded-full bg-[#f5c84c] px-5 py-2.5 text-sm font-semibold text-[#2f3453] shadow-[0_12px_30px_-12px_rgba(245,200,76,0.85)] transition hover:brightness-95"
            >
              Consultoria gratuita
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://crm.mundodigitalsolucoes.com.br"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-[#2f3453] transition hover:border-[#2f3453] hover:bg-slate-50"
            >
              CRM
            </a>
            <Link
              href="/#contato"
              className="rounded-full bg-[#f5c84c] px-3 py-2 text-xs font-semibold text-[#2f3453] shadow-[0_12px_30px_-12px_rgba(245,200,76,0.85)] transition hover:brightness-95"
            >
              Consultoria
            </Link>
          </div>
        </div>
      </header>

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

      <footer className="border-t border-white/10 bg-[#07152f] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <Image
                src="/logo-mundo-digital-branca.png"
                alt="Mundo Digital Soluções"
                width={210}
                height={70}
                className="h-auto w-full max-w-[160px]"
                priority
              />

              <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
                Assessoria de marketing e vendas com foco em crescimento
                previsível, automação, performance e estrutura comercial.
              </p>

              <p className="mt-4 text-sm font-medium text-white/90">
                Crescimento previsível não é sorte. É método.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                Navegação
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <Link href="/metodo-mds" className="transition hover:text-white">
                  Método MDS
                </Link>
                <Link href="/trafego" className="transition hover:text-white">
                  Tráfego
                </Link>
                <Link href="/social-media" className="transition hover:text-white">
                  Social Media
                </Link>
                <Link
                  href="/sites-inteligentes"
                  className="transition hover:text-white"
                >
                  Sites Inteligentes
                </Link>
                <Link href="/crm" className="transition hover:text-white">
                  CRM
                </Link>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                Contato
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
                <a
                  href="https://wa.me/5517992822597"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  (17) 99282-2597
                </a>

                <a
                  href="mailto:contato@mundodigitalsolucoes.com.br"
                  className="break-all transition hover:text-white"
                >
                  contato@mundodigitalsolucoes.com.br
                </a>

                <p>São José do Rio Preto/SP</p>
                <p>CNPJ: 58.694.408/0001-90</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                Redes e acessos
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
                <a
                  href="https://www.instagram.com/mundodigital.solucoes/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/MundoDigitalSolucoesOFC"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Facebook
                </a>

                <a
                  href="https://www.linkedin.com/in/mudo-digital-solu%C3%A7%C3%B5es-834653263/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>

                <a
                  href="https://crm.mundodigitalsolucoes.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  CRM
                </a>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/#contato"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
                >
                  Consultoria gratuita
                </Link>

                <a
                  href="https://wa.me/5517992822597"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between">
              <p>© 2026 Mundo Digital Soluções. Todos os direitos reservados.</p>
              <p>
                Marketing, vendas, automação e CRM em um sistema mais
                inteligente.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <div className="hidden rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)] backdrop-blur sm:block">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#374b89]">
            Atendimento MDS
          </p>
          <p className="mt-1 text-sm font-semibold text-[#2f3453]">
            Bora acelerar seu marketing?
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Fale no WhatsApp ou peça sua consultoria gratuita.
          </p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <Link
            href="/#contato"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#2f3453] shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:border-[#374b89]/30 hover:bg-slate-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f3453] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2a10 10 0 1 0 6.32 17.75l3.46.92a1 1 0 0 0 1.22-1.22l-.92-3.46A10 10 0 0 0 12 2Zm0 2a8 8 0 0 1 6.31 12.92 1 1 0 0 0-.18.86l.51 1.91-1.91-.51a1 1 0 0 0-.86.18A8 8 0 1 1 12 4Z" />
              </svg>
            </span>
            <span>Consultoria gratuita</span>
          </Link>

          <a
            href="https://wa.me/5517992822597"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-20px_rgba(37,211,102,0.6)] transition hover:-translate-y-0.5 hover:brightness-95"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/20" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="relative h-5 w-5"
              >
                <path d="M19.11 17.41c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.08-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.19 2.05 3.12 4.97 4.38.7.31 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z" />
                <path d="M16.01 3.2c-7.08 0-12.83 5.75-12.83 12.83 0 2.25.59 4.45 1.7 6.39L3.2 28.8l6.53-1.65a12.8 12.8 0 0 0 6.28 1.63h.01c7.08 0 12.83-5.75 12.83-12.83S23.09 3.2 16.01 3.2Zm0 23.43h-.01a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-3.88.98 1.03-3.78-.25-.39a10.62 10.62 0 1 1 8.88 4.89Z" />
              </svg>
            </span>
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
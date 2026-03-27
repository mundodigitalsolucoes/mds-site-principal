import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Método MDS | Mundo Digital Soluções",
  description:
    "Conheça o Método MDS da Mundo Digital Soluções: um sistema em 6 pilares para organizar marketing e vendas, gerar previsibilidade e acelerar o crescimento do negócio.",
  alternates: {
    canonical: "https://mundodigitalsolucoes.com.br/metodo-mds",
  },
  openGraph: {
    title: "Método MDS | Mundo Digital Soluções",
    description:
      "Um método em 6 pilares para estruturar marketing e vendas com mais clareza, previsibilidade e crescimento.",
    url: "https://mundodigitalsolucoes.com.br/metodo-mds",
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

const pilares = [
  {
    title: "Benchmarking",
    description:
      "Análise de mercado, concorrência e posicionamento para tomar decisões com mais clareza e menos improviso.",
  },
  {
    title: "Planejamento Estratégico",
    description:
      "Plano de ação com metas, prioridades, cronograma e direção comercial para a operação evoluir com consistência.",
  },
  {
    title: "Canais de Aquisição",
    description:
      "Estruturação dos canais certos para gerar demanda qualificada, atrair mais oportunidades e vender melhor.",
  },
  {
    title: "Dados (GCAO)",
    description:
      "Gerar, Coletar, Analisar e Otimizar. Crescimento guiado por dados reais, não por achismo.",
  },
  {
    title: "Segmentação de Listas",
    description:
      "Organização de públicos, jornadas e abordagens para comunicar melhor, aumentar conversão e elevar a relevância.",
  },
  {
    title: "Fidelização",
    description:
      "Relacionamento, retenção e recorrência para transformar clientes em ativos do negócio.",
  },
];

const dores = [
  {
    title: "Você já investiu e não girou",
    text: "Campanhas sem direção, ações soltas e pouca previsibilidade costumam virar desperdício de tempo e dinheiro.",
  },
  {
    title: "Você vive no corre-corre",
    text: "Sem método, o negócio depende de improviso, urgência e apagamento de incêndio o tempo todo.",
  },
  {
    title: "Marketing e vendas não conversam",
    text: "Quando aquisição, atendimento e fechamento não se conectam, o resultado trava e a operação perde força.",
  },
];

const etapas = [
  {
    step: "1",
    title: "Diagnóstico",
    text: "Entendimento do cenário atual, gargalos, oportunidades e prioridades reais do negócio.",
  },
  {
    step: "2",
    title: "Planejamento",
    text: "Definição de rota, metas, canais, organização comercial e prioridades estratégicas.",
  },
  {
    step: "3",
    title: "Execução",
    text: "Aplicação do método com marketing, vendas, conteúdo, CRM, automações e rotina de crescimento.",
  },
  {
    step: "4",
    title: "Otimização",
    text: "Leitura de dados, ajustes e melhoria contínua para escalar com mais inteligência.",
  },
];

const cases = [
  {
    title: "Case 01",
    subtitle: "Resultado com método e posicionamento",
  },
  {
    title: "Case 02",
    subtitle: "Mais clareza comercial e crescimento",
  },
  {
    title: "Case 03",
    subtitle: "Estruturação para vender melhor",
  },
];

const reviews = [
  {
    name: "Cliente MDS",
    role: "Google Reviews",
    text: "A organização do marketing e das campanhas trouxe muito mais clareza do que fazer e como crescer.",
  },
  {
    name: "Cliente MDS",
    role: "Google Reviews",
    text: "O método ajudou a conectar marketing e vendas. A operação ficou muito mais profissional.",
  },
  {
    name: "Cliente MDS",
    role: "Google Reviews",
    text: "Não foi só divulgação. Teve estratégia, processo e visão de crescimento de verdade.",
  },
];

const faqs = [
  {
    question: "Isso é uma agência tradicional?",
    answer:
      "Não. A proposta do Método MDS é estruturar marketing e vendas como sistema, não apenas entregar ações isoladas sem direção.",
  },
  {
    question: "Serve para qualquer tipo de negócio?",
    answer:
      "A comunicação desta página está direcionada para PMEs e negócios locais, mas a lógica do método funciona para operações que precisam de mais organização, demanda e previsibilidade.",
  },
  {
    question: "Preciso contratar tudo de uma vez?",
    answer:
      "Não. O diagnóstico mostra prioridades. A evolução pode acontecer por etapas, com mais inteligência e menos desperdício.",
  },
  {
    question: "O CRM faz parte do método?",
    answer:
      "Sim. Quando faz sentido para a operação, o CRM entra como peça estratégica para organizar atendimento, jornada e relacionamento comercial.",
  },
  {
    question: "Tem consultoria gratuita?",
    answer:
      "Sim. A consultoria é a porta de entrada para entender o cenário atual e mostrar onde estão os gargalos e oportunidades do negócio.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mundo Digital Soluções",
  url: "https://mundodigitalsolucoes.com.br",
  logo: "https://mundodigitalsolucoes.com.br/logo-mundo-digital.png",
  email: "contato@mundodigitalsolucoes.com.br",
  telephone: "+55-17-99282-2597",
  sameAs: [
    "https://www.instagram.com/mundodigital.solucoes/",
    "https://www.facebook.com/MundoDigitalSolucoesOFC",
    "https://www.linkedin.com/in/mudo-digital-solu%C3%A7%C3%B5es-834653263/",
  ],
};

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.68L9.54 5.98A1 1 0 0 0 8 6.82Z" />
    </svg>
  );
}

export default function MetodoMDSPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[#374b89] selection:text-white">
      <Script
        id="faq-schema-metodo-mds"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="organization-schema-metodo-mds"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

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

      <section
        id="inicio"
        className="relative overflow-hidden bg-[#2f3453] text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(55,75,137,0.45),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Método proprietário MDS
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Você não precisa de mais uma agência.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/78">
              Precisa de um método que faça marketing e vendas funcionarem juntos,
              com estratégia, processo, dados e direção comercial.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60">
              A diferença entre divulgar e crescer está em sair do improviso e
              construir um sistema que gere previsibilidade.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="mt-2 text-sm text-white/68">
                  ações e ajustes com visão estratégica
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">97%</p>
                <p className="mt-2 text-sm text-white/68">
                  mais clareza quando marketing e vendas se conectam
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">3x</p>
                <p className="mt-2 text-sm text-white/68">
                  mais força quando existe método, rotina e otimização
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/#contato"
                className="rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
              >
                Agendar consultoria gratuita
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Método, processo e visão de crescimento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Para quem o método faz sentido
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Feito para quem já tentou e não funcionou.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dores.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.18)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef2ff] font-bold text-[#374b89]">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-[#2f3453]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#contato"
              className="inline-flex rounded-full bg-[#374b89] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Agendar consultoria gratuita
            </Link>
          </div>
        </div>
      </section>

      <section
        id="pilares"
        className="border-t border-white/10 bg-[#2f3453] text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Método proprietário MDS
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              O Método MDS de Marketing e Vendas
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              O método organiza a operação em 6 pilares. Tudo funcionando como
              sistema, não como ação isolada.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pilares.map((pilar, index) => (
              <div
                key={pilar.title}
                className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)] backdrop-blur"
              >
                <p className="text-sm font-semibold text-white/60">
                  Pilar {index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {pilar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {pilar.description}
                </p>
                <div className="mt-5 h-1.5 w-16 rounded-full bg-[#f5c84c]" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#contato"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
            >
              Agendar consultoria gratuita
            </Link>
          </div>
        </div>
      </section>

      <section id="etapas" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Como trabalhamos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              4 etapas. Do diagnóstico ao crescimento.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-4">
            {etapas.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#5f86ff] text-base font-bold text-white shadow-lg">
                  {item.step}
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-semibold text-[#2f3453]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#contato"
              className="inline-flex rounded-full bg-[#374b89] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Agendar consultoria gratuita
            </Link>
          </div>
        </div>
      </section>

      <section
        id="cases"
        className="border-t border-white/10 bg-[#232b55] text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Resultados reais
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Clientes que cresceram com o Método MDS
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cases.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-white/10 bg-[#2f3453] p-5 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.55)]"
              >
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#40539a_0%,#25305d_100%)] p-4">
                  <div className="mx-auto aspect-[9/16] max-w-[220px] rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_30%),linear-gradient(180deg,#19203f_0%,#0f1430_100%)] p-4">
                    <div className="flex h-full flex-col justify-between rounded-[1rem] border border-white/10 bg-white/5 p-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                          Vídeo / prova social
                        </p>
                        <h3 className="mt-3 text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/65">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5f86ff] text-white shadow-[0_20px_40px_-18px_rgba(95,134,255,0.9)]">
                          <PlayIcon />
                        </div>
                      </div>

                      <div className="text-center text-xs text-white/45">
                        trocar depois pelo vídeo real
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
            >
              Falar com a MDS
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Prova social
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Avaliações reais de clientes reais
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((item) => (
              <div
                key={item.text}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.16)]"
              >
                <div className="text-sm text-[#f5b301]">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-[#2f3453]">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#contato"
              className="inline-flex rounded-full bg-[#374b89] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Agendar consultoria gratuita
            </Link>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-white/10 bg-[#2f3453] text-white"
      >
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Perguntas frequentes
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tudo que você quer saber antes de conversar
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-white/6 p-5"
              >
                <summary className="cursor-pointer list-none text-left text-base font-semibold text-white">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-white/50 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="consultoria"
        className="border-t border-white/10 bg-[#232b55] text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Consultoria gratuita
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Consultoria gratuita de 30 minutos
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Uma conversa objetiva para entender seu cenário atual, identificar
              gargalos e mostrar onde está a melhor rota de crescimento.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/68">
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Diagnóstico rápido
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Direcionamento estratégico
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Próximos passos claros
              </span>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
              >
                Falar agora no WhatsApp
              </a>
              <Link
                href="/#contato"
                className="rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
              >
                Agendar consultoria gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="captura" className="bg-[#38416f] text-white">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
            Conteúdo gratuito
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Receba nosso conteúdo gratuito de marketing e vendas
          </h2>
          <p className="mt-6 text-base leading-7 text-white/72">
            Aqui depois você pluga formulário real, automação no n8n e entrega
            do material.
          </p>

          <form className="mx-auto mt-10 max-w-xl space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="WhatsApp"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-[#5f86ff] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Quero receber conteúdo gratuito
            </button>
          </form>
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
import type { Metadata } from "next";
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
                href="/contato"
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
              href="/contato"
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
              href="/contato"
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
              href="/contato"
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
              href="/contato"
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
                href="/contato"
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
    </main>
  );
}
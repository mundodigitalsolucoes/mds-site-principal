import Image from "next/image";
import Link from "next/link";
import GoogleReviewsSection from "@/components/sections/GoogleReviewsSection";

type MenuItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] };

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Método MDS", href: "/metodo-mds" },
  {
    label: "Soluções",
    children: [
      { label: "Gestão de Dados", href: "/trafego" },
      { label: "Gestão de Redes Sociais", href: "/social-media" },
      { label: "Sites Inteligentes", href: "/sites-inteligentes" },
      { label: "CRM", href: "/crm" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
];

const pilares = [
  "Benchmarking",
  "Dados",
  "Planejamento Estratégico",
  "Segmentação",
  "Canais de Aquisição",
  "Fidelização",
];

const solucoes = [
  {
    title: "Gestão de Dados",
    description:
      "Tráfego pago, orgânico, mensuração e otimização para transformar dados em crescimento previsível.",
    href: "/trafego",
    cta: "Ver solução",
    variant: "dark",
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Conteúdo com estratégia, presença profissional e crescimento com foco em autoridade, relacionamento e conversão.",
    href: "/social-media",
    cta: "Ver solução",
    variant: "dark",
  },
  {
    title: "Sites Inteligentes",
    description:
      "Sites e landing pages pensados para captar, qualificar e encaminhar oportunidades com mais inteligência.",
    href: "/sites-inteligentes",
    cta: "Ver solução",
    variant: "dark",
  },
  {
    title: "CRM de Marketing e Vendas",
    description:
      "Multiatendimento, omnichannel, automações e organização comercial em uma operação mais conectada.",
    href: "/crm",
    cta: "Ver solução",
    variant: "light",
  },
];

const destaques = [
  "Marketing e vendas conectados",
  "Automação com n8n",
  "CRM multiatendimento",
  "Método proprietário em 6 pilares",
];

const resultados = [
  {
    title: "Previsibilidade",
    text: "Mais clareza do que fazer, por que fazer e o que esperar do processo.",
  },
  {
    title: "Organização",
    text: "Funil, jornada e canais trabalhando juntos, não em pedaços soltos.",
  },
  {
    title: "Crescimento",
    text: "Estrutura para vender mais, reter melhor e evoluir com segurança.",
  },
];

const videoTestimonials = [
  {
    company: "Montalvão Classic",
    video: "/videos/depoimentos/montalvao-classic.mp4",
  },
  {
    company: "Ótica São Paulo",
    video: "/videos/depoimentos/otica-sao-paulo.mp4",
  },
  {
    company: "Chopp Brasser Rio Preto",
    video: "/videos/depoimentos/chopp-brasser-rio-preto.mp4",
  },
];

export default function Home() {
  return (
    <main
      id="topo"
      className="bg-white text-slate-900 selection:bg-[#374b89] selection:text-white"
    >
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
            {menuItems.map((item) =>
              "children" in item ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className="text-sm font-medium text-slate-600 transition hover:text-[#2f3453]"
                  >
                    {item.label}
                  </button>

                  <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#2f3453]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-[#2f3453]"
                >
                  {item.label}
                </Link>
              )
            )}
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
            <a
              href="#contato"
              className="rounded-full bg-[#f5c84c] px-5 py-2.5 text-sm font-semibold text-[#2f3453] shadow-[0_12px_30px_-12px_rgba(245,200,76,0.85)] transition hover:brightness-95"
            >
              Consultoria gratuita
            </a>
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
            <a
              href="#contato"
              className="rounded-full bg-[#f5c84c] px-3 py-2 text-xs font-semibold text-[#2f3453] shadow-[0_12px_30px_-12px_rgba(245,200,76,0.85)] transition hover:brightness-95"
            >
              Consultoria
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200/70 lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3">
            <Link
              href="/"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/blog/metodo-mds"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Método MDS
            </Link>

            <details className="relative">
              <summary className="list-none whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                Soluções
              </summary>

              <div className="absolute left-0 top-[calc(100%+8px)] z-50 min-w-[240px] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                <Link
                  href="/trafego"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#2f3453]"
                >
                  Gestão de Dados
                </Link>
                <Link
                  href="/social-media"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#2f3453]"
                >
                  Gestão de Redes Sociais
                </Link>
                <Link
                  href="/sites-inteligentes"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#2f3453]"
                >
                  Sites Inteligentes
                </Link>
                <Link
                  href="/crm"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#2f3453]"
                >
                  CRM
                </Link>
              </div>
            </details>

            <Link
              href="/blog"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Blog
            </Link>

            <a
              href="#contato"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Contato
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#2f3453] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(55,75,137,0.45),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Método, dados, automação e vendas
            </span>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Marketing e vendas estruturados para gerar crescimento previsível.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              A Mundo Digital Soluções organiza aquisição, atendimento,
              relacionamento e operação comercial em um sistema mais claro,
              escalável e inteligente.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {destaques.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="rounded-full bg-[#f5c84c] px-6 py-3 text-center text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
              >
                Consultoria gratuita
              </a>
              <a
                href="#metodo"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Conhecer o Método MDS
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {resultados.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/8 p-5 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.55)] backdrop-blur"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(55,75,137,0.28)_100%)] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/70">
                      Sistema de crescimento
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">Método MDS</h2>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold">
                    6 pilares
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {pilares.map((pilar, index) => (
                    <div
                      key={pilar}
                      className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        Pilar {index + 1}
                      </p>
                      <p className="mt-2 text-base font-semibold">{pilar}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-white/85">
                  Não entregamos ações soltas. Entregamos uma estrutura que
                  conecta marketing, vendas, relacionamento e fidelização.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="metodo"
        className="border-t border-white/10 bg-[#2f3453] text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Método MDS
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              O carro-chefe da MDS é um método que transforma marketing solto em
              sistema.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Em vez de vender tarefas desconectadas, a MDS estrutura marketing
              e vendas como uma jornada organizada, previsível e escalável.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pilares.map((pilar, index) => (
              <div
                key={pilar}
                className="group rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-white/65">
                  Pilar {index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {pilar}
                </h3>
                <div className="mt-5 h-1.5 w-16 rounded-full bg-[#f5c84c]" />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/metodo-mds"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
            >
              Ver página do Método MDS
            </Link>
            <a
              href="#contato"
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Quero uma consultoria gratuita
            </a>
          </div>
        </div>
      </section>

      <section id="solucoes" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Soluções
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Soluções pensadas para atrair, organizar e converter melhor.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Cada frente resolve uma dor específica, mas todas fazem mais
              sentido quando operam dentro do mesmo sistema.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {solucoes.map((item) => {
              const isLight = item.variant === "light";

              return (
                <div
                  key={item.title}
                  className={`rounded-[1.8rem] p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 ${
                    isLight
                      ? "border border-[#374b89] bg-[#374b89] text-white"
                      : "border border-[#2f3453] bg-[#2f3453] text-white"
                  }`}
                >
                  <div className="mb-6 h-1.5 w-20 rounded-full bg-white/80" />
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/80">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
                  >
                    {item.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="crm" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#2f3453_0%,#374b89_100%)] p-8 text-white shadow-[0_30px_80px_-30px_rgba(47,52,83,0.3)]">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                CRM
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Um CRM de marketing e vendas para organizar atendimento,
                operação e relacionamento.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Mais controle da jornada, mais velocidade no atendimento e mais
                visão sobre o que está funcionando no processo comercial.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://crm.mundodigitalsolucoes.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
                >
                  Login CRM
                </a>
                <Link
                  href="/crm"
                  className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Ver CRM
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
                O que ele organiza
              </p>

              <div className="mt-6 grid gap-4">
                {[
                  "Multiatendimento",
                  "Omnichannel",
                  "Automação com n8n",
                  "Integração com funis e operação comercial",
                  "Acesso rápido para usuários da plataforma",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="cases" className="border-t border-slate-200 bg-white">
        <GoogleReviewsSection
          title="Avaliações que reforçam a confiança na MDS"
          subtitle="Avaliações do nosso perfil de empresas do Google."
        />
      </div>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#1f2544] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_24%),radial-gradient(circle_at_80%_20%,_rgba(96,165,250,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Resultados reais
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Clientes que cresceram com o Método MDS
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {videoTestimonials.map((item) => (
              <article
                key={item.company}
                className="group rounded-[1.8rem] border border-[#5f76c9]/28 bg-[linear-gradient(180deg,rgba(83,109,195,0.20)_0%,rgba(41,51,97,0.82)_100%)] p-4 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.65)] transition hover:-translate-y-1"
              >
                <div className="mb-3 px-1">
                  <p className="text-sm font-medium text-white/80">
                    {item.company}
                  </p>
                </div>

                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#22114d]">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-[9/16] w-full object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 rounded-full bg-[#374b89] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-20px_rgba(93,140,255,0.7)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v14.5A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25V4.75Zm2.75-1a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1h10.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1H6.75Zm5.25 3.5a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-1.5 0v-3.25H8a.75.75 0 0 1 0-1.5h3.25V8a.75.75 0 0 1 .75-.75Z" />
              </svg>
              <span>Fale com nossos especialistas</span>
            </a>
          </div>
        </div>
      </section>

      <section id="conteudos" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
                Materiais gratuitos
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
                Começamos pelo e-book do Método MDS.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Um material para mostrar como a MDS enxerga crescimento com
                método, previsibilidade e estrutura.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-[#374b89]">E-book 01</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#2f3453]">
                  Método MDS
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Em breve, esse bloco vira captura de lead com integração no n8n
                  e entrega automática do material.
                </p>
                <a
                  href="#contato"
                  className="mt-6 inline-flex rounded-full bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#374b89]"
                >
                  Quero receber
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
                Blog
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
                Conteúdo para gerar autoridade, tráfego e demanda qualificada.
              </h2>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-[#374b89]">
                  Leia nosso conteúdo
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#2f3453]">
                  O que é o Método MDS e como ele gera crescimento previsível
                  para pequenas e médias empresas
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Entenda como o Método MDS ajuda PMEs a estruturar marketing e vendas com estratégia, dados, aquisição e fidelização para crescer com mais previsibilidade.
                </p>
                <Link
                  href="/blog"
                  className="mt-6 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:border-[#2f3453] hover:bg-slate-50"
                >
                  Ver blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="border-t border-slate-200 bg-[#07152f] text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              Contato
            </span>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Receba uma consultoria gratuita com diagnóstico completo de
              marketing.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Depois vamos plugar formulário, Calendly, WhatsApp e automação com
              n8n para transformar contato em oportunidade real.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
              >
                Agendar consultoria
              </a>
              <a
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              Direção da marca
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/80">
              <p>
                Visão estratégica e inteligência tecnológica trabalhando juntas.
              </p>
              <p>
                Método claro gera previsibilidade. Previsibilidade gera
                crescimento.
              </p>
              <p>
                Marketing e vendas não como tarefas isoladas, mas como sistema.
              </p>
            </div>
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

                <Link href="/crm" className="transition hover:text-white">
                  CRM
                </Link>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
                >
                  Consultoria gratuita
                </a>

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
          <a
            href="#contato"
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
          </a>

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
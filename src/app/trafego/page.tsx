import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tráfego Pago | Mundo Digital Soluções",
  description:
    "Gestão de tráfego pago com foco em aquisição de clientes, dados, otimização e crescimento previsível para negócios locais e PMEs.",
  alternates: {
    canonical: "https://mundodigitalsolucoes.com.br/trafego",
  },
  openGraph: {
    title: "Tráfego Pago | Mundo Digital Soluções",
    description:
      "Pare de gastar com anúncios e comece a gerar clientes com uma estrutura de tráfego focada em dados e conversão.",
    url: "https://mundodigitalsolucoes.com.br/trafego",
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

const estrutura = [
  {
    title: "Campanhas estratégicas",
    text: "Planejamento orientado para geração de leads, vendas e crescimento real.",
  },
  {
    title: "Públicos qualificados",
    text: "Segmentações mais inteligentes para atrair gente com mais chance de comprar.",
  },
  {
    title: "Remarketing inteligente",
    text: "Reimpacte quem demonstrou interesse e aumente as chances de conversão.",
  },
  {
    title: "Rastreamento completo",
    text: "Pixel, tags e eventos bem configurados para medir o que realmente importa.",
  },
  {
    title: "Otimização baseada em dados",
    text: "Menos achismo e mais decisões com base no comportamento da campanha.",
  },
];

const resultados = [
  {
    title: "Mais clientes todos os dias",
    text: "Fluxo constante de oportunidades para sua operação ganhar ritmo.",
  },
  {
    title: "Leads mais qualificados",
    text: "Atração de pessoas mais próximas do momento de compra.",
  },
  {
    title: "Menos desperdício de dinheiro",
    text: "Cada real investido com mais controle e leitura de resultado.",
  },
  {
    title: "Crescimento previsível",
    text: "Mais clareza para escalar com base em dados e processo.",
  },
];

const planos = [
  {
    title: "Meta Ads",
    price: "R$ 697",
    subtitle: "gestão estratégica mensal",
    items: [
      "Campanhas para Meta Ads",
      "Planejamento estratégico",
      "Estrutura de conversão",
      "Relatórios mensais",
      "Otimização contínua",
    ],
    href: "https://trafego.mundodigitalsolucoes.com.br/",
    cta: "Contratar agora",
    featured: false,
  },
  {
    title: "Combo",
    price: "R$ 1.097",
    subtitle: "Meta + Google em uma só operação",
    items: [
      "Tudo do Meta Ads + Google Ads",
      "Estratégia integrada",
      "Rastreamento completo",
      "Otimização nos dois canais",
      "Visão mais ampla da aquisição",
    ],
    href: "https://trafego.mundodigitalsolucoes.com.br/",
    cta: "Contratar agora",
    featured: true,
  },
  {
    title: "Google Ads",
    price: "R$ 597",
    subtitle: "gestão estratégica mensal",
    items: [
      "Campanhas no Google",
      "Rede de pesquisa e intenção",
      "Estrutura de palavras-chave",
      "Relatórios mensais",
      "Otimização contínua",
    ],
    href: "https://trafego.mundodigitalsolucoes.com.br/",
    cta: "Contratar agora",
    featured: false,
  },
];

const depoimentos = [
  {
    name: "Carlos M.",
    role: "cliente MDS",
    text: "O tráfego começou a trazer oportunidades com muito mais clareza. A operação ficou bem mais previsível.",
  },
  {
    name: "Ana Paula S.",
    role: "cliente MDS",
    text: "Parou de ser anúncio por anúncio. Virou uma estrutura real para gerar demanda todos os dias.",
  },
  {
    name: "Roberto P.",
    role: "cliente MDS",
    text: "Conseguimos reduzir desperdício e melhorar a qualidade dos leads que chegavam.",
  },
];

const objecoes = [
  {
    title: "Já tentei e não funcionou",
    text: "Sem estrutura, rastreamento e otimização, tráfego vira gasto. O ponto é fazer do jeito certo.",
  },
  {
    title: "Não tenho orçamento",
    text: "Investir sem método custa mais caro. O objetivo é começar com inteligência e evoluir com base em resultado.",
  },
  {
    title: "Não entendo nada disso",
    text: "Você não precisa dominar a ferramenta. Precisa de um sistema que gere demanda e mostre o caminho.",
  },
];

const faqs = [
  {
    q: "Preciso investir quanto em anúncios?",
    a: "Depende do mercado, da oferta e da meta. A gestão é uma parte. O investimento em mídia precisa ser definido de forma estratégica.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Os primeiros sinais costumam aparecer rápido, mas resultado consistente vem com estrutura, otimização e leitura de dados.",
  },
  {
    q: "Funciona para qualquer negócio?",
    a: "Funciona melhor quando existe oferta clara, atendimento preparado e processo comercial alinhado.",
  },
  {
    q: "Vocês criam os anúncios?",
    a: "Sim. A gestão contempla direção estratégica, estrutura e otimização das campanhas.",
  },
];

export default function TrafegoPage() {
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

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
            Meta Ads • Google Ads • Tráfego Estruturado
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Pare de gastar com anúncios e comece a{" "}
            <span className="text-[#8da5ff]">gerar clientes todos os dias</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Tráfego estratégico guiado por dados para transformar cliques em
            oportunidades, demanda e crescimento previsível.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
            >
              Falar com especialista agora
            </a>
            <a
              href="#estrutura"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
            O que não é estratégia
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
            Impulsionar post não é estratégia.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Rodar anúncio sem dados, funil e acompanhamento é o atalho mais
            rápido para desperdiçar verba.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.18)]">
            <p className="text-base font-medium text-[#2f3453]">
              O que você precisa é de um sistema estruturado que gera, analisa e
              otimiza resultados constantemente.
            </p>
          </div>
        </div>
      </section>

      <section id="estrutura" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              O que entregamos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Uma estrutura completa de aquisição de clientes
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {estrutura.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-[#f8f9ff] p-6 shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] font-bold text-[#374b89]">
                  +
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
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Benefícios
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Resultados que você vai sentir
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {resultados.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#2f3453]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Planos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Escolha o plano ideal para o seu negócio
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {planos.map((item) => (
              <div
                key={item.title}
                className={`relative rounded-[2rem] p-8 ${
                  item.featured
                    ? "border border-[#f5c84c] bg-white text-[#2f3453] shadow-[0_30px_80px_-35px_rgba(245,200,76,0.35)]"
                    : "border border-white/10 bg-white/8 text-white"
                }`}
              >
                {item.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#f5c84c] px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#2f3453]">
                    Mais escolhido
                  </span>
                )}

                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p
                  className={`mt-4 text-4xl font-bold ${
                    item.featured ? "text-[#2f3453]" : "text-[#8da5ff]"
                  }`}
                >
                  {item.price}
                </p>
                <p
                  className={`mt-2 text-sm ${
                    item.featured ? "text-slate-500" : "text-white/60"
                  }`}
                >
                  {item.subtitle}
                </p>

                <ul
                  className={`mt-6 space-y-3 text-sm ${
                    item.featured ? "text-slate-600" : "text-white/70"
                  }`}
                >
                  {item.items.map((sub) => (
                    <li key={sub}>• {sub}</li>
                  ))}
                </ul>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold ${
                    item.featured
                      ? "bg-[#2f3453] text-white"
                      : "bg-white text-[#2f3453]"
                  }`}
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-[#f8f9ff] p-8 text-center shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Diagnóstico gratuito
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453]">
              Receba um diagnóstico gratuito do seu tráfego
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Preencha e nossa equipe entra em contato.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <input
                type="text"
                placeholder="WhatsApp com DDD"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#374b89] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Quero meu diagnóstico
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Depoimentos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Quem já usa, recomenda
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((item) => (
              <div
                key={item.text}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm"
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
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Objeções
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Talvez você esteja pensando...
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {objecoes.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-slate-200 bg-[#f8f9ff] p-7"
              >
                <h3 className="text-xl font-semibold text-[#2f3453]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Seus concorrentes já estão anunciando. A diferença é{" "}
            <span className="text-[#8da5ff]">quem faz do jeito certo.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Não é só tráfego pago. É um sistema que transforma dados em clientes.
          </p>
          <p className="mt-4 text-sm font-medium text-[#8da5ff]">
            Crescimento previsível não é sorte. É método.
          </p>

          <a
            href="https://wa.me/5517992822597"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
          >
            Falar com especialista
          </a>
        </div>
      </section>

      <section id="faq" className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Perguntas frequentes
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
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
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
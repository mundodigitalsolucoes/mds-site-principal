import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://mundodigitalsolucoes.com.br";

export const metadata: Metadata = {
  title: "Soluções | Mundo Digital Soluções",
  description:
    "Conheça as soluções da Mundo Digital Soluções para PMEs e negócios locais: Tráfego Pago, Social Media, Sites Inteligentes e CRM.",
  alternates: {
    canonical: `${siteUrl}/solucoes`,
  },
  openGraph: {
    title: "Soluções | Mundo Digital Soluções",
    description:
      "Tráfego Pago, Social Media, Sites Inteligentes e CRM conectados para gerar crescimento previsível.",
    url: `${siteUrl}/solucoes`,
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

const stats = [
  { value: "4", label: "frentes principais conectadas no ecossistema MDS" },
  { value: "1", label: "método para alinhar marketing, vendas e operação" },
  { value: "PMEs", label: "foco em negócios locais que querem previsibilidade" },
  { value: "360°", label: "visão da jornada da atração ao fechamento" },
];

const solutions = [
  {
    title: "Tráfego Pago",
    tag: "Aquisição",
    href: "/trafego",
    description:
      "Campanhas no Meta Ads e Google Ads para gerar demanda com intenção comercial e mais clareza sobre o que realmente converte.",
    bullets: [
      "Meta Ads e Google Ads",
      "Campanhas com foco em conversão",
      "Mais previsibilidade na aquisição",
    ],
  },
  {
    title: "Social Media",
    tag: "Posicionamento",
    href: "/social-media",
    description:
      "Gestão estratégica das redes sociais para fortalecer marca, gerar autoridade e transformar atenção em demanda de verdade.",
    bullets: [
      "Conteúdo estratégico",
      "Calendário editorial",
      "Posicionamento com direção comercial",
    ],
  },
  {
    title: "Sites Inteligentes",
    tag: "Conversão",
    href: "/sites-inteligentes",
    description:
      "Sites e landing pages pensados para vender, captar leads e apoiar sua operação comercial com mais eficiência.",
    bullets: [
      "Sites de alta conversão",
      "Landing pages estratégicas",
      "Estrutura pronta para captação",
    ],
  },
  {
    title: "CRM",
    tag: "Gestão",
    href: "/crm",
    description:
      "Centralize atendimento, organize o funil e acompanhe oportunidades em um sistema mais profissional e lucrativo.",
    bullets: [
      "Multiatendimento",
      "Funil comercial organizado",
      "Mais controle da operação",
    ],
  },
];

const journey = [
  {
    title: "Atrair demanda",
    text: "Tráfego Pago e Social Media trabalham juntos para colocar sua marca na frente das pessoas certas e gerar oportunidades com mais consistência.",
  },
  {
    title: "Converter melhor",
    text: "Sites Inteligentes transformam visitas em conversas, orçamentos e leads, sem deixar o marketing morrer no clique.",
  },
  {
    title: "Organizar e crescer",
    text: "CRM estrutura atendimento, follow-up e gestão comercial para a empresa vender melhor e depender menos do improviso.",
  },
];

const perfis = [
  {
    title: "Negócios locais",
    text: "Para empresas que já funcionam, mas ainda vivem sem previsibilidade clara de marketing e vendas.",
  },
  {
    title: "Empresas com marketing solto",
    text: "Para operações que fazem tráfego, rede social ou site de forma isolada e sem conexão estratégica.",
  },
  {
    title: "Times comerciais desorganizados",
    text: "Para quem perde lead por falta de processo, demora no atendimento ou ausência de acompanhamento.",
  },
  {
    title: "Empresas em crescimento",
    text: "Para negócios que querem sair do modo tentativa e entrar numa estrutura mais previsível.",
  },
  {
    title: "Agências e consultorias",
    text: "Para operações que precisam vender melhor, organizar atendimento e estruturar jornada comercial.",
  },
  {
    title: "Prestadores de serviço",
    text: "Para quem precisa captar melhor, responder mais rápido e profissionalizar a operação.",
  },
];

const faqs = [
  {
    q: "Preciso contratar todas as soluções da MDS?",
    a: "Não. A MDS pode começar exatamente na frente que faz mais sentido para o momento atual do seu negócio e depois integrar outras soluções dentro da estratégia.",
  },
  {
    q: "A MDS vende serviços isolados?",
    a: "A lógica da MDS é trabalhar soluções dentro de um sistema. Mesmo quando você começa por uma única frente, o objetivo é conectar marketing, vendas e operação.",
  },
  {
    q: "Essas soluções são para negócios locais?",
    a: "Sim. O foco da MDS é ajudar PMEs e negócios locais a estruturarem marketing e vendas com mais organização, clareza e previsibilidade.",
  },
  {
    q: "Por onde normalmente vale começar?",
    a: "Depende do cenário. Tem empresa que precisa destravar aquisição, outras precisam converter melhor e muitas precisam organizar o comercial. A melhor escolha vem do diagnóstico.",
  },
  {
    q: "Posso falar com alguém para entender qual solução faz mais sentido?",
    a: "Sim. Você pode chamar no WhatsApp para receber uma análise inicial e entender qual caminho é mais inteligente para o seu negócio.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Soluções | Mundo Digital Soluções",
      url: `${siteUrl}/solucoes`,
      description:
        "Conheça as soluções da Mundo Digital Soluções para PMEs e negócios locais: Tráfego Pago, Social Media, Sites Inteligentes e CRM.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Soluções",
          item: `${siteUrl}/solucoes`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Soluções da Mundo Digital Soluções",
      itemListElement: solutions.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `${siteUrl}${item.href}`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function SolucoesPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[#374b89] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <a
              href="/#contato"
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
              href="/#contato"
              className="rounded-full bg-[#f5c84c] px-3 py-2 text-xs font-semibold text-[#2f3453] shadow-[0_12px_30px_-12px_rgba(245,200,76,0.85)] transition hover:brightness-95"
            >
              Consultoria
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#2f3453] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(55,75,137,0.45),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Hub de Soluções MDS
            </span>

            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              As soluções que conectam marketing, vendas e tecnologia para gerar
              crescimento previsível.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              A Mundo Digital Soluções não trabalha com ação solta. Cada frente
              existe para resolver uma etapa da jornada e, quando conectadas,
              viram um sistema comercial mais forte, claro e lucrativo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5517992822597?text=Ol%C3%A1%2C%20quero%20entender%20qual%20solu%C3%A7%C3%A3o%20da%20MDS%20faz%20mais%20sentido%20para%20o%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#f5c84c] px-6 py-3 text-center text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
              >
                Falar com especialista
              </a>
              <Link
                href="/metodo-mds"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Conhecer o Método MDS
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                Tráfego Pago
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                Social Media
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                Sites Inteligentes
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                CRM
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#41549a_0%,#2c3769_100%)] p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {solutions.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/10 p-5"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                        {item.tag}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/75">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/75">
                  Um ecossistema pensado para atrair, converter, organizar e vender
                  melhor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.value}
                className="rounded-[1.8rem] border border-[#dbe3ff] bg-[linear-gradient(180deg,#f8faff_0%,#eef2ff_100%)] p-6 shadow-[0_22px_60px_-32px_rgba(55,75,137,0.35)]"
              >
                <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#f5c84c]" />
                <p className="text-4xl font-bold tracking-tight text-[#2f3453]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Soluções
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Escolha a frente certa para o momento do seu negócio.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Cada solução resolve uma parte importante da jornada. Separadas, já
              ajudam. Conectadas, criam uma operação muito mais redonda.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.16)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-[#eef2ff] px-4 py-1.5 text-sm font-semibold text-[#374b89]">
                    {item.tag}
                  </span>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-[#374b89] transition hover:text-[#2f3453]"
                  >
                    Ver página →
                  </Link>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#2f3453]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f5c84c]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:border-[#2f3453] hover:bg-slate-50"
                  >
                    Explorar solução
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jornada" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Jornada
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Não é sobre fazer de tudo.
              <br />
              É sobre conectar o que dá resultado.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              O papel da MDS é tirar a empresa do marketing solto e levar para uma
              estrutura onde aquisição, conversão e operação comercial conversam.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {journey.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
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
              Para quem é
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Feito para empresas que precisam de mais direção e menos tentativa.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {perfis.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)] backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Diagnóstico
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453]">
              Ainda não sabe por onde começar?
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Esse é o cenário mais comum. Muita empresa sente que precisa vender
              mais, mas ainda não sabe se o gargalo está na aquisição, na conversão
              ou na organização do comercial.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Entenda qual frente faz mais sentido agora</li>
              <li>• Veja o que já precisa ser estruturado no curto prazo</li>
              <li>• Descubra como encaixar as soluções dentro do Método MDS</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Próximo passo
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#2f3453]">
              Fale com a MDS e receba uma direção inicial
            </h2>

            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/5517992822597?text=Ol%C3%A1%2C%20quero%20entender%20qual%20solu%C3%A7%C3%A3o%20da%20MDS%20faz%20mais%20sentido%20para%20o%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-xl bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#374b89]"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="/#contato"
                className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-50"
              >
                Ir para contato
              </a>

              <Link
                href="/metodo-mds"
                className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-50"
              >
                Ver o Método MDS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white">
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
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <summary className="cursor-pointer list-none text-left text-base font-semibold text-[#2f3453]">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-slate-400 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sua empresa não precisa continuar crescendo no improviso.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Escolha a solução certa para o momento do seu negócio e comece a
            estruturar marketing, vendas e operação com mais previsibilidade.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5517992822597?text=Ol%C3%A1%2C%20quero%20entender%20qual%20solu%C3%A7%C3%A3o%20da%20MDS%20faz%20mais%20sentido%20para%20o%20meu%20neg%C3%B3cio."
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
            >
              Falar com especialista
            </a>
            <Link
              href="/metodo-mds"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
            >
              Ver método
            </Link>
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
                  href="/#contato"
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
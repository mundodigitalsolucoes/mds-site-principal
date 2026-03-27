import type { Metadata } from "next";

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
    </main>
  );
}
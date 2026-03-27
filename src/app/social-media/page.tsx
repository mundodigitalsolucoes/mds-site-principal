import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media | Mundo Digital Soluções",
  description:
    "Gestão de redes sociais com estratégia, posicionamento, crescimento de Instagram e estrutura profissional para atrair clientes todos os dias.",
  alternates: {
    canonical: "https://mundodigitalsolucoes.com.br/social-media",
  },
  openGraph: {
    title: "Social Media | Mundo Digital Soluções",
    description:
      "Gerencie suas redes sociais como uma empresa de verdade e atraia clientes todos os dias.",
    url: "https://mundodigitalsolucoes.com.br/social-media",
    siteName: "Mundo Digital Soluções",
    locale: "pt_BR",
    type: "website",
  },
};

const pilares = [
  "Planejamento estratégico",
  "Conteúdo profissional",
  "Reels que alcançam",
  "Crescimento de seguidores",
  "Otimização do perfil",
  "Autoridade nas redes",
];

const bonus = [
  "Configuração completa de Instagram e Facebook",
  "Bio otimizada para conversão",
  "Destaques estratégicos",
  "Link da bio com mini site profissional",
  "Organização dos canais de aquisição",
];

const resultados = [
  {
    title: "Mais seguidores qualificados",
    text: "Crescimento com gente mais alinhada ao seu negócio.",
  },
  {
    title: "Mais engajamento real",
    text: "Conteúdo que gera conexão, não só vaidade.",
  },
  {
    title: "Mais autoridade no mercado",
    text: "Seu perfil passa mais confiança e profissionalismo.",
  },
  {
    title: "Perfil profissional de verdade",
    text: "Visual, mensagem e estrutura mais alinhados.",
  },
  {
    title: "Mais oportunidade de negócio",
    text: "Presença digital mais forte para abrir conversas.",
  },
];

const planos = [
  {
    title: "Presença",
    price: "R$ 497",
    subtitle: "ideal para começar",
    items: [
      "Posts mensais",
      "Design profissional",
      "Legenda estratégica",
      "Planejamento básico",
    ],
    featured: false,
  },
  {
    title: "Crescimento",
    price: "R$ 697",
    subtitle: "mais escolhido",
    items: [
      "Tudo do plano Presença",
      "Reels estratégicos",
      "Conteúdo com foco em crescimento",
      "Otimização de bio e destaques",
      "Direção de conteúdo",
    ],
    featured: true,
  },
  {
    title: "Autoridade",
    price: "R$ 897",
    subtitle: "mais estrutura e consistência",
    items: [
      "Tudo do plano Crescimento",
      "Estratégia ampliada",
      "Conteúdo recorrente",
      "Mais estrutura visual",
      "Operação social mais forte",
    ],
    featured: false,
  },
];

const depoimentos = [
  {
    name: "Ana Paula",
    role: "cliente MDS",
    text: "O perfil começou a ficar muito mais profissional. A percepção da marca mudou bastante.",
  },
  {
    name: "Carlos Henrique",
    role: "cliente MDS",
    text: "Antes era tudo no improviso. Agora existe direção, padrão visual e conteúdo com mais intenção.",
  },
  {
    name: "Mariana Silva",
    role: "cliente MDS",
    text: "Melhorou a imagem da empresa e também a forma como as pessoas começaram a chamar no direct.",
  },
];

const objecoes = [
  {
    title: "Não tenho tempo",
    text: "Você não precisa. A MDS organiza a rotina e transforma o perfil em uma operação mais consistente.",
  },
  {
    title: "Já tentei e não deu certo",
    text: "Sem estratégia e sem método, rede social vira esforço solto. O diferencial está na direção.",
  },
];

const faqs = [
  {
    q: "Em quanto tempo vou ver resultado?",
    a: "Depende do ponto atual do perfil, da constância e da clareza da oferta. Os primeiros sinais vêm com organização e consistência.",
  },
  {
    q: "Vocês criam todo o conteúdo?",
    a: "A estrutura pode incluir planejamento, design, direção de conteúdo, reels e otimização do perfil.",
  },
  {
    q: "Serve para qualquer nicho?",
    a: "Funciona melhor quando existe posicionamento claro, processo comercial e objetivo definido para a rede social.",
  },
  {
    q: "É só postar no Instagram?",
    a: "Não. A proposta é organizar presença digital, posicionamento e estrutura de aquisição, não só publicar conteúdo.",
  },
];

export default function SocialMediaPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[#374b89] selection:text-white">
      <section className="relative overflow-hidden bg-[#2f3453] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(55,75,137,0.45),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
            Instagram • posicionamento • crescimento
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Gerencie suas redes sociais como uma empresa de verdade e atraia
            clientes todos os dias
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Transformamos seu Instagram em uma máquina de crescimento,
            autoridade e vendas.
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
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
            Postar por postar não gera resultado.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Sem estratégia, seu Instagram vira apenas mais um perfil perdido no
            meio de milhares.
          </p>
        </div>
      </section>

      <section id="estrutura" className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center lg:px-8">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
            Você não precisa de posts. Precisa de um{" "}
            <span className="text-[#8da5ff]">sistema de crescimento digital.</span>
          </h2>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            {pilares.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium text-white/85"
              >
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5517992822597"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453]"
          >
            Falar com especialista
          </a>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Bônus exclusivo
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Você recebe uma estrutura profissional completa pronta para crescer
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {bonus.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Benefícios
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Resultados que você vai <span className="text-[#8da5ff]">conquistar</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {resultados.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/8 p-6 text-center"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453]"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </section>

      <section id="planos" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Escolha o plano ideal para o seu crescimento
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {planos.map((item) => (
              <div
                key={item.title}
                className={`relative rounded-[2rem] p-8 ${
                  item.featured
                    ? "border border-[#374b89] bg-[#2f3453] text-white shadow-[0_30px_80px_-35px_rgba(47,52,83,0.35)]"
                    : "border border-slate-200 bg-white text-[#2f3453] shadow-sm"
                }`}
              >
                {item.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#8da5ff] px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#2f3453]">
                    Mais escolhido
                  </span>
                )}

                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-4xl font-bold">{item.price}</p>
                <p className={`mt-2 text-sm ${item.featured ? "text-white/70" : "text-slate-500"}`}>
                  {item.subtitle}
                </p>

                <ul className={`mt-6 space-y-3 text-sm ${item.featured ? "text-white/80" : "text-slate-600"}`}>
                  {item.items.map((sub) => (
                    <li key={sub}>• {sub}</li>
                  ))}
                </ul>

                <a
                  href="https://social.mundodigitalsolucoes.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold ${
                    item.featured
                      ? "bg-white text-[#2f3453]"
                      : "bg-[#2f3453] text-white"
                  }`}
                >
                  Falar com especialista
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((item) => (
              <div
                key={item.text}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="text-sm text-[#f5b301]">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-[#2f3453]">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Receba um diagnóstico <span className="text-[#8da5ff]">gratuito</span> do seu Instagram
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Preencha e nossa equipe avalia como está seu perfil.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <input
                type="text"
                placeholder="WhatsApp com DDD"
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <input
                type="text"
                placeholder="@seuinstagram"
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
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

      <section className="bg-[#37416f] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ainda tem dúvidas?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {objecoes.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/8 p-7"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
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
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Seu Instagram pode ser uma máquina de clientes ou continuar parado.
            A decisão é sua.
          </h2>

          <a
            href="https://wa.me/5517992822597"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-[#8da5ff] px-6 py-3 text-sm font-semibold text-[#2f3453]"
          >
            Falar com especialista agora
          </a>
        </div>
      </section>
    </main>
  );
}
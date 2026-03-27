import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CRM de Marketing e Vendas | Mundo Digital Soluções",
  description:
    "Conheça o CRM da Mundo Digital Soluções para organizar atendimento, WhatsApp, automações, funil comercial e operação de marketing e vendas.",
  alternates: {
    canonical: "https://mundodigitalsolucoes.com.br/crm",
  },
  openGraph: {
    title: "CRM de Marketing e Vendas | Mundo Digital Soluções",
    description:
      "Um CRM para organizar atendimento, operação comercial, automações e relacionamento com mais clareza e conversão.",
    url: "https://mundodigitalsolucoes.com.br/crm",
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
  { value: "500+", label: "leads e contatos organizados com mais clareza" },
  { value: "98%", label: "mais visão sobre o pipeline comercial" },
  { value: "2M+", label: "possibilidades com automações e integrações" },
  { value: "4.9★", label: "experiência mais profissional no atendimento" },
];

const doresCol1 = [
  "Leads espalhados em vários WhatsApps",
  "Atendimento lento e desorganizado",
  "Falta de histórico das conversas",
  "Dificuldade para acompanhar follow-up",
];

const doresCol2 = [
  "Sem visão real do pipeline de vendas",
  "Equipe sem padrão de atendimento",
  "Perda de oportunidades por falta de processo",
  "Marketing e vendas sem conexão",
];

const recursos = [
  {
    title: "Pipeline comercial visual",
    text: "Acompanhe cada oportunidade por etapa, saiba o que está travando e dê ritmo ao processo comercial.",
  },
  {
    title: "WhatsApp e multiatendimento",
    text: "Centralize conversas, distribua atendimentos e deixe a operação menos dependente de celular pessoal.",
  },
  {
    title: "Funis e automações",
    text: "Crie rotinas automáticas para capturar, responder, nutrir, lembrar e mover oportunidades com mais agilidade.",
  },
  {
    title: "Histórico completo",
    text: "Tenha contexto das conversas, tarefas, observações e movimentações para vender com mais inteligência.",
  },
  {
    title: "Gestão da equipe",
    text: "Mais controle sobre atendimentos, tarefas, responsáveis e performance da operação comercial.",
  },
  {
    title: "Integrações estratégicas",
    text: "Conecte formulários, WhatsApp, n8n, campanhas e outros pontos da jornada em um só sistema.",
  },
];

const perfis = [
  {
    title: "Negócios locais",
    text: "Para operações que precisam vender mais sem virar bagunça no atendimento.",
  },
  {
    title: "Agências e consultorias",
    text: "Para organizar leads, propostas, follow-up e relacionamento com mais profissionalismo.",
  },
  {
    title: "Prestadores de serviço",
    text: "Para centralizar contatos, melhorar resposta e não perder oportunidade quente.",
  },
  {
    title: "Equipes comerciais",
    text: "Para ter rotina, processo, visibilidade e menos dependência de memória ou planilha.",
  },
  {
    title: "Operações com tráfego pago",
    text: "Para conectar geração de demanda com atendimento e fechamento.",
  },
  {
    title: "Empresas em crescimento",
    text: "Para sair do improviso e entrar em uma operação mais previsível.",
  },
];

const comparativos = [
  {
    item: "WhatsApp centralizado",
    mds: "Sim",
    comum: "Limitado",
    planilha: "Não",
    soCelular: "Não",
  },
  {
    item: "Pipeline visual",
    mds: "Sim",
    comum: "Parcial",
    planilha: "Manual",
    soCelular: "Não",
  },
  {
    item: "Histórico organizado",
    mds: "Sim",
    comum: "Parcial",
    planilha: "Fraco",
    soCelular: "Solto",
  },
  {
    item: "Automação",
    mds: "Sim",
    comum: "Depende",
    planilha: "Não",
    soCelular: "Não",
  },
  {
    item: "Gestão de equipe",
    mds: "Sim",
    comum: "Parcial",
    planilha: "Limitado",
    soCelular: "Não",
  },
  {
    item: "Integração com operação",
    mds: "Sim",
    comum: "Depende",
    planilha: "Não",
    soCelular: "Não",
  },
];

const depoimentos = [
  {
    text: "O CRM trouxe mais organização no atendimento e clareza no que precisava acontecer para vender melhor.",
    name: "Cliente MDS",
  },
  {
    text: "Antes ficava tudo espalhado. Depois do CRM, a operação ficou muito mais profissional.",
    name: "Cliente MDS",
  },
  {
    text: "Conseguimos acompanhar melhor os leads, responder mais rápido e perder menos oportunidades.",
    name: "Cliente MDS",
  },
];

const faqs = [
  {
    q: "Esse CRM serve para negócio local?",
    a: "Sim. Ele faz muito sentido para negócios locais que precisam organizar atendimento, leads, follow-up e rotina comercial.",
  },
  {
    q: "Funciona com WhatsApp?",
    a: "Sim. A proposta é centralizar atendimento e transformar o WhatsApp em uma operação mais profissional.",
  },
  {
    q: "Tem automação?",
    a: "Sim. O CRM pode ser conectado com automações para agilizar resposta, organização e jornada comercial.",
  },
  {
    q: "Tem teste grátis?",
    a: "Sim. O ideal é usar a página de trial para experimentar a estrutura e entender o encaixe no seu negócio.",
  },
  {
    q: "Preciso de equipe grande para usar?",
    a: "Não. Ele ajuda tanto operações pequenas quanto equipes maiores, justamente porque organiza o processo.",
  },
];

export default function CRMPage() {
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
              CRM de Marketing e Vendas
            </span>

            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              O CRM que seu negócio precisa para vender e atender melhor.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Organize WhatsApp, atendimento, funil comercial, automações e
              relacionamento em uma operação mais clara, rápida e profissional.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://assinar.mundodigitalsolucoes.com.br/trial"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#f5c84c] px-6 py-3 text-center text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
              >
                Teste grátis por 7 dias
              </a>
              <a
                href="https://planos.mundodigitalsolucoes.com.br/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Ver planos
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/65">
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                WhatsApp centralizado
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Pipeline visual
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Automações
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#41549a_0%,#2c3769_100%)] p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs text-white/60">Leads</p>
                    <p className="mt-2 text-2xl font-bold text-white">128</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs text-white/60">Atendimentos</p>
                    <p className="mt-2 text-2xl font-bold text-white">42</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs text-white/60">Vendas</p>
                    <p className="mt-2 text-2xl font-bold text-white">19</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm font-semibold text-white">Pipeline</p>
                    <div className="mt-4 space-y-3">
                      {["Novo lead", "Qualificado", "Proposta", "Fechamento"].map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/10 bg-white/8 px-3 py-2 text-sm text-white/80"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm font-semibold text-white">Rotina</p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Responder leads quentes",
                        "Follow-up automático",
                        "Distribuir atendimentos",
                        "Atualizar estágio",
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
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/75">
                  Um CRM para transformar atendimento solto em operação comercial.
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
              <div key={item.value} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-3xl font-bold text-[#2f3453]">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Dor real
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Cansado de perder leads por falta de organização?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {doresCol1.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {doresCol2.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Recursos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Tudo que você precisa para vender mais e atender melhor.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {recursos.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.16)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] font-bold text-[#374b89]">
                  +
                </div>
                <h3 className="text-xl font-semibold text-[#2f3453]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="para-quem" className="bg-[#2f3453] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Para quem é o CRM
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Feito para operações que precisam de mais processo e menos bagunça.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {perfis.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)] backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Comparativo
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Por que o MDS CRM supera o improviso?
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.16)]">
            <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-[#2f3453]">
              <div className="px-4 py-4">Recurso</div>
              <div className="px-4 py-4 text-center">MDS CRM</div>
              <div className="px-4 py-4 text-center">CRM comum</div>
              <div className="px-4 py-4 text-center">Planilha</div>
              <div className="px-4 py-4 text-center">Só WhatsApp</div>
            </div>

            {comparativos.map((item) => (
              <div
                key={item.item}
                className="grid grid-cols-5 border-b border-slate-100 text-sm last:border-b-0"
              >
                <div className="px-4 py-4 font-medium text-slate-700">{item.item}</div>
                <div className="px-4 py-4 text-center font-semibold text-emerald-600">{item.mds}</div>
                <div className="px-4 py-4 text-center text-slate-500">{item.comum}</div>
                <div className="px-4 py-4 text-center text-slate-500">{item.planilha}</div>
                <div className="px-4 py-4 text-center text-slate-500">{item.soCelular}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Prova social
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((item) => (
              <div
                key={item.text}
                className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <div className="text-sm text-[#f5b301]">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                <p className="mt-6 text-sm font-semibold text-[#2f3453]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="bg-[#232b55] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Planos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Escolha o plano ideal para o seu negócio.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-[#2f3453] p-8">
              <p className="text-sm font-semibold text-white/60">Starter</p>
              <p className="mt-4 text-4xl font-bold text-white">R$ 49,97</p>
              <p className="mt-2 text-sm text-white/65">ideal para começar</p>
              <a
                href="https://planos.mundodigitalsolucoes.com.br/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2f3453]"
              >
                Ver detalhes
              </a>
            </div>

            <div className="relative rounded-[2rem] border border-[#f5c84c] bg-white p-8 text-[#2f3453] shadow-[0_30px_80px_-35px_rgba(245,200,76,0.55)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#f5c84c] px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#2f3453]">
                Mais escolhido
              </span>
              <p className="text-sm font-semibold text-slate-500">Professional</p>
              <p className="mt-4 text-4xl font-bold">R$ 197,00</p>
              <p className="mt-2 text-sm text-slate-500">mais estrutura e performance</p>
              <a
                href="https://assinar.mundodigitalsolucoes.com.br/trial"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white"
              >
                Testar grátis
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#2f3453] p-8">
              <p className="text-sm font-semibold text-white/60">Enterprise</p>
              <p className="mt-4 text-4xl font-bold text-white">R$ 397,00</p>
              <p className="mt-2 text-sm text-white/65">mais operação e escala</p>
              <a
                href="https://planos.mundodigitalsolucoes.com.br/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2f3453]"
              >
                Ver detalhes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Material gratuito
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453]">
              Guia completo de CRM para negócios locais.
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Um conteúdo para mostrar como organizar atendimento, leads, follow-up e rotina comercial com mais clareza.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Como parar de perder lead por desorganização</li>
              <li>• Como usar CRM com mais inteligência</li>
              <li>• Como integrar marketing e vendas</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Captura
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#2f3453]">
              Receba o material gratuitamente
            </h2>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <input
                type="text"
                placeholder="WhatsApp"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#374b89]"
              >
                Quero receber o material
              </button>
            </form>
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
                    <span className="text-slate-400 transition group-open:rotate-45">+</span>
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
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
            CTA final
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Comece hoje mesmo. Sua operação não precisa continuar no improviso.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Teste o CRM, veja os planos e transforme atendimento e vendas em um sistema de verdade.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://assinar.mundodigitalsolucoes.com.br/trial"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
            >
              Testar grátis
            </a>
            <a
              href="https://planos.mundodigitalsolucoes.com.br/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
            >
              Ver planos
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
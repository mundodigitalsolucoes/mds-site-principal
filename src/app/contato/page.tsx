import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato | Mundo Digital Soluções",
  description:
    "Fale com a Mundo Digital Soluções e solicite uma consultoria gratuita para marketing, vendas, CRM, tráfego e sites inteligentes.",
};

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
  { label: "Conteúdo", href: "/metodo-mds" },
  { label: "Contato", href: "/contato" },
];

const diferenciais = [
  "Diagnóstico estratégico da presença digital",
  "Visão integrada de marketing e vendas",
  "Plano inicial de crescimento previsível",
  "Direcionamento para tráfego, CRM, social e automações",
];

export default function ContatoPage() {
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
                  className={`text-sm font-medium transition hover:text-[#2f3453] ${
                    item.href === "/contato"
                      ? "text-[#2f3453]"
                      : "text-slate-600"
                  }`}
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
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
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
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f5c84c] px-3 py-2 text-xs font-semibold text-[#2f3453] shadow-[0_12px_30px_-12px_rgba(245,200,76,0.85)] transition hover:brightness-95"
            >
              Contato
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
              href="/metodo-mds"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Método MDS
            </Link>
            <Link
              href="/trafego"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Gestão de Dados
            </Link>
            <Link
              href="/social-media"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Social Media
            </Link>
            <Link
              href="/sites-inteligentes"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Sites
            </Link>
            <Link
              href="/crm"
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              CRM
            </Link>
            <Link
              href="/contato"
              className="whitespace-nowrap rounded-full border border-[#2f3453] bg-[#2f3453] px-4 py-2 text-sm font-medium text-white"
            >
              Contato
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#2f3453] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(55,75,137,0.45),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Fale com a Mundo Digital Soluções
            </span>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Vamos desenhar o próximo passo do seu crescimento.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Se você quer organizar marketing, vendas, tráfego, CRM, social
              media ou automações, essa página é a porta de entrada.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#f5c84c] px-6 py-3 text-center text-sm font-semibold text-[#2f3453] shadow-[0_18px_45px_-18px_rgba(245,200,76,0.95)] transition hover:brightness-95"
              >
                Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@mundodigitalsolucoes.com.br"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(55,75,137,0.28)_100%)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                O que você recebe
              </p>

              <div className="mt-6 grid gap-4">
                {diferenciais.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-white/80">
                Atendimento direto, visão estratégica e linguagem de negócio.
                Sem fumaça. Sem enfeite. Só direção clara.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-3 lg:px-8">
          <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              WhatsApp
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#2f3453]">
              Atendimento rápido
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Ideal para tirar dúvidas, pedir orçamento e acelerar a conversa.
            </p>
            <a
              href="https://wa.me/5517992822597"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#374b89]"
            >
              (17) 99282-2597
            </a>
          </div>

          <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              E-mail
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#2f3453]">
              Contato comercial
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Para propostas, alinhamentos e solicitações mais detalhadas.
            </p>
            <a
              href="mailto:contato@mundodigitalsolucoes.com.br"
              className="mt-8 inline-flex break-all rounded-full bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#374b89]"
            >
              contato@mundodigitalsolucoes.com.br
            </a>
          </div>

          <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Base
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#2f3453]">
              Onde estamos
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Atendemos negócios locais e empresas que querem vender mais com
              estrutura.
            </p>
            <div className="mt-8 space-y-2 text-sm font-medium text-slate-700">
              <p>São José do Rio Preto/SP</p>
              <p>CNPJ: 58.694.408/0001-90</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#374b89]">
              Como podemos te ajudar
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              Escolha a frente que faz mais sentido para o teu momento.
            </h2>

            <div className="mt-10 grid gap-4">
              {[
                "Estruturar marketing e vendas",
                "Melhorar presença digital e autoridade",
                "Organizar atendimento com CRM",
                "Criar campanhas de tráfego pago",
                "Montar sites e páginas de alta conversão",
                "Conectar operação com automações",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#2f3453_0%,#374b89_100%)] p-8 text-white shadow-[0_30px_80px_-30px_rgba(47,52,83,0.3)]">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Próximo passo
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Bora abrir a conversa da forma mais rápida.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Hoje o caminho mais forte é WhatsApp e e-mail. Na próxima etapa a
              gente pluga formulário, CRM e automações por aqui.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:contato@mundodigitalsolucoes.com.br"
                className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Enviar e-mail
              </a>
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
                <Link href="/contato" className="transition hover:text-white">
                  Contato
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
                  href="https://wa.me/5517992822597"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-slate-100"
                >
                  Consultoria gratuita
                </a>

                <a
                  href="mailto:contato@mundodigitalsolucoes.com.br"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between">
              <p>© 2026 Mundo Digital Soluções. Todos os direitos reservados.</p>
              <p>Marketing, vendas, automação e CRM em um sistema mais inteligente.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
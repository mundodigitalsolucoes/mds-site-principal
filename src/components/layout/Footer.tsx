import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
              <Link
                href="/contato"
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
  );
}
import Image from "next/image";
import Link from "next/link";

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
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  return (
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

          <Link
            href="/contato"
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
            href="/contato"
            className="rounded-full bg-[#f5c84c] px-3 py-2 text-xs font-semibold text-[#2f3453] shadow-[0_12px_30px_-12px_rgba(245,200,76,0.85)] transition hover:brightness-95"
          >
            Consultoria
          </Link>
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

          <Link
            href="/contato"
            className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
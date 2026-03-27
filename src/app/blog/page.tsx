import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getAllCategories, getAllPosts, getFeaturedPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Mundo Digital Soluções",
  description:
    "Conteúdos sobre marketing, vendas, sites inteligentes e crescimento previsível para pequenas e médias empresas.",
};

const menuItems = [
  { label: "Home", href: "/#topo" },
  { label: "Método MDS", href: "/#metodo" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "CRM", href: "/#crm" },
  { label: "Cases", href: "/#cases" },
  { label: "Conteúdos", href: "/#conteudos" },
  { label: "Contato", href: "/#contato" },
];

type BlogPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const query = (params?.q ?? "").trim().toLowerCase();

  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const featuredPost = !query ? getFeaturedPost() : undefined;

  const filteredPosts = allPosts.filter((post) => {
    const haystack = [
      post.title,
      post.excerpt,
      post.category,
      post.author,
      ...(Array.isArray(post.tags) ? post.tags : []),
      post.content,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  const postsToShow = query ? filteredPosts : allPosts;
  const gridPosts = featuredPost
    ? postsToShow.filter((post) => post.slug !== featuredPost.slug)
    : postsToShow;

  return (
    <main
      id="topo"
      className="bg-white text-slate-900 selection:bg-[#374b89] selection:text-white"
    >
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/#topo" className="flex items-center gap-3">
            <Image
              src="/logo-mundo-digital.png"
              alt="Mundo Digital Soluções"
              width={320}
              height={64}
              className="h-auto w-[170px] sm:w-[220px] lg:w-[260px]"
              priority
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-[#2f3453]"
              >
                {item.label}
              </a>
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

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#374b89]/20 bg-[#374b89]/10 px-4 py-1 text-sm font-semibold text-[#374b89]">
              Blog MDS
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#2f3453] md:text-5xl">
              Conteúdo estratégico para empresas que querem crescer com método
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Artigos sobre marketing, vendas, sites inteligentes,
              posicionamento, aquisição e crescimento previsível para pequenas e
              médias empresas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/metodo-mds"
                className="inline-flex items-center justify-center rounded-xl bg-[#374b89] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Conhecer o Método MDS
              </Link>

              <Link
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#374b89] hover:text-[#374b89]"
              >
                Falar no WhatsApp
              </Link>
            </div>

            <form
              action="/blog"
              method="GET"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                name="q"
                defaultValue={params?.q ?? ""}
                placeholder="Buscar matéria, tema, palavra-chave..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#374b89]"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Buscar
              </button>

              {query && (
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#374b89] hover:text-[#374b89]"
                >
                  Limpar
                </Link>
              )}
            </form>
          </div>
        </div>
      </section>

      {!query && featuredPost && (
        <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-[#2f3453]">
              Post em destaque
            </h2>
          </div>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid md:grid-cols-2">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="relative block min-h-[280px] bg-slate-100"
              >
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </Link>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-[#374b89]/10 px-3 py-1 font-semibold text-[#374b89]">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-500">
                    {featuredPost.publishedAt}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-[#2f3453]">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="hover:text-[#374b89]"
                  >
                    {featuredPost.title}
                  </Link>
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center rounded-xl bg-[#2f3453] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Ler matéria completa
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-4 md:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#2f3453]">
            {query ? "Resultado da busca" : "Artigos recentes"}
          </h2>
          <p className="mt-2 text-slate-600">
            {query
              ? `${postsToShow.length} resultado(s) para "${params?.q ?? ""}"`
              : "Conteúdo prático para transformar presença digital em crescimento real."}
          </p>
        </div>

        {postsToShow.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
            Nenhum artigo encontrado.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block h-56 bg-slate-100"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </Link>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-[#374b89]/10 px-3 py-1 font-semibold text-[#374b89]">
                      {post.category}
                    </span>
                    <span className="text-slate-500">{post.readingTime}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#2f3453]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#374b89]"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-[#374b89] hover:text-[#2f3453]"
                    >
                      Ler artigo
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-6 pb-16 md:px-8">
        <div className="rounded-3xl bg-[#2f3453] px-8 py-10 text-white md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Crescimento previsível não é sorte. É método.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Se você quer estruturar marketing e vendas com mais clareza,
              processo e previsibilidade, fale com a Mundo Digital Soluções.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/consultoria-gratuita"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:opacity-90"
              >
                Agendar consultoria gratuita
              </Link>

              <Link
                href="https://wa.me/5517992822597"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Falar no WhatsApp
              </Link>
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
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getAllCategories, getAllPosts, getFeaturedPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Mundo Digital Soluções",
  description:
    "Conteúdos sobre marketing, vendas, sites inteligentes e crescimento previsível para pequenas e médias empresas.",
};

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
                href="/contato"
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
    </main>
  );
}
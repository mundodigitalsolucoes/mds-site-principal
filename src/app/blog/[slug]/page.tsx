import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const BORA_VENDER_SETEMBRO_SLUG = "3-datas-de-setembro-para-vender-mais";
const BORA_VENDER_SETEMBRO_AUDIO = "/audios/blog/bora-vender-mais-setembro-2026.MP3";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function formatInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => part.startsWith("**") && part.endsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part);
}

function renderAudioPlayer() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-4 md:px-8" aria-label="Ouça o Guia Bora Vender+">
      <div className="overflow-hidden rounded-3xl bg-[#2f3453] text-white shadow-xl ring-1 ring-[#374b89]/20">
        <div className="relative p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#374b89]/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-44 w-44 rounded-full bg-[#e0ae4f]/10 blur-3xl" />
          <div className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e0ae4f] text-[#202640] shadow-lg shadow-black/10">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.57-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" /></svg>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f3c96e]">Bora Vender+ em áudio</span>
                  <h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">Ouça o Guia completo</h2>
                  <p className="mt-1 text-sm text-slate-300">Ouça enquanto trabalha, dirige ou planeja sua próxima campanha.</p>
                </div>
              </div>
              <a href={BORA_VENDER_SETEMBRO_AUDIO} download className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Baixar áudio
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4">
              <audio controls preload="metadata" className="block h-12 w-full" aria-label="Áudio do Guia Bora Vender+ Setembro 2026">
                <source src={BORA_VENDER_SETEMBRO_AUDIO} type="audio/mpeg" />
                Seu navegador não suporta reprodução de áudio.
              </audio>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span>Guia completo em áudio</span>
              <span>MP3 • disponível para download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderGuideBanner(index: number) {
  return (
    <section key={index} id="baixar-guia" className="my-10 overflow-hidden rounded-3xl bg-[#2f3453] text-white shadow-lg ring-1 ring-[#374b89]/20">
      <div className="grid gap-7 p-6 sm:p-8 md:grid-cols-[260px_1fr] md:items-center md:gap-10 md:p-10">
        <div className="mx-auto w-full max-w-[260px]">
          <img src="/images/blog/bora-vender-setembro-2026-ebook.png?v=1" alt="Mockup do Guia Bora Vender+ Setembro 2026" width="260" height="347" className="block h-auto w-full object-contain drop-shadow-2xl" />
        </div>
        <div>
          <span className="inline-flex rounded-full border border-[#e0ae4f]/40 bg-[#e0ae4f]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f3c96e]">Guia gratuito • Setembro 2026</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Leve as 3 Datas de Ouro para o seu negócio</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">Baixe o Guia Bora Vender+ com as campanhas de setembro organizadas em formato de playbook: Método MDS, exemplos, checklists, prompts, divulgação e tracking com TAGs.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-200"><span className="rounded-full border border-white/15 px-3 py-1.5">23 páginas</span><span className="rounded-full border border-white/15 px-3 py-1.5">3 campanhas práticas</span><span className="rounded-full border border-white/15 px-3 py-1.5">Método MDS aplicado</span></div>
          <div className="mt-7"><a href="/ebooks/guia-bora-vender-setembro-2026.pdf" download className="inline-flex items-center justify-center rounded-xl bg-[#e0ae4f] px-6 py-3.5 text-sm font-bold text-[#202640] transition hover:-translate-y-0.5 hover:brightness-105">Baixar o Guia gratuitamente</a></div>
          <p className="mt-3 text-xs text-slate-400">PDF gratuito • leitura otimizada para celular</p>
        </div>
      </div>
    </section>
  );
}

function renderContentBlocks(content: string, slug: string) {
  const blocks = content.trim().split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
  return blocks.map((block, index) => {
    if (slug === BORA_VENDER_SETEMBRO_SLUG && block === "**[DOWNLOAD DO GUIA SERÁ INSERIDO AQUI]**") return renderGuideBanner(index);
    if (block.startsWith("## ")) return <h2 key={index} className="mt-10 text-2xl font-bold tracking-tight text-[#2f3453] md:text-3xl">{formatInlineMarkdown(block.replace(/^## /, ""))}</h2>;
    if (block.startsWith("### ")) return <h3 key={index} className="mt-8 text-xl font-bold text-[#2f3453] md:text-2xl">{formatInlineMarkdown(block.replace(/^### /, ""))}</h3>;
    const lines = block.split("\n").map((line) => line.trim());
    if (lines.every((line) => line.startsWith("- "))) return <ul key={index} className="mt-5 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700 marker:text-[#374b89]">{lines.map((line, lineIndex) => <li key={lineIndex}>{formatInlineMarkdown(line.replace(/^- /, ""))}</li>)}</ul>;
    return <p key={index} className="mt-5 text-base leading-8 text-slate-700">{formatInlineMarkdown(block.replace(/\n/g, " "))}</p>;
  });
}

export async function generateStaticParams() { return getAllPosts().map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params; const post = getPostBySlug(slug);
  if (!post) return { title: "Artigo não encontrado | Mundo Digital Soluções" };
  return { title: post.seoTitle, description: post.seoDescription, openGraph: { title: post.seoTitle, description: post.seoDescription, images: [post.coverImage], type: "article" } };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; const post = getPostBySlug(slug); if (!post) notFound();
  const relatedPosts = getRelatedPosts(post.slug, post.category, 3); const contentBlocks = renderContentBlocks(post.content, post.slug); const middleIndex = Math.ceil(contentBlocks.length / 2); const showSecondaryCta = post.slug !== BORA_VENDER_SETEMBRO_SLUG; const showAudioPlayer = post.slug === BORA_VENDER_SETEMBRO_SLUG;
  return (
    <main id="topo" className="bg-white text-slate-900 selection:bg-[#374b89] selection:text-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white"><div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16"><nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500"><Link href="/" className="hover:text-[#374b89]">Início</Link><span>/</span><Link href="/blog" className="hover:text-[#374b89]">Blog</Link><span>/</span><span className="text-slate-700">{post.category}</span></nav><span className="inline-flex rounded-full bg-[#374b89]/10 px-4 py-1 text-sm font-semibold text-[#374b89]">{post.category}</span><h1 className="mt-5 text-4xl font-bold tracking-tight text-[#2f3453] md:text-5xl">{post.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p><div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500"><div className="flex items-center gap-3">{post.authorImage && <Image src={post.authorImage} alt={post.author} width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-2 ring-[#374b89]/10" />}<div className="flex flex-col leading-tight"><span className="font-semibold text-[#2f3453]">{post.author}</span><span className="text-xs text-slate-500">Especialista em marketing e vendas</span></div></div><span className="hidden text-slate-300 md:inline">•</span><span>{formatDate(post.publishedAt)}</span><span className="text-slate-300">•</span><span>{post.readingTime} de leitura</span></div></div></section>
      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8"><div className="relative h-[240px] overflow-hidden rounded-3xl bg-slate-100 md:h-[420px]"><Image src={post.coverImage} alt={post.title} fill priority className="object-cover" /></div></section>
      {showAudioPlayer && renderAudioPlayer()}
      <article className="mx-auto max-w-4xl px-6 pb-8 md:px-8"><div className="max-w-none">{contentBlocks.slice(0, middleIndex)}</div>{post.cta && <div className="my-10 rounded-3xl bg-[#2f3453] px-8 py-10 text-white"><h2 className="text-2xl font-bold">{post.cta.title}</h2><p className="mt-3 text-base leading-7 text-slate-200">{post.cta.description}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={post.cta.primaryHref} className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:opacity-90">{post.cta.primaryLabel}</Link>{showSecondaryCta && post.cta.secondaryLabel && post.cta.secondaryHref && <Link href={post.cta.secondaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">{post.cta.secondaryLabel}</Link>}</div></div>}<div className="max-w-none">{contentBlocks.slice(middleIndex)}</div></article>
      {post.cta && <section id="contato" className="mx-auto max-w-4xl px-6 py-8 md:px-8"><div className="rounded-3xl border border-slate-200 bg-slate-50 px-8 py-10"><h2 className="text-2xl font-bold text-[#2f3453]">{post.cta.title}</h2><p className="mt-3 text-base leading-7 text-slate-600">{post.cta.description}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={post.cta.primaryHref} className="inline-flex items-center justify-center rounded-xl bg-[#374b89] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">{post.cta.primaryLabel}</Link>{showSecondaryCta && post.cta.secondaryLabel && post.cta.secondaryHref && <Link href={post.cta.secondaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#374b89] hover:text-[#374b89]">{post.cta.secondaryLabel}</Link>}</div></div></section>}
      {relatedPosts.length > 0 && <section className="mx-auto max-w-7xl px-6 py-12 md:px-8"><div className="mb-8"><h2 className="text-2xl font-bold text-[#2f3453]">Continue lendo</h2><p className="mt-2 text-slate-600">Mais conteúdos da mesma linha para aprofundar o tema.</p></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{relatedPosts.map((relatedPost) => <article key={relatedPost.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"><Link href={`/blog/${relatedPost.slug}`} className="relative block h-56 bg-slate-100"><Image src={relatedPost.coverImage} alt={relatedPost.title} fill className="object-cover" /></Link><div className="p-6"><span className="rounded-full bg-[#374b89]/10 px-3 py-1 text-sm font-semibold text-[#374b89]">{relatedPost.category}</span><h3 className="mt-4 text-xl font-bold leading-snug text-[#2f3453]"><Link href={`/blog/${relatedPost.slug}`} className="hover:text-[#374b89]">{relatedPost.title}</Link></h3><p className="mt-3 text-sm leading-6 text-slate-600">{relatedPost.excerpt}</p><div className="mt-5"><Link href={`/blog/${relatedPost.slug}`} className="text-sm font-semibold text-[#374b89] hover:text-[#2f3453]">Ler artigo</Link></div></div></article>)}</div></section>}
    </main>
  );
}
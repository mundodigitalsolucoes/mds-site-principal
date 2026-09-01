"use client";

import { FormEvent, useEffect, useState } from "react";

type Variant = "audio" | "guide" | "featured";
type MaterialRequested = "ebook" | "audio_download";

type BoraVenderLeadGateProps = {
  variant: Variant;
};

const STORAGE_KEY = "mds_bora_vender_setembro_2026_unlocked";
const UNLOCK_EVENT = "mds-bora-vender-unlocked";
const AUDIO_URL = "/audios/blog/bora-vender-mais-setembro-2026.MP3";
const GUIDE_URL = "/ebooks/guia-bora-vender-setembro-2026.pdf";
const CAMPAIGN = "bora_vender_mais_setembro_2026";

function getTracking() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "gbraid", "wbraid"];
  return keys.reduce<Record<string, string>>((acc, key) => {
    const value = params.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}

function startDownload(url: string, filename: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function trackBlogLead(material: MaterialRequested) {
  if (typeof window === "undefined") return;

  const eventParams = {
    source_area: "blog",
    campaign: CAMPAIGN,
    material,
    content_slug: window.location.pathname,
  };

  const analyticsWindow = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  };

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", "blog_generate_lead", eventParams);
    return;
  }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({
    event: "blog_generate_lead",
    ...eventParams,
  });
}

export default function BoraVenderLeadGate({ variant }: BoraVenderLeadGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showFeaturedPlayer, setShowFeaturedPlayer] = useState(false);
  const [requestedMaterial, setRequestedMaterial] = useState<MaterialRequested>(variant === "audio" ? "audio_download" : "ebook");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    const syncUnlock = () => setUnlocked(localStorage.getItem(STORAGE_KEY) === "1");
    syncUnlock();
    window.addEventListener(UNLOCK_EVENT, syncUnlock);
    return () => window.removeEventListener(UNLOCK_EVENT, syncUnlock);
  }, []);

  function openCapture(material: MaterialRequested) {
    setRequestedMaterial(material);
    setError("");
    setShowForm(true);
  }

  function downloadRequestedMaterial(material: MaterialRequested) {
    if (material === "audio_download") {
      startDownload(AUDIO_URL, "bora-vender-mais-setembro-2026.mp3");
    } else {
      startDownload(GUIDE_URL, "guia-bora-vender-setembro-2026.pdf");
    }
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/leads/bora-vender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          material_requested: requestedMaterial,
          campaign: CAMPAIGN,
          source: "site",
          landing_page: window.location.href,
          referrer: document.referrer || null,
          ...getTracking(),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Não foi possível liberar o material agora.");
      }

      localStorage.setItem(STORAGE_KEY, "1");
      window.dispatchEvent(new Event(UNLOCK_EVENT));
      setUnlocked(true);
      setShowForm(false);
      trackBlogLead(requestedMaterial);
      downloadRequestedMaterial(requestedMaterial);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível liberar o material agora.");
    } finally {
      setLoading(false);
    }
  }

  const form = showForm && !unlocked ? (
    <form onSubmit={submitLead} className={variant === "featured" ? "mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4" : "mt-6 rounded-2xl border border-white/15 bg-white/[0.08] p-5"}>
      <div className="mb-4">
        <h3 className={`text-lg font-bold ${variant === "featured" ? "text-[#2f3453]" : "text-white"}`}>Preencha para baixar agora</h3>
        <p className={`mt-1 text-sm ${variant === "featured" ? "text-slate-600" : "text-slate-300"}`}>É rápido: nome, WhatsApp e e-mail. Ao enviar, o download começa automaticamente.</p>
      </div>

      <div className={`grid gap-3 ${variant === "featured" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
        <input required minLength={2} value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className={`rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#e0ae4f] ${variant === "featured" ? "sm:col-span-2" : ""}`} />
        <input required type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="WhatsApp com DDD" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#e0ae4f]" />
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu melhor e-mail" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#e0ae4f]" />
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className={`max-w-xl text-[11px] leading-5 ${variant === "featured" ? "text-slate-500" : "text-slate-400"}`}>Ao continuar, você autoriza a MDS a usar esses dados para entregar o material e enviar comunicações relacionadas ao conteúdo. Você pode solicitar a exclusão dos dados a qualquer momento.</p>
        <button disabled={loading} type="submit" className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-[#e0ae4f] px-5 py-3 text-sm font-bold text-[#202640] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">{loading ? "Preparando download..." : requestedMaterial === "audio_download" ? "Baixar MP3 agora" : "Baixar Guia agora"}</button>
      </div>
      {error && <p className={`mt-3 text-sm font-medium ${variant === "featured" ? "text-red-600" : "text-red-200"}`}>{error}</p>}
    </form>
  ) : null;

  if (variant === "featured") {
    return (
      <div className="mt-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {unlocked ? (
            <a href={GUIDE_URL} download className="inline-flex w-full items-center justify-center rounded-xl bg-[#e0ae4f] px-5 py-3 text-sm font-bold text-[#202640] transition hover:-translate-y-0.5 hover:brightness-105">Baixar Guia grátis</a>
          ) : (
            <button type="button" onClick={() => openCapture("ebook")} className="inline-flex w-full items-center justify-center rounded-xl bg-[#e0ae4f] px-5 py-3 text-sm font-bold text-[#202640] transition hover:-translate-y-0.5 hover:brightness-105">Baixar Guia grátis</button>
          )}
          <button type="button" onClick={() => setShowFeaturedPlayer((value) => !value)} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#374b89]/20 bg-[#374b89]/10 px-5 py-3 text-sm font-semibold text-[#2f3453] transition hover:bg-[#374b89]/15"><span aria-hidden="true">▶</span>Ouvir Guia</button>
        </div>

        {showFeaturedPlayer && (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <audio controls preload="metadata" className="block h-12 w-full" aria-label="Áudio do Guia Bora Vender+ Setembro 2026"><source src={AUDIO_URL} type="audio/mpeg" />Seu navegador não suporta reprodução de áudio.</audio>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-slate-500">Ouvir é livre. O download do MP3 requer cadastro.</span>
              {unlocked ? <a href={AUDIO_URL} download className="text-sm font-semibold text-[#374b89] hover:text-[#2f3453]">Baixar MP3</a> : <button type="button" onClick={() => openCapture("audio_download")} className="text-left text-sm font-semibold text-[#374b89] hover:text-[#2f3453] sm:text-right">Baixar MP3</button>}
            </div>
          </div>
        )}
        {form}
      </div>
    );
  }

  if (variant === "audio") {
    return (
      <section id="ouvir-guia" className="mx-auto max-w-4xl px-6 pb-4 md:px-8" aria-label="Ouça o Guia Bora Vender+">
        <div className="overflow-hidden rounded-3xl bg-[#2f3453] text-white shadow-xl ring-1 ring-[#374b89]/20">
          <div className="relative p-6 sm:p-8">
            <div className="relative">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e0ae4f] text-[#202640] shadow-lg shadow-black/10"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.57-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" /></svg></div>
                  <div><span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f3c96e]">Bora Vender+ em áudio</span><h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">Ouça o Guia completo</h2><p className="mt-1 text-sm text-slate-300">Ouça enquanto trabalha, dirige ou planeja sua próxima campanha.</p></div>
                </div>
                {unlocked ? <a href={AUDIO_URL} download className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">Baixar MP3</a> : <button type="button" onClick={() => openCapture("audio_download")} className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">Baixar MP3</button>}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"><audio controls preload="metadata" className="block h-12 w-full" aria-label="Áudio do Guia Bora Vender+ Setembro 2026"><source src={AUDIO_URL} type="audio/mpeg" />Seu navegador não suporta reprodução de áudio.</audio></div>
              <div className="mt-3 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"><span>Player liberado • sem cadastro</span><span>Download MP3 • cadastro necessário</span></div>
              {form}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="baixar-guia" className="my-10 overflow-hidden rounded-3xl bg-[#2f3453] text-white shadow-lg ring-1 ring-[#374b89]/20">
      <div className="grid gap-7 p-6 sm:p-8 md:grid-cols-[260px_1fr] md:items-center md:gap-10 md:p-10">
        <div className="mx-auto w-full max-w-[260px]"><img src="/images/blog/bora-vender-setembro-2026-ebook.png?v=1" alt="Mockup do Guia Bora Vender+ Setembro 2026" width="260" height="347" className="block h-auto w-full object-contain drop-shadow-2xl" /></div>
        <div>
          <span className="inline-flex rounded-full border border-[#e0ae4f]/40 bg-[#e0ae4f]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f3c96e]">Guia gratuito • Setembro 2026</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Leve as 3 Datas de Ouro para o seu negócio</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">Receba o Guia Bora Vender+ com campanhas práticas, Método MDS, exemplos, checklists, prompts e tracking.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-200"><span className="rounded-full border border-white/15 px-3 py-1.5">23 páginas</span><span className="rounded-full border border-white/15 px-3 py-1.5">3 campanhas práticas</span><span className="rounded-full border border-white/15 px-3 py-1.5">Método MDS aplicado</span></div>
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {unlocked ? <a href={GUIDE_URL} download className="inline-flex w-full items-center justify-center rounded-xl bg-[#e0ae4f] px-6 py-3.5 text-sm font-bold text-[#202640] transition hover:brightness-105">Baixar o Guia em PDF</a> : <button type="button" onClick={() => openCapture("ebook")} className="inline-flex w-full items-center justify-center rounded-xl bg-[#e0ae4f] px-6 py-3.5 text-sm font-bold text-[#202640] transition hover:brightness-105">Baixar o Guia gratuitamente</button>}
            <a href="#ouvir-guia" className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">Ouvir Guia em áudio</a>
          </div>
          {form}
          <p className="mt-3 text-xs text-slate-400">Ouvir é livre • downloads requerem cadastro</p>
        </div>
      </div>
    </section>
  );
}

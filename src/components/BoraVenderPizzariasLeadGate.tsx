"use client";

import { FormEvent, useEffect, useState } from "react";

const STORAGE_KEY = "mds_bora_vender_pizzarias_2026_unlocked";
const UNLOCK_EVENT = "mds-bora-vender-pizzarias-unlocked";
const GUIDE_URL = "/ebooks/bora-vender-pizzarias-2026.pdf";
const CAMPAIGN = "bora_vender_pizzarias_2026";
const YOUTUBE_URL = "https://youtu.be/Wkvwo0ZZrmQ?si=tOQbD4-5vciwzKNE";
const SPOTIFY_URL = "https://open.spotify.com/episode/75OXbLig6DJVpfmD5bN8ue?si=L-I4D0r2RlySV9Y-KhCw8Q";

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

function startDownload() {
  const link = document.createElement("a");
  link.href = GUIDE_URL;
  link.download = "bora-vender-pizzarias-2026.pdf";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function trackBlogLead() {
  if (typeof window === "undefined") return;

  try {
    const eventParams = {
      source_area: "blog",
      campaign: CAMPAIGN,
      material: "ebook",
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
  } catch (error) {
    console.warn("Falha ao registrar blog_generate_lead", error);
  }
}

export default function BoraVenderPizzariasLeadGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [showForm, setShowForm] = useState(false);
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
          material_requested: "ebook",
          campaign: CAMPAIGN,
          source: "site",
          landing_page: window.location.href,
          referrer: document.referrer || null,
          ...getTracking(),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Não foi possível liberar o Playbook agora.");
      }

      localStorage.setItem(STORAGE_KEY, "1");
      window.dispatchEvent(new Event(UNLOCK_EVENT));
      setUnlocked(true);
      setShowForm(false);

      // O download é a ação principal e nunca deve depender do Analytics.
      startDownload();
      trackBlogLead();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível liberar o Playbook agora.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="baixar-playbook-pizzarias" className="mx-auto max-w-4xl px-6 pb-4 md:px-8" aria-label="Baixe o Playbook Bora Vender+ Pizzarias">
      <div className="overflow-hidden rounded-3xl bg-[#2f3453] text-white shadow-xl ring-1 ring-[#374b89]/20">
        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[220px_1fr] md:items-center md:p-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#202640] shadow-2xl">
            <img src="/images/blog/bora-vender-pizzarias-2026.png" alt="Bora Vender+ Pizzarias — 12 campanhas estratégicas" width="220" height="220" className="block h-auto w-full object-cover" />
          </div>

          <div>
            <span className="inline-flex rounded-full border border-[#e0ae4f]/40 bg-[#e0ae4f]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f3c96e]">Playbook gratuito • Pizzarias</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">12 campanhas estratégicas para aumentar o faturamento da sua pizzaria</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">64 páginas com campanhas para movimentar dias fracos, aumentar ticket médio, gerar recorrência, proteger margem e medir o que realmente funciona.</p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-200">
              <span className="rounded-full border border-white/15 px-3 py-1.5">12 campanhas</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">4 frentes comerciais</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">Método MDS aplicado</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">Glossário + checklists</span>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {unlocked ? (
                <a href={GUIDE_URL} download className="inline-flex w-full items-center justify-center rounded-xl bg-[#e0ae4f] px-5 py-3.5 text-sm font-bold text-[#202640] transition hover:brightness-105">Baixar Playbook grátis</a>
              ) : (
                <button type="button" onClick={() => { setError(""); setShowForm(true); }} className="inline-flex w-full items-center justify-center rounded-xl bg-[#e0ae4f] px-5 py-3.5 text-sm font-bold text-[#202640] transition hover:brightness-105">Baixar Playbook grátis</button>
              )}
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"><span aria-hidden="true">▶</span>YouTube</a>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"><span aria-hidden="true">♫</span>Spotify</a>
            </div>

            {showForm && !unlocked && (
              <form onSubmit={submitLead} className="mt-6 rounded-2xl border border-white/15 bg-white/[0.08] p-5">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white">Preencha para baixar agora</h3>
                  <p className="mt-1 text-sm text-slate-300">Nome, WhatsApp e e-mail. Ao enviar, o download começa automaticamente.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <input required minLength={2} value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#e0ae4f]" />
                  <input required type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="WhatsApp com DDD" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#e0ae4f]" />
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu melhor e-mail" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#e0ae4f]" />
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xl text-[11px] leading-5 text-slate-400">Ao continuar, você autoriza a MDS a usar esses dados para entregar o material e enviar comunicações relacionadas ao conteúdo. Você pode solicitar a exclusão dos dados a qualquer momento.</p>
                  <button disabled={loading} type="submit" className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-[#e0ae4f] px-5 py-3 text-sm font-bold text-[#202640] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">{loading ? "Preparando download..." : "Baixar Playbook agora"}</button>
                </div>

                {error && <p className="mt-3 text-sm font-medium text-red-200">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

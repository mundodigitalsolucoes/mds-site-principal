"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Variant = "audio" | "guide";

type BoraVenderLeadGateProps = {
  variant: Variant;
};

const STORAGE_KEY = "mds_bora_vender_setembro_2026_unlocked";
const UNLOCK_EVENT = "mds-bora-vender-unlocked";
const AUDIO_URL = "/audios/blog/bora-vender-mais-setembro-2026.MP3";
const GUIDE_URL = "/ebooks/guia-bora-vender-setembro-2026.pdf";

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

export default function BoraVenderLeadGate({ variant }: BoraVenderLeadGateProps) {
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

  const copy = useMemo(() => {
    if (variant === "audio") {
      return {
        eyebrow: "Bora Vender+ em áudio",
        title: "Ouça o Guia completo",
        description: "Ouça enquanto trabalha, dirige ou planeja sua próxima campanha.",
        button: "Liberar Guia em áudio",
        material: "audio",
      };
    }
    return {
      eyebrow: "Guia gratuito • Setembro 2026",
      title: "Leve as 3 Datas de Ouro para o seu negócio",
      description: "Receba o Guia Bora Vender+ com campanhas práticas, Método MDS, exemplos, checklists, prompts e tracking.",
      button: "Liberar Guia gratuitamente",
      material: "ebook",
    };
  }, [variant]);

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
          material_requested: copy.material,
          campaign: "bora_vender_mais_setembro_2026",
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
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível liberar o material agora.");
    } finally {
      setLoading(false);
    }
  }

  const form = showForm && !unlocked ? (
    <form onSubmit={submitLead} className="mt-6 rounded-2xl border border-white/15 bg-white/[0.08] p-5">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white">Preencha para liberar seu acesso</h3>
        <p className="mt-1 text-sm text-slate-300">É rápido: nome, WhatsApp e e-mail.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <input required minLength={2} value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="rounded-xl border border-white/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-[#e0ae4f]" />
        <input required type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="WhatsApp com DDD" className="rounded-xl border border-white/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-[#e0ae4f]" />
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu melhor e-mail" className="rounded-xl border border-white/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-[#e0ae4f]" />
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-[11px] leading-5 text-slate-400">Ao continuar, você autoriza a MDS a usar esses dados para entregar o material e enviar comunicações relacionadas ao conteúdo. Você pode solicitar a exclusão dos dados a qualquer momento.</p>
        <button disabled={loading} type="submit" className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#e0ae4f] px-5 py-3 text-sm font-bold text-[#202640] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Liberando..." : "Liberar meu acesso"}
        </button>
      </div>
      {error && <p className="mt-3 text-sm font-medium text-red-200">{error}</p>}
    </form>
  ) : null;

  if (variant === "audio") {
    return (
      <section className="mx-auto max-w-4xl px-6 pb-4 md:px-8" aria-label="Ouça o Guia Bora Vender+">
        <div className="overflow-hidden rounded-3xl bg-[#2f3453] text-white shadow-xl ring-1 ring-[#374b89]/20">
          <div className="relative p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#374b89]/50 blur-3xl" />
            <div className="relative">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e0ae4f] text-[#202640] shadow-lg shadow-black/10">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.57-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" /></svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f3c96e]">{copy.eyebrow}</span>
                    <h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">{copy.title}</h2>
                    <p className="mt-1 text-sm text-slate-300">{copy.description}</p>
                  </div>
                </div>
                {!unlocked && <button onClick={() => setShowForm(true)} className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#e0ae4f] px-5 py-3 text-sm font-bold text-[#202640] transition hover:brightness-105">{copy.button}</button>}
                {unlocked && <a href={AUDIO_URL} download className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">Baixar áudio</a>}
              </div>
              {unlocked ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4">
                  <audio controls preload="metadata" className="block h-12 w-full" aria-label="Áudio do Guia Bora Vender+ Setembro 2026">
                    <source src={AUDIO_URL} type="audio/mpeg" />
                    Seu navegador não suporta reprodução de áudio.
                  </audio>
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.04] px-4 py-5 text-sm text-slate-300">Cadastre-se uma vez para liberar o player completo, o download do áudio e o Guia em PDF.</div>
              )}
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
        <div className="mx-auto w-full max-w-[260px]">
          <img src="/images/blog/bora-vender-setembro-2026-ebook.png?v=1" alt="Mockup do Guia Bora Vender+ Setembro 2026" width="260" height="347" className="block h-auto w-full object-contain drop-shadow-2xl" />
        </div>
        <div>
          <span className="inline-flex rounded-full border border-[#e0ae4f]/40 bg-[#e0ae4f]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f3c96e]">{copy.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{copy.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">{copy.description}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-200"><span className="rounded-full border border-white/15 px-3 py-1.5">23 páginas</span><span className="rounded-full border border-white/15 px-3 py-1.5">3 campanhas práticas</span><span className="rounded-full border border-white/15 px-3 py-1.5">Método MDS aplicado</span></div>
          <div className="mt-7 flex flex-wrap gap-3">
            {!unlocked && <button onClick={() => setShowForm(true)} className="inline-flex items-center justify-center rounded-xl bg-[#e0ae4f] px-6 py-3.5 text-sm font-bold text-[#202640] transition hover:brightness-105">{copy.button}</button>}
            {unlocked && <><a href={GUIDE_URL} download className="inline-flex items-center justify-center rounded-xl bg-[#e0ae4f] px-6 py-3.5 text-sm font-bold text-[#202640] transition hover:brightness-105">Baixar o Guia em PDF</a><a href={AUDIO_URL} className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">Ouvir Guia em áudio</a></>}
          </div>
          {form}
          <p className="mt-3 text-xs text-slate-400">Cadastro único • libera PDF e áudio</p>
        </div>
      </div>
    </section>
  );
}

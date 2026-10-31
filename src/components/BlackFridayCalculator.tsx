"use client";
import { useMemo, useState } from "react";

type InputKey = "price" | "cost" | "fees" | "discount" | "target";
type Values = Record<InputKey, number>;
const defaults: Values = { price: 100, cost: 55, fees: 8, discount: 15, target: 15 };
const money = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
function track(action: string) {
  if (typeof window !== "undefined") {
    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "bv_black_friday_tool", campaign_key: "bora_vender_black_friday_2026", tool_action: action });
  }
}
export default function BlackFridayCalculator() {
  const [v, setV] = useState<Values>(defaults);
  const result = useMemo(() => {
    const sale = v.price * (1 - v.discount / 100);
    const net = sale * (1 - v.fees / 100) - v.cost;
    const margin = sale > 0 ? (net / sale) * 100 : 0;
    const denom = 1 - v.fees / 100 - v.target / 100;
    const minimum = denom > 0 ? v.cost / denom : Infinity;
    const maxDiscount = v.price > 0 && Number.isFinite(minimum) ? (1 - minimum / v.price) * 100 : NaN;
    return { sale, net, margin, minimum, maxDiscount, valid: denom > 0 && sale >= minimum && sale > 0 };
  }, [v]);
  const fields: { key: InputKey; label: string; unit: string; help: string }[] = [
    { key: "price", label: "Preço normal", unit: "R$", help: "Valor cobrado antes da promoção" },
    { key: "cost", label: "Custos variáveis fixos por venda", unit: "R$", help: "Produto, embalagem, entrega subsidiada e outros custos por unidade" },
    { key: "fees", label: "Taxas e custos variáveis sobre a venda", unit: "%", help: "Taxas, tributos e comissões que incidem sobre o preço promocional" },
    { key: "discount", label: "Desconto planejado", unit: "%", help: "Redução aplicada sobre o preço normal" },
    { key: "target", label: "Margem de contribuição mínima desejada", unit: "%", help: "Meta sobre o faturamento após desconto" },
  ];
  return <section id="calculadora" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 sm:p-8" aria-labelledby="titulo-calculadora">
    <div className="mb-7"><span className="text-sm font-semibold uppercase tracking-wider text-[#374b89]">Ferramenta gratuita 01</span><h2 id="titulo-calculadora" className="mt-2 text-3xl font-bold text-[#2f3453]">Calculadora de Oferta Inteligente</h2><p className="mt-3 text-slate-600">Simule preços, custos e descontos antes de colocar sua oferta no ar. Os valores informados são processados no navegador e não são enviados à MDS.</p></div>
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">{fields.map(f => <label key={f.key} className="block"><span className="mb-1 block text-sm font-semibold text-slate-800">{f.label} ({f.unit})</span><span className="mb-2 block text-xs text-slate-500">{f.help}</span><input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg text-slate-900 outline-none focus:border-[#374b89] focus:ring-2 focus:ring-[#374b89]/15" type="number" min="0" max={["fees","discount","target"].includes(f.key) ? 100 : undefined} step="0.01" value={v[f.key]} onChange={e=>{const n=Number(e.target.value);setV(old=>({...old,[f.key]:Math.max(0,Math.min(["fees","discount","target"].includes(f.key)?100:100000000,Number.isFinite(n)?n:0))}));}} /></label>)}<button type="button" onClick={()=>{setV(defaults);track("calculator_reset");}} className="text-sm font-semibold text-[#374b89] underline underline-offset-4">Restaurar exemplo</button></div>
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl bg-[#2f3453] p-6 text-white"><p className="text-sm text-white/70">Preço promocional</p><p className="mt-1 text-4xl font-bold">{money(result.sale)}</p><div className="mt-6 grid grid-cols-2 gap-4"><div><p className="text-sm text-white/70">Contribuição por venda</p><p className="text-2xl font-semibold">{money(result.net)}</p></div><div><p className="text-sm text-white/70">Margem de contribuição</p><p className="text-2xl font-semibold">{Number.isFinite(result.margin)?result.margin.toFixed(1).replace(".",","):"—"}%</p></div></div></div>
        <div role="status" aria-live="polite" className={`rounded-2xl border p-5 ${result.valid ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-amber-200 bg-amber-50 text-amber-950"}`}><p className="font-bold">{result.valid ? "Oferta atende à margem mínima informada" : "A oferta não atende à margem mínima"}</p><p className="mt-2 text-sm">{result.valid ? "A simulação preserva a margem de contribuição desejada; ainda é necessário analisar volume, despesas fixas e lucro." : "Revise o desconto, os custos e as taxas antes de lançar a campanha."}</p></div>
        <div className="rounded-2xl border border-slate-200 p-5 text-slate-700"><p className="text-sm">Preço mínimo para atingir a margem desejada</p><p className="mt-1 text-2xl font-bold text-[#2f3453]">{Number.isFinite(result.minimum)?money(result.minimum):"Não calculável"}</p><p className="mt-4 text-sm">Desconto máximo matemático: <strong>{Number.isFinite(result.maxDiscount)?`${Math.max(0,result.maxDiscount).toFixed(1).replace(".",",")}%`:"Não calculável"}</strong>{Number.isFinite(result.maxDiscount)&&result.maxDiscount<0?" (preço normal já está abaixo da meta)":""}</p></div>
        <p className="text-xs leading-5 text-slate-500">Simulação educacional de margem de contribuição, não lucro líquido. Inclua corretamente tributos, comissões, frete e aquisição por venda. Valores exemplificativos; resultados reais podem variar.</p>
      </div>
    </div>
  </section>;
}

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value: unknown, max = 300) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = clean(body.name, 120);
    const email = clean(body.email, 180).toLowerCase();
    const whatsapp = clean(body.whatsapp, 40);

    if (name.length < 2 || !email.includes("@") || whatsapp.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ error: "Confira nome, WhatsApp e e-mail." }, { status: 400 });
    }

    const webhookUrl = process.env.BORA_VENDER_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("BORA_VENDER_WEBHOOK_URL não configurada");
      return NextResponse.json({ error: "Integração temporariamente indisponível." }, { status: 503 });
    }

    const campaign = clean(body.campaign, 120) || "bora_vender_mais_setembro_2026";
    const material = clean(body.material_requested, 40) || "ebook";
    const createdAt = new Date().toISOString();

    const payload = {
      event: "lead_magnet_access",
      campaign,
      material,
      material_requested: material,
      source: "site",
      nome: name,
      name,
      email,
      whatsapp,
      landing_page: clean(body.landing_page, 1000),
      referrer: clean(body.referrer, 1000) || null,
      utm_source: clean(body.utm_source, 200) || null,
      utm_medium: clean(body.utm_medium, 200) || null,
      utm_campaign: clean(body.utm_campaign, 200) || null,
      utm_content: clean(body.utm_content, 200) || null,
      utm_term: clean(body.utm_term, 200) || null,
      gclid: clean(body.gclid, 300) || null,
      fbclid: clean(body.fbclid, 300) || null,
      gbraid: clean(body.gbraid, 300) || null,
      wbraid: clean(body.wbraid, 300) || null,
      user_agent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || null,
      created_at: createdAt,
      captured_at: createdAt,
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      console.error("Webhook Bora Vender+ retornou", webhookResponse.status);
      return NextResponse.json({ error: "Não foi possível registrar seu acesso agora." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao capturar lead Bora Vender+", error);
    return NextResponse.json({ error: "Não foi possível liberar o material agora." }, { status: 500 });
  }
}

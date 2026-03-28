import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload = {
    nome: String(formData.get("nome") || ""),
    whatsapp: String(formData.get("whatsapp") || ""),
    email: String(formData.get("email") || ""),
    origem: "home-ebook-metodo-mds",
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.N8N_EBOOK_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
    } catch (error) {
      console.error("Erro ao enviar lead do e-book:", error);
    }
  }

  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") ?? "https";

  const baseUrl = host
    ? `${protocol}://${host}`
    : new URL(request.url).origin;

  const pdfUrl = new URL("/ebooks/metodo-mds-na-pratica.pdf", baseUrl);

  return NextResponse.redirect(pdfUrl, 303);
}
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect(
    "https://mundodigitalsolucoes.com.br/blog/12-campanhas-para-pizzaria-aumentar-faturamento?utm_source=podcast&utm_medium=audio&utm_campaign=bora_vender_pizzarias_2026&utm_content=link_falado",
    302,
  );
}

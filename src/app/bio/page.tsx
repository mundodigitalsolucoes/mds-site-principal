import type { Metadata } from "next";
import styles from "./bio.module.css";

export const metadata: Metadata = {
  title: "Links | Mundo Digital Soluções",
  description:
    "Consultoria gratuita, sites inteligentes, automações, CRM e conteúdos da Mundo Digital Soluções.",
  alternates: { canonical: "/bio" },
};

type SearchValue = string | string[] | undefined;

export default async function BioPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, SearchValue>>;
}) {
  const received = await searchParams;
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(received)) {
    if (!key.startsWith("utm_") || value === undefined) continue;
    for (const item of Array.isArray(value) ? value : [value]) {
      query.append(key, item);
    }
  }

  const suffix = query.size ? `?${query.toString()}` : "";
  const source = `https://mds-link-bio.fabioalvestopmix.chatgpt.site/${suffix}`;

  return (
    <section className={styles.frame} aria-label="Central de Crescimento MDS">
      <iframe
        src={source}
        title="MDS | Central de Crescimento"
        className={styles.iframe}
        allow="clipboard-write"
      />
      <noscript>
        <p className={styles.fallback}>
          Para acessar os links da MDS, abra a{" "}
          <a href="https://mds-link-bio.fabioalvestopmix.chatgpt.site/">
            Central de Crescimento
          </a>
          .
        </p>
      </noscript>
    </section>
  );
}

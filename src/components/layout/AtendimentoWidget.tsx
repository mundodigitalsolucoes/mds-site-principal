import Link from "next/link";

export default function AtendimentoWidget() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div className="hidden rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)] backdrop-blur sm:block">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#374b89]">
          Atendimento MDS
        </p>
        <p className="mt-1 text-sm font-semibold text-[#2f3453]">
          Bora acelerar seu marketing?
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          Fale no WhatsApp ou peça sua consultoria gratuita.
        </p>
      </div>

      <div className="flex flex-col items-end gap-3">
        <Link
          href="/contato"
          className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#2f3453] shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:border-[#374b89]/30 hover:bg-slate-50"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f3453] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M12 2a10 10 0 1 0 6.32 17.75l3.46.92a1 1 0 0 0 1.22-1.22l-.92-3.46A10 10 0 0 0 12 2Zm0 2a8 8 0 0 1 6.31 12.92 1 1 0 0 0-.18.86l.51 1.91-1.91-.51a1 1 0 0 0-.86.18A8 8 0 1 1 12 4Z" />
            </svg>
          </span>
          <span>Consultoria gratuita</span>
        </Link>

        <a
          href="https://wa.me/5517992822597"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-20px_rgba(37,211,102,0.6)] transition hover:-translate-y-0.5 hover:brightness-95"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/20" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="relative h-5 w-5"
            >
              <path d="M19.11 17.41c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.08-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.19 2.05 3.12 4.97 4.38.7.31 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z" />
              <path d="M16.01 3.2c-7.08 0-12.83 5.75-12.83 12.83 0 2.25.59 4.45 1.7 6.39L3.2 28.8l6.53-1.65a12.8 12.8 0 0 0 6.28 1.63h.01c7.08 0 12.83-5.75 12.83-12.83S23.09 3.2 16.01 3.2Zm0 23.43h-.01a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-3.88.98 1.03-3.78-.25-.39a10.62 10.62 0 1 1 8.88 4.89Z" />
            </svg>
          </span>
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
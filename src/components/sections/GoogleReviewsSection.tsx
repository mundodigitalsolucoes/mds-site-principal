import Image from 'next/image'
import Link from 'next/link'
import { googleReviews, googleReviewsSummary } from '@/data/googleReviews'

type GoogleReviewsSectionProps = {
  title?: string
  subtitle?: string
  limit?: number
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < rating

        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${filled ? 'fill-yellow-400 text-yellow-400' : 'fill-transparent text-zinc-300'}`}
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M12 3.75l2.546 5.159 5.694.827-4.12 4.016.972 5.67L12 16.743l-5.092 2.679.972-5.67-4.12-4.016 5.694-.827L12 3.75z"
            />
          </svg>
        )
      })}
    </div>
  )
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-semibold text-white">
      {initials || 'MD'}
    </div>
  )
}

function ClientLogo({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return <Initials name={alt} />
  }

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2">
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="h-10 w-10 object-contain"
      />
    </div>
  )
}

export default function GoogleReviewsSection({
  title = 'Avaliações que reforçam a confiança na MDS',
  subtitle = 'Prova social real para aumentar autoridade, reduzir objeções e ajudar na decisão.',
  limit = 6,
}: GoogleReviewsSectionProps) {
  const items = googleReviews.slice(0, limit)

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)] sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#374b89]">
              Avaliações no Google
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f3453] sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Nota média
              </div>
              <div className="mt-1 text-3xl font-bold text-[#2f3453]">
                {googleReviewsSummary.averageRating}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Total de avaliações
              </div>
              <div className="mt-1 text-3xl font-bold text-[#2f3453]">
                {googleReviewsSummary.totalReviews}
              </div>
            </div>

            <Link
              href={googleReviewsSummary.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f3453] px-6 text-sm font-semibold text-white transition hover:bg-[#374b89]"
            >
              Ver todas no Google
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((review) => (
            <article
              key={review.author}
              className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.14)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(15,23,42,0.2)]"
            >
              <div className="mb-5 flex items-start gap-4">
                <ClientLogo src={review.logoSrc} alt={review.author} />

                <div>
                  <div className="text-base font-semibold text-[#2f3453]">
                    {review.author}
                  </div>

                  {review.role ? (
                    <div className="mt-1 text-sm text-slate-500">{review.role}</div>
                  ) : null}
                </div>
              </div>

              <Stars rating={review.rating} />

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                “{review.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
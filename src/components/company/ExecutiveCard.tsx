import type { Dictionary } from '../../i18n/types'

type Executive = Dictionary['company']['executives'][number]

export function ExecutiveCard({ role, roleEn, name, message, initials, imageSrc }: Executive) {
  return (
    <article className="executive-card group scroll-reveal overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="absolute inset-0 z-0 h-full w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <span className="font-display text-7xl font-bold text-white/10 transition-transform duration-700 group-hover:scale-110 md:text-8xl">
              {initials}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-coral-400">{roleEn}</p>
          <h3 className="mt-2 text-2xl font-bold text-white md:text-[1.75rem]">{name}</h3>
          <p className="mt-1 text-sm text-white/80">{role}</p>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <p className="rounded-xl border border-sand-200 bg-sand-50 px-4 py-4 text-sm leading-relaxed text-navy-700/85">
          {message}
        </p>
      </div>
    </article>
  )
}

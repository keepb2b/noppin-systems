import { Breadcrumb } from './Breadcrumb'

type PageHeroProps = {
  en: string
  ja: string
  breadcrumbs: { label: string; path?: string }[]
}

export function PageHero({ en, ja, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-sand-200 bg-sand-100 line-bg pt-28 pb-12 md:pt-32 md:pb-16 text-navy-900">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-coral-500">{en}</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-navy-900 md:text-5xl">{ja}</h1>
        <div className="mt-6">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
    </section>
  )
}

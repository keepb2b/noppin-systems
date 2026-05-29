import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'
import type { Dictionary } from '../../i18n/types'

type ServiceItem = Dictionary['services']['items'][number]

type Props = ServiceItem & { reverse?: boolean }

export function NumberedServiceBlock({ number, title, description, tags, reverse }: Props) {
  const { dict } = useI18n()

  return (
    <article
      className={`scroll-reveal grid items-center gap-8 border-b border-sand-200 py-12 md:grid-cols-2 md:gap-12 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-tr from-sand-100 to-sand-200">
        <div className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-navy-900/10">
          {number}
        </div>
      </div>
      <div>
        <p className="font-display text-sm font-semibold text-coral-500">SERVICE {number}</p>
        <h3 className="mt-2 text-2xl font-bold text-navy-900">{title}</h3>
        <p className="mt-4 leading-relaxed text-navy-700/85">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-navy-800">{tag}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/works"
          className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coral-500 hover:underline"
        >
          {dict.common.relatedWorks}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  )
}

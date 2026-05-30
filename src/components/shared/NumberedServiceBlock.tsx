import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'
import type { Dictionary } from '../../i18n/types'

type ServiceItem = Dictionary['services']['items'][number]

type Props = ServiceItem & { reverse?: boolean; imageSrc?: string }

export function NumberedServiceBlock({ number, title, description, tags, reverse, imageSrc }: Props) {
  const { dict } = useI18n()

  return (
    <article
      className={`scroll-reveal grid items-center gap-8 border-b border-sand-200 py-12 last:border-b-0 md:grid-cols-2 md:gap-12 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="service-image-stage">
        <div className={`service-image-card ${reverse ? 'service-image-card--reverse' : ''}`}>
          <div className="service-image-engrave service-image-engrave--lead" aria-hidden />
          <div className="service-image-engrave service-image-engrave--trail" aria-hidden />
          <div className="service-image-inner group aspect-[4/3]">
            <svg
              className="service-image-ruler service-image-ruler--lead"
              viewBox="0 0 56 56"
              aria-hidden
            >
              <g stroke="rgb(255 255 255 / 0.82)" strokeWidth="1" strokeLinecap="square">
                <line x1="0" y1="0" x2="0" y2="8" />
                <line x1="6" y1="0" x2="6" y2="5" />
                <line x1="12" y1="0" x2="12" y2="8" />
                <line x1="18" y1="0" x2="18" y2="5" />
                <line x1="24" y1="0" x2="24" y2="8" />
                <line x1="30" y1="0" x2="30" y2="5" />
                <line x1="36" y1="0" x2="36" y2="8" />
                <line x1="42" y1="0" x2="42" y2="5" />
                <line x1="48" y1="0" x2="48" y2="8" />
                <line x1="0" y1="0" x2="8" y2="0" />
                <line x1="0" y1="6" x2="5" y2="6" />
                <line x1="0" y1="12" x2="8" y2="12" />
                <line x1="0" y1="18" x2="5" y2="18" />
                <line x1="0" y1="24" x2="8" y2="24" />
                <line x1="0" y1="30" x2="5" y2="30" />
                <line x1="0" y1="36" x2="8" y2="36" />
                <line x1="0" y1="42" x2="5" y2="42" />
                <line x1="0" y1="48" x2="8" y2="48" />
              </g>
            </svg>
            <svg
              className="service-image-ruler service-image-ruler--trail"
              viewBox="0 0 56 56"
              aria-hidden
            >
              <g stroke="rgb(255 255 255 / 0.82)" strokeWidth="1" strokeLinecap="square">
                <line x1="0" y1="0" x2="0" y2="8" />
                <line x1="6" y1="0" x2="6" y2="5" />
                <line x1="12" y1="0" x2="12" y2="8" />
                <line x1="18" y1="0" x2="18" y2="5" />
                <line x1="24" y1="0" x2="24" y2="8" />
                <line x1="30" y1="0" x2="30" y2="5" />
                <line x1="36" y1="0" x2="36" y2="8" />
                <line x1="42" y1="0" x2="42" y2="5" />
                <line x1="48" y1="0" x2="48" y2="8" />
                <line x1="0" y1="0" x2="8" y2="0" />
                <line x1="0" y1="6" x2="5" y2="6" />
                <line x1="0" y1="12" x2="8" y2="12" />
                <line x1="0" y1="18" x2="5" y2="18" />
                <line x1="0" y1="24" x2="8" y2="24" />
                <line x1="0" y1="30" x2="5" y2="30" />
                <line x1="0" y1="36" x2="8" y2="36" />
                <line x1="0" y1="42" x2="5" y2="42" />
                <line x1="0" y1="48" x2="8" y2="48" />
              </g>
            </svg>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-white/10">
                {number}
              </div>
            )}
            {imageSrc ? (
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-navy-950/10" aria-hidden />
            ) : null}
          </div>
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

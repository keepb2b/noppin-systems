import { Link } from 'react-router-dom'
import { SectionTitle } from '../ui/SectionTitle'
import { ReasonIcon } from './ReasonIcon'
import { useI18n } from '../../i18n'
import type { Dictionary } from '../../i18n/types'

type ReasonItem = Dictionary['reasons']['items'][number]

function TechPatternBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="reason-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0f2744" strokeWidth="0.35" opacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#reason-grid)" />
        <line x1="5%" y1="20%" x2="35%" y2="45%" stroke="#0f2744" strokeWidth="0.5" opacity="0.15" />
        <line x1="65%" y1="15%" x2="95%" y2="40%" stroke="#0f2744" strokeWidth="0.5" opacity="0.15" />
        <line x1="70%" y1="55%" x2="92%" y2="75%" stroke="#0f2744" strokeWidth="0.5" opacity="0.15" />
      </svg>
    </div>
  )
}

function ReasonCircleCard({ reason }: { reason: ReasonItem }) {
  return (
    <article className="flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute flex h-[7.75rem] w-[7.75rem] items-center justify-center rounded-full border-2 border-aizome-400 md:h-[8.75rem] md:w-[8.75rem]"
          aria-hidden
        />
        <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_8px_32px_rgba(15,39,68,0.12)] md:h-32 md:w-32">
          <span className="absolute -left-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-coral-500 text-xs font-bold text-white shadow-md">
            {reason.number}
          </span>
          <ReasonIcon type={reason.icon} />
        </div>
      </div>
      <p className="mt-5 max-w-[200px] text-sm font-medium leading-relaxed text-navy-900 md:text-[15px]">
        {reason.gridTitle}
      </p>
    </article>
  )
}

function BannerRibbon({ text }: { text: string }) {
  return (
    <div className="relative mx-auto mt-10 max-w-4xl px-4 md:mt-12">
      <div className="relative overflow-hidden bg-navy-900 py-4 md:py-5">
        <div
          className="absolute left-0 top-0 h-full w-10 bg-coral-500 md:w-14"
          style={{ clipPath: 'polygon(0 0, 100% 25%, 100% 75%, 0 100%)' }}
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 h-full w-10 bg-coral-500 md:w-14"
          style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 75%)' }}
          aria-hidden
        />
        <p className="relative px-12 text-center text-sm font-medium text-white md:text-base">
          <span className="text-white/70">〈</span>
          {text}
          <span className="text-white/70">〉</span>
        </p>
      </div>
    </div>
  )
}

export function ReasonsChosenSection() {
  const { dict } = useI18n()
  const { section, items } = dict.reasons

  return (
    <section id="reasons" className="relative overflow-hidden bg-sand-50 py-16 md:py-24">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[45%] w-[55%] bg-sand-100"
        style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}
        aria-hidden
      />
      <TechPatternBg />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <header className="text-center">
          <SectionTitle
            en={`${section.enTitle}_`}
            ja={section.jaSubtitle}
            align="center"
          />
        </header>

        <BannerRibbon text={section.bannerText} />

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {items.map((reason) => (
            <ReasonCircleCard key={reason.number} reason={reason} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 md:mt-20 md:flex-row md:gap-0">
          <Link
            to="/strengths"
            className="rounded-full bg-gradient-to-r from-aizome-500 to-aizome-300 px-10 py-3.5 text-sm font-semibold text-white shadow-md md:text-base"
          >
            {section.ctaLabel}
          </Link>
          <span className="hidden h-px w-16 bg-navy-900 md:ml-0 md:block lg:w-28" aria-hidden />
        </div>
      </div>
    </section>
  )
}

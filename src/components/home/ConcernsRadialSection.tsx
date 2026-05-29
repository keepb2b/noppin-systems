import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useConcernsGatherAnimation } from '../../hooks/useConcernsGatherAnimation'
import { useI18n } from '../../i18n'
import { TypewriterHeading } from '../ui/TypewriterHeading'

function WarningIcon() {
  return (
    <span data-concern-icon className="flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M12 3L2 21h20L12 3z" fill="#c45c48" />
        <path d="M12 9v5M12 16v1" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

type ConcernItemProps = {
  text: string
  side: 'left' | 'right'
  orderIndex: number
}

function ConcernItem({ text, side, orderIndex }: ConcernItemProps) {
  return (
    <li
      className={`flex items-center gap-2 ${
        side === 'left' ? 'flex-row-reverse justify-end text-right' : 'flex-row justify-start text-left'
      }`}
      data-concern-item
      data-side={side}
      data-order={orderIndex}
    >
      <div
        data-concern-card
        data-side={side}
        data-order={orderIndex}
        className={`flex items-center gap-2 will-change-[transform,opacity] ${
          side === 'left' ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <p
          className="concern-card-body shrink-0 overflow-hidden whitespace-nowrap rounded-sm bg-white px-3 py-2 text-sm font-medium leading-snug text-navy-900 shadow-[0_2px_12px_rgba(15,39,68,0.08)] md:text-[15px]"
          style={{ width: 0 }}
        >
          {text}
        </p>
        <WarningIcon />
      </div>
    </li>
  )
}

function CenterHub() {
  return (
    <div
      className="relative flex h-96 w-96 shrink-0 items-center justify-center md:h-[28rem] md:w-[28rem]"
      aria-hidden
    >
      <div className="hub-ring hub-ring--outer" />
      <div className="hub-ring hub-ring--mid" />
      <div className="hub-ring hub-ring--inner" />

      <div className="hub-orbit">
        <span className="hub-dot hub-dot--top" />
        <span className="hub-dot hub-dot--bottom" />
      </div>

      <div className="hub-orbit--reverse">
        <span className="hub-dot hub-dot--side" />
      </div>

      <div className="absolute inset-20 rounded-full bg-aizome-400/10 animate-pulse" />

      <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
        <HubIcon label="Code" floatClass="hub-icon-float">
          <rect x="4" y="6" width="16" height="12" rx="2" fill="#2a4460" />
          <path d="M8 11h8M8 14h5" stroke="#9ec4d4" strokeWidth="1.2" strokeLinecap="round" />
        </HubIcon>
        <HubIcon label="Gear" floatClass="hub-icon-float hub-icon-float--delay-1" spin>
          <circle cx="12" cy="12" r="6" fill="#5a8fa8" opacity="0.9" />
          <circle cx="12" cy="12" r="2.5" fill="#e8f4f8" />
        </HubIcon>
        <HubIcon label="Tags" floatClass="hub-icon-float hub-icon-float--delay-2">
          <path d="M8 8l4-2 4 2v8l-4 2-4-2V8z" fill="#6b98ad" />
          <path d="M10 10h4M10 13h3" stroke="white" strokeWidth="1" strokeLinecap="round" />
        </HubIcon>
        <HubIcon label="Cloud" floatClass="hub-icon-float hub-icon-float--delay-3">
          <path d="M7 14a3 3 0 013-3 3.5 3.5 0 017 0 3 3 0 010 6H8a3 3 0 01-1-6z" fill="#457a94" />
          <path d="M12 15v3M10.5 17.5L12 19l1.5-1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </HubIcon>
      </div>

      <div className="hub-phone-bob absolute -right-4 bottom-4 z-20 rounded-xl bg-gradient-to-b from-aizome-300 to-aizome-600 p-3 shadow-lg">
        <div className="flex h-20 w-14 flex-col items-center justify-center rounded-lg bg-white/90">
          <svg className="h-8 w-8 text-aizome-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <svg
        className="hub-gear-spin pointer-events-none absolute -left-12 top-8 h-20 w-20 text-navy-900/8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5zm8.43-2.52l1.18-2.04-2.04-1.18-1.18 2.04 2.04 1.18zM4.61 17.48l-1.18 2.04 2.04 1.18 1.18-2.04-2.04-1.18z" />
      </svg>

      <div className="absolute -top-6 left-1/2 z-0 h-12 w-12 -translate-x-1/2 rounded-full border-2 border-navy-900/10 bg-white/80" />
    </div>
  )
}

function HubIcon({
  children,
  label,
  floatClass = '',
  spin = false,
}: {
  children: ReactNode
  label: string
  floatClass?: string
  spin?: boolean
}) {
  return (
    <div
      className={`flex h-28 w-28 items-center justify-center rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg md:h-32 md:w-32 ${floatClass}`}
      title={label}
    >
      <svg viewBox="0 0 24 24" className={`h-[4.5rem] w-[4.5rem] ${spin ? 'hub-gear-spin' : ''}`}>
        {children}
      </svg>
    </div>
  )
}

/** Interleaved L/R order for sequential gather around the hub */
function buildOrderedConcerns(items: { id: string; text: string; side: 'left' | 'right' }[]) {
  const left = items.filter((c) => c.side === 'left')
  const right = items.filter((c) => c.side === 'right')
  const ordered: { item: (typeof items)[number]; orderIndex: number }[] = []
  for (let i = 0; i < 4; i++) {
    if (left[i]) ordered.push({ item: left[i], orderIndex: ordered.length })
    if (right[i]) ordered.push({ item: right[i], orderIndex: ordered.length })
  }
  return ordered
}

export function ConcernsRadialSection() {
  const { dict } = useI18n()
  const radialConcerns = dict.concerns.items
  const chevronRef = useScrollReveal<HTMLDivElement>()
  const radialRef = useConcernsGatherAnimation(true)
  const leftItems = radialConcerns.filter((c) => c.side === 'left')
  const rightItems = radialConcerns.filter((c) => c.side === 'right')
  const ordered = buildOrderedConcerns(radialConcerns)

  return (
    <section className="overflow-hidden bg-sand-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-12">
          <TypewriterHeading
            text={dict.home.concerns.title}
            subtitle={dict.home.concerns.subtitle}
            className="text-3xl md:text-5xl"
            speed={52}
          />
        </header>

        {/* Desktop: scroll-driven gather / scatter */}
        <div
          ref={radialRef}
          className="relative hidden min-h-[36rem] md:block lg:min-h-[40rem]"
          data-concerns-stage
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-8">
            <ul className="flex flex-col justify-between gap-10 py-6">
              {leftItems.map((item) => {
                const order = ordered.find((o) => o.item.id === item.id)?.orderIndex ?? 0
                return (
                  <ConcernItem key={item.id} text={item.text} side="left" orderIndex={order} />
                )
              })}
            </ul>

            <div className="flex justify-center">
              <CenterHub />
            </div>

            <ul className="flex flex-col justify-between gap-10 py-6">
              {rightItems.map((item) => {
                const order = ordered.find((o) => o.item.id === item.id)?.orderIndex ?? 0
                return (
                  <ConcernItem key={item.id} text={item.text} side="right" orderIndex={order} />
                )
              })}
            </ul>
          </div>
        </div>

        {/* Mobile: visible cards without scroll-scrub */}
        <div className="md:hidden">
          <div className="mb-10 flex justify-center">
            <CenterHub />
          </div>
          <ul className="space-y-4">
            {ordered.map(({ item }) => (
              <li
                key={item.id}
                className={`flex items-center gap-2 ${
                  item.side === 'left' ? 'flex-row-reverse justify-end text-right' : 'flex-row text-left'
                }`}
              >
                <p className="max-w-[280px] rounded-sm bg-white px-3 py-2 text-sm font-medium text-navy-900 shadow-sm">
                  {item.text}
                </p>
                <WarningIcon />
              </li>
            ))}
          </ul>
        </div>

        <div ref={chevronRef} className="scroll-reveal mt-12 flex justify-center md:mt-16">
          <a
            href="#reasons"
            className="hub-chevron-bounce flex h-12 w-12 items-center justify-center text-coral-500 transition-transform hover:translate-y-1"
            aria-label={dict.home.nextSection}
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

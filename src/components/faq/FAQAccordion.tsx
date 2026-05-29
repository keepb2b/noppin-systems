import { useState } from 'react'
import type { Dictionary } from '../../i18n/types'

type FaqItem = Dictionary['faq']['items'][number]

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div key={item.id} className="scroll-reveal overflow-hidden rounded-2xl border border-sand-200 bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
            >
              <span className="font-medium text-navy-900">
                <span className="mr-3 font-display text-sm text-coral-500">Q.{item.id}</span>
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand-100 text-navy-900 transition-transform duration-300 ${
                  open ? 'rotate-45' : ''
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div
                  className={`border-t border-sand-200 px-6 pb-5 text-sm leading-relaxed text-navy-700/85 transition-opacity duration-300 ${
                    open ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

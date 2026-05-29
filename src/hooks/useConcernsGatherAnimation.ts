import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const CARD_FULL_WIDTH = 300
const GATHER_PHASE_END = 0.5
const SCATTER_PHASE_START = 0.52

function scatterX(side: string): number {
  return side === 'left' ? -320 : 320
}

function cardLocalProgress(scrollProgress: number, index: number, total: number) {
  const slot = 1 / total
  const gatherStart = index * slot * GATHER_PHASE_END
  const gatherEnd = (index + 1) * slot * GATHER_PHASE_END
  const scatterStart = SCATTER_PHASE_START + index * slot * (1 - SCATTER_PHASE_START)
  const scatterEnd = SCATTER_PHASE_START + (index + 1) * slot * (1 - SCATTER_PHASE_START)

  if (scrollProgress < gatherStart) {
    return { x: 0, width: 0, opacity: 0, iconOpacity: 0 }
  }
  if (scrollProgress < gatherEnd) {
    const t = (scrollProgress - gatherStart) / (gatherEnd - gatherStart)
    const eased = 1 - Math.pow(1 - t, 2.5)
    return { x: eased, width: eased, opacity: eased, iconOpacity: Math.max(0, (t - 0.35) / 0.65) }
  }
  if (scrollProgress < scatterStart) {
    return { x: 1, width: 1, opacity: 1, iconOpacity: 1 }
  }
  if (scrollProgress < scatterEnd) {
    const t = (scrollProgress - scatterStart) / (scatterEnd - scatterStart)
    const eased = t * t
    return {
      x: 1 - eased,
      width: 1 - eased,
      opacity: 1 - eased,
      iconOpacity: 1 - eased,
    }
  }
  return { x: 0, width: 0, opacity: 0, iconOpacity: 0 }
}

export function useConcernsGatherAnimation(enabled = true) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const triggerRef = useRef<ScrollTrigger | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !enabled) return

    const cards = gsap.utils
      .toArray<HTMLElement>('[data-concern-card]', container)
      .sort((a, b) => Number(a.dataset.order ?? 0) - Number(b.dataset.order ?? 0))

    if (cards.length === 0) return

    const applyFrame = (scrollProgress: number) => {
      cards.forEach((card, i) => {
        const side = card.dataset.side === 'right' ? 'right' : 'left'
        const sx = scatterX(side)
        const body = card.querySelector<HTMLElement>('.concern-card-body')
        const icon = card.querySelector<HTMLElement>('[data-concern-icon]')
        const { x, width, opacity, iconOpacity } = cardLocalProgress(scrollProgress, i, cards.length)

        gsap.set(card, {
          x: sx * (1 - x),
          opacity,
        })
        if (body) {
          gsap.set(body, {
            width: width * CARD_FULL_WIDTH,
            opacity: Math.min(1, opacity * 1.2),
          })
        }
        if (icon) {
          gsap.set(icon, { opacity: iconOpacity, scale: 0.6 + iconOpacity * 0.4 })
        }
      })
    }

    if (reduced) {
      cards.forEach((card) => {
        gsap.set(card, { clearProps: 'all' })
        const body = card.querySelector<HTMLElement>('.concern-card-body')
        const icon = card.querySelector<HTMLElement>('[data-concern-icon]')
        if (body) gsap.set(body, { clearProps: 'all', width: 'auto' })
        if (icon) gsap.set(icon, { clearProps: 'all' })
      })
      return
    }

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        const side = card.dataset.side === 'right' ? 'right' : 'left'
        const body = card.querySelector<HTMLElement>('.concern-card-body')
        const icon = card.querySelector<HTMLElement>('[data-concern-icon]')
        gsap.set(card, { x: scatterX(side), opacity: 0 })
        if (body) gsap.set(body, { width: 0, opacity: 0, overflow: 'hidden' })
        if (icon) gsap.set(icon, { opacity: 0, scale: 0.5 })
      })

      triggerRef.current = ScrollTrigger.create({
        trigger: container,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 0.6,
        onUpdate: (self) => applyFrame(self.progress),
        onEnter: (self) => applyFrame(self.progress),
        onEnterBack: (self) => applyFrame(self.progress),
        onLeave: () => applyFrame(1),
        onLeaveBack: () => applyFrame(0),
      })

      applyFrame(triggerRef.current?.progress ?? 0)
    }, container)

    const refresh = () => ScrollTrigger.refresh()
    const t = window.setTimeout(refresh, 100)
    window.addEventListener('load', refresh)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener('load', refresh)
      triggerRef.current = null
      ctx.revert()
    }
  }, [enabled, reduced])

  return containerRef
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true })

type AnimationConfig = {
  pin: boolean
  scrollDistance: string
  scrub: number
  gatherEnd: number
  holdEnd: number
  scatterEnd: number
  travelMin: number
  travelMultiplier: number
  travelMax: number
  cardFullWidth: number
  start: string
}

function getDesktopConfig(): AnimationConfig {
  return {
    pin: false,
    scrollDistance: 'bottom 20%',
    scrub: 1.35,
    gatherEnd: 0.48,
    holdEnd: 0.56,
    scatterEnd: 0.84,
    travelMin: 120,
    travelMultiplier: 0.12,
    travelMax: 200,
    cardFullWidth: 300,
    start: 'top 80%',
  }
}

function getMobileConfig(container: HTMLElement): AnimationConfig {
  const column = container.querySelector<HTMLElement>('ul')
  const columnWidth = column?.clientWidth ?? window.innerWidth * 0.42
  const cardFullWidth = Math.max(96, columnWidth - 28)

  return {
    pin: false,
    scrollDistance: 'bottom 15%',
    scrub: 0.85,
    gatherEnd: 0.58,
    holdEnd: 0.68,
    scatterEnd: 0.9,
    travelMin: 0,
    travelMultiplier: 0,
    travelMax: 0,
    cardFullWidth,
    start: 'top 88%',
  }
}

function travelDistance(config: AnimationConfig): number {
  return Math.max(config.travelMin, Math.min(window.innerWidth * config.travelMultiplier, config.travelMax))
}

function scatterX(side: string, config: AnimationConfig): number {
  const travel = travelDistance(config)
  return side === 'left' ? -travel : travel
}

function easeApproach(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function easeDepart(t: number): number {
  return t * t * t * t
}

type CardFrame = {
  x: number
  width: number
  opacity: number
  iconOpacity: number
  scale: number
}

function sharedCardProgress(scrollProgress: number, config: AnimationConfig): CardFrame {
  const { gatherEnd, holdEnd, scatterEnd } = config

  if (scrollProgress <= 0) {
    return { x: 0, width: 0, opacity: 0, iconOpacity: 0, scale: 0.9 }
  }

  if (scrollProgress < gatherEnd) {
    const raw = scrollProgress / gatherEnd
    const approach = easeApproach(raw)
    const reveal = easeApproach(Math.max(0, (raw - 0.18) / 0.82))
    return {
      x: approach,
      width: reveal,
      opacity: Math.min(1, approach * 0.55 + reveal * 0.45),
      iconOpacity: reveal,
      scale: 0.9 + approach * 0.1,
    }
  }

  if (scrollProgress < holdEnd) {
    return { x: 1, width: 1, opacity: 1, iconOpacity: 1, scale: 1 }
  }

  if (scrollProgress < scatterEnd) {
    const t = easeDepart((scrollProgress - holdEnd) / (scatterEnd - holdEnd))
    return {
      x: 1 - t,
      width: 1 - t,
      opacity: 1 - t,
      iconOpacity: 1 - t,
      scale: 1 - t * 0.1,
    }
  }

  return { x: 0, width: 0, opacity: 0, iconOpacity: 0, scale: 0.9 }
}

function setupAnimation(container: HTMLElement, config: AnimationConfig) {
  const cards = gsap.utils.toArray<HTMLElement>('[data-concern-card]', container)
  if (cards.length === 0) return () => {}

  const applyFrame = (scrollProgress: number) => {
    const frame = sharedCardProgress(scrollProgress, config)

    cards.forEach((card) => {
      const side = card.dataset.side === 'right' ? 'right' : 'left'
      const sx = scatterX(side, config)
      const body = card.querySelector<HTMLElement>('.concern-card-body')
      const icon = card.querySelector<HTMLElement>('[data-concern-icon]')

      if (scrollProgress >= config.scatterEnd) {
        gsap.set(card, { clearProps: 'transform,opacity' })
        if (body) gsap.set(body, { clearProps: 'width,opacity', width: 'auto' })
        if (icon) gsap.set(icon, { clearProps: 'transform,opacity' })
        return
      }

      gsap.set(card, {
        x: sx * (1 - frame.x),
        opacity: frame.opacity,
        scale: frame.scale,
        transformOrigin: side === 'left' ? 'center right' : 'center left',
      })
      if (body) {
        gsap.set(body, {
          width: frame.width * config.cardFullWidth,
          opacity: Math.min(1, frame.opacity * 1.15),
        })
      }
      if (icon) {
        gsap.set(icon, { opacity: frame.iconOpacity, scale: 0.55 + frame.iconOpacity * 0.45 })
      }
    })
  }

  cards.forEach((card) => {
    const side = card.dataset.side === 'right' ? 'right' : 'left'
    const body = card.querySelector<HTMLElement>('.concern-card-body')
    const icon = card.querySelector<HTMLElement>('[data-concern-icon]')
    gsap.set(card, {
      x: scatterX(side, config),
      opacity: 0,
      scale: 0.9,
      transformOrigin: side === 'left' ? 'center right' : 'center left',
    })
    if (body) gsap.set(body, { width: 0, opacity: 0, overflow: 'hidden' })
    if (icon) gsap.set(icon, { opacity: 0, scale: 0.5 })
  })

  const trigger = ScrollTrigger.create({
    trigger: container,
    start: config.start,
    end: config.scrollDistance,
    pin: config.pin,
    pinSpacing: config.pin,
    scrub: config.scrub,
    anticipatePin: config.pin ? 1 : 0,
    invalidateOnRefresh: true,
    onUpdate: (self) => applyFrame(self.progress),
    onEnter: (self) => applyFrame(self.progress),
    onEnterBack: (self) => applyFrame(self.progress),
    onLeave: () => applyFrame(1),
    onLeaveBack: () => applyFrame(0),
  })

  applyFrame(trigger.progress)

  return () => {
    trigger.kill()
    cards.forEach((card) => {
      gsap.set(card, { clearProps: 'transform,opacity' })
      const body = card.querySelector<HTMLElement>('.concern-card-body')
      const icon = card.querySelector<HTMLElement>('[data-concern-icon]')
      if (body) gsap.set(body, { clearProps: 'width,opacity' })
      if (icon) gsap.set(icon, { clearProps: 'transform,opacity' })
    })
  }
}

export function useConcernsGatherAnimation(enabled = true) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container || !enabled) return

    const cards = gsap.utils.toArray<HTMLElement>('[data-concern-card]', container)

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
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => setupAnimation(container, getDesktopConfig()))

      mm.add('(max-width: 767px)', () => setupAnimation(container, getMobileConfig(container)))
    }, container)

    const refresh = () => ScrollTrigger.refresh()
    const t = window.setTimeout(refresh, 100)
    window.addEventListener('load', refresh)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [enabled, reduced])

  return containerRef
}

import { serviceStacks } from '../../data/serviceStacks'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useI18n } from '../../i18n'
import { SectionTitle } from '../ui/SectionTitle'

export function ServiceStackSection() {
  const { dict } = useI18n()
  const ref = useScrollReveal<HTMLElement>({ staggerMs: 50 })

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 md:px-6">
      <SectionTitle
        en={dict.blog.stack.en}
        ja={dict.blog.stack.ja}
        align="center"
      />
      <p className="-mt-6 mb-10 text-center text-sm leading-relaxed text-navy-700/75 md:mb-12 md:text-base">
        {dict.blog.stack.subtitle}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.services.items.map((service) => {
          const stack = serviceStacks[service.number] ?? []
          return (
            <article
              key={service.number}
              className="scroll-reveal flex flex-col rounded-2xl border border-sand-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-5"
            >
              <div className="flex items-start gap-3">
                <span className="font-display text-lg font-bold leading-none text-coral-500">
                  {service.number}
                </span>
                <h3 className="min-w-0 flex-1 text-sm font-semibold leading-snug text-navy-900 md:text-[0.9375rem]">
                  {service.title}
                </h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-aizome-200/80 bg-aizome-50 px-2.5 py-0.5 text-[11px] font-medium text-navy-800 md:text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

import { PageHero } from '../components/layout/PageHero'
import { Button } from '../components/ui/Button'
import { useI18n } from '../i18n'

export function ContactPage() {
  const { dict } = useI18n()

  return (
    <>
      <PageHero
        en={dict.contact.page.en}
        ja={dict.contact.page.ja}
        breadcrumbs={[{ label: dict.contact.page.ja }]}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              alert(dict.contact.success)
            }}
          >
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-navy-800">
                {dict.contact.company}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-sand-200 px-4 py-3 text-sm focus:border-coral-500 focus:outline-none focus:ring-2 focus:ring-coral-500/20"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-800">
                {dict.contact.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-sand-200 px-4 py-3 text-sm focus:border-coral-500 focus:outline-none focus:ring-2 focus:ring-coral-500/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-800">
                {dict.contact.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-sand-200 px-4 py-3 text-sm focus:border-coral-500 focus:outline-none focus:ring-2 focus:ring-coral-500/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy-800">
                {dict.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-xl border border-sand-200 px-4 py-3 text-sm focus:border-coral-500 focus:outline-none focus:ring-2 focus:ring-coral-500/20"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full justify-center">
              {dict.common.submit}
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { footerRoutes } from '../../data/navigation'
import { useI18n } from '../../i18n'
import { Button } from '../ui/Button'

export function GlobalFooter() {
  const { dict } = useI18n()

  return (
    <footer className="bg-navy-950 text-white/80">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex w-full items-center justify-center gap-2 border-b border-white/10 py-4 text-sm transition-colors hover:bg-white/5 hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        {dict.common.backToTop}
      </button>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-coral-400">{dict.cta.labelEn}</p>
            <p className="mt-2 text-2xl font-bold text-white">{dict.cta.title}</p>
            <p className="mt-4 text-xl font-semibold text-white">
              <a href="tel:03-1234-5678" className="hover:text-coral-400">03-1234-5678</a>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">{dict.common.freeConsultShort}</Button>
              <Button href="https://www.chatwork.com" variant="secondary" className="!border-white/30 !text-white hover:!bg-white hover:!text-navy-900">
                ChatWork
              </Button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">{dict.common.office}</p>
            <address className="mt-3 not-italic text-sm leading-relaxed">
              <p>{dict.common.tokyoOffice}</p>
              <p>東京都渋谷区〇〇 1-2-3 〇〇ビル 5F</p>
              <p className="mt-3">{dict.common.osakaOffice}</p>
              <p>大阪府大阪市北区〇〇 4-5-6</p>
            </address>
            <a href="https://nippon-systems.example" className="mt-4 inline-block text-sm text-coral-400 hover:underline">
              {dict.common.officialSite}
            </a>
          </div>

          <div>
            <p className="font-semibold text-white">{dict.common.sitemap}</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {footerRoutes.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="transition-colors hover:text-coral-400">
                    {dict.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/40">
          <p>{dict.footer.seo}</p>
          <p className="mt-4">{dict.footer.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
        </div>
      </div>
    </footer>
  )
}

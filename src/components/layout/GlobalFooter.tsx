import { Link } from 'react-router-dom'
import { footerRoutes } from '../../data/navigation'
import { useI18n } from '../../i18n'

export function GlobalFooter() {
  const { dict } = useI18n()

  return (
    <footer className="page-section overflow-x-clip bg-navy-950 text-white/80">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex w-full items-center justify-center gap-2 border-b border-white/10 py-4 text-sm transition-colors hover:bg-white/5 hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        {dict.common.backToTop}
      </button>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-semibold text-white">{dict.common.office}</p>
            <address className="mt-3 not-italic text-sm leading-relaxed">
              <p>{dict.common.tokyoOffice}</p>
              <p>東京都渋谷区〇〇 1-2-3 〇〇ビル 5F</p>
              <p className="mt-3">{dict.common.osakaOffice}</p>
              <p>大阪府大阪市北区〇〇 4-5-6</p>
            </address>
            <Link
              to="/chatwork"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 hover:-translate-y-0.5"
            >
              <span className="whitespace-nowrap">{dict.cta.chatwork}</span>
            </Link>
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

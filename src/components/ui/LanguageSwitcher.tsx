import { useI18n } from '../../i18n'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useI18n()

  return (
    <div
      className={`flex items-center rounded-full border border-white/20 bg-white/5 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label={locale === 'ja' ? '言語切替' : 'Language'}
    >
      <button
        type="button"
        onClick={() => setLocale('ja')}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === 'ja' ? 'bg-coral-500 text-white' : 'text-white/70 hover:text-white'
        }`}
        aria-pressed={locale === 'ja'}
      >
        JP
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === 'en' ? 'bg-coral-500 text-white' : 'text-white/70 hover:text-white'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}

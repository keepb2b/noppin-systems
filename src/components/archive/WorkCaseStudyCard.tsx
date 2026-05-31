type Props = {
  serviceNumber: string
  serviceTitle?: string
  title: string
  challenge: string
  technicalDifficulty: string
  solution: string
  result: string
  labels: {
    highDifficulty: string
    challenge: string
    technicalDifficulty: string
    solution: string
    result: string
  }
  compact?: boolean
}

function toBulletItems(text: string) {
  return text
    .split('\n')
    .map((line) => line.replace(/\*\*/g, '').trim())
    .filter(Boolean)
}

function BulletBlock({ label, text, clamp }: { label: string; text: string; clamp?: boolean }) {
  const items = toBulletItems(text)

  return (
    <div>
      <p className="text-xs font-bold tracking-wide text-coral-500 uppercase">{label}</p>
      {items.length > 1 ? (
        <ul className={`mt-2 list-disc space-y-1.5 pl-5 text-navy-800/90 ${clamp ? 'line-clamp-4' : ''}`}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className={`mt-1 text-navy-800/90 ${clamp ? 'line-clamp-3' : ''}`}>
          {items[0]?.replace(/\*\*/g, '')}
        </p>
      )}
    </div>
  )
}

export function WorkCaseStudyCard({
  serviceNumber,
  serviceTitle,
  title,
  challenge,
  technicalDifficulty,
  solution,
  result,
  labels,
  compact = false,
}: Props) {
  return (
    <article
      className="scroll-reveal group overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      data-cursor-hover
    >
      <div className="border-b border-sand-100 bg-gradient-to-br from-navy-800 to-navy-700 px-5 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-coral-500 px-3 py-1 text-xs font-bold text-white">
            {serviceNumber}
          </span>
          <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-white/90">
            {labels.highDifficulty}
          </span>
          {serviceTitle && (
            <span className="text-xs font-medium text-white/80">{serviceTitle}</span>
          )}
        </div>
        <h3 className="mt-3 font-semibold text-white">{title}</h3>
      </div>
      <div className={`space-y-4 p-5 ${compact ? 'text-sm' : ''}`}>
        <BulletBlock label={labels.challenge} text={challenge} clamp={compact} />
        {!compact && (
          <>
            <BulletBlock label={labels.technicalDifficulty} text={technicalDifficulty} />
            <BulletBlock label={labels.solution} text={solution} />
            <BulletBlock label={labels.result} text={result} />
          </>
        )}
      </div>
    </article>
  )
}

import { useCountUp } from '../../hooks/useCountUp'

type Props = {
  value: number
  suffix: string
  label: string
  unit: string
}

export function AchievementNumber({ value, suffix, label, unit }: Props) {
  const { ref, display } = useCountUp(value)

  return (
    <div ref={ref} className="scroll-reveal rounded-2xl border border-sand-200 bg-white p-6 text-center shadow-sm md:p-8">
      <p className="font-display text-3xl font-bold text-navy-900 md:text-5xl">
        {display.toLocaleString()}
        <span className="text-coral-500">{suffix}</span>
      </p>
      <p className="mt-1 text-xs text-navy-700/60">{unit}</p>
      <p className="mt-3 text-sm font-medium text-navy-800">{label}</p>
    </div>
  )
}

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { SiteEntrance } from '../components/effects/SiteEntrance'

const STORAGE_KEY = 'nippon-systems-entrance-seen'

type EntranceContextValue = {
  complete: boolean
}

const EntranceContext = createContext<EntranceContextValue>({ complete: true })

function shouldSkipEntrance(): boolean {
  if (typeof window === 'undefined') return true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  return sessionStorage.getItem(STORAGE_KEY) === '1'
}

export function EntranceProvider({ children }: { children: React.ReactNode }) {
  const [complete, setComplete] = useState(shouldSkipEntrance)

  const handleComplete = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setComplete(true)
  }, [])

  const value = useMemo(() => ({ complete }), [complete])

  return (
    <EntranceContext.Provider value={value}>
      {children}
      {!complete && <SiteEntrance onComplete={handleComplete} />}
    </EntranceContext.Provider>
  )
}

export function useEntranceComplete() {
  return useContext(EntranceContext).complete
}

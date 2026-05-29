import { Outlet } from 'react-router-dom'
import { GlobalHeader } from './GlobalHeader'
import { GlobalFooter } from './GlobalFooter'
import { FixedContactCTA } from './FixedContactCTA'

export function Layout() {
  return (
    <>
      <GlobalHeader />
      <main>
        <Outlet />
      </main>
      <GlobalFooter />
      <FixedContactCTA />
    </>
  )
}

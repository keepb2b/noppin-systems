import { Outlet } from 'react-router-dom'
import { GlobalHeader } from './GlobalHeader'
import { GlobalFooter } from './GlobalFooter'
import { FixedContactCTA } from './FixedContactCTA'
import { CustomCursor } from '../effects/CustomCursor'

export function Layout() {
  return (
    <>
      <CustomCursor />
      <GlobalHeader />
      <main>
        <Outlet />
      </main>
      <GlobalFooter />
      <FixedContactCTA />
    </>
  )
}

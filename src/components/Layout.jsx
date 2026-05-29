import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import { pageTransition } from '../data/constants'

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className="flex-1 pt-16 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageTransition} className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

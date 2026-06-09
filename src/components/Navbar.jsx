import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart, Star, Cloud, LogOut } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../data/constants'
import { useAuth, getFirstName } from '../context/AuthContext'
import { Button } from './ui/shared'

export default function Navbar({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()
  const firstName = user ? getFirstName(user.name) : ''

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, setMobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleLogout = () => {
    setMobileOpen(false)
    logout()
  }

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors relative py-1 ${
      isActive
        ? 'text-alma-purple after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-alma-purple after:rounded-full'
        : 'text-alma-text/80 hover:text-alma-purple'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 w-full px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
      isActive
        ? 'bg-white text-alma-purple shadow-md shadow-violet-100/60 border border-violet-200/60'
        : 'bg-white/40 text-alma-text hover:bg-white/70 hover:text-alma-purple border border-transparent'
    }`

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-white/75 backdrop-blur-xl shadow-sm shadow-violet-100/50 border-b border-violet-100/50'
            : 'bg-white/30 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center gap-2 sm:gap-3 h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/images/logo.png"
              alt="Alma Infantil"
              className="h-9 sm:h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {user && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 min-w-0 flex justify-center md:justify-start md:pl-2"
            >
              <p className="text-xs sm:text-sm font-semibold text-alma-text truncate text-center md:text-left">
                Bienvenido/a{' '}
                <span className="text-alma-purple">{firstName}</span>
              </p>
            </motion.div>
          )}

          {!user && <div className="flex-1 md:hidden" />}

          <div className="hidden md:flex items-center gap-6 shrink-0 ml-auto">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={navLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
            {!user && (
              <Button to="/login" variant="secondary" className="!px-5 !py-2.5 !text-sm">
                Iniciar Sesión
              </Button>
            )}
            {user && (
              <button
                type="button"
                onClick={logout}
                className="text-sm font-medium text-alma-text-muted hover:text-alma-purple transition-colors cursor-pointer whitespace-nowrap"
              >
                Cerrar sesión
              </button>
            )}
            <Button href={CONTACT.whatsapp} variant="whatsapp" external className="!px-5 !py-2.5 !text-sm">
              WhatsApp
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden relative z-[60] w-11 h-11 flex items-center justify-center rounded-xl bg-alma-purple-light/80 text-alma-purple cursor-pointer hover:bg-violet-200/80 transition-colors shrink-0 ml-auto md:ml-0"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] md:hidden bg-gradient-to-br from-alma-purple/15 via-alma-pink/10 to-alma-sky/15 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-16 bottom-0 z-[58] md:hidden overflow-y-auto"
            >
              <div className="relative h-full px-4 py-6 flex flex-col">
                <Cloud className="absolute top-8 right-8 w-8 h-8 text-alma-sky/30 pointer-events-none" />
                <Star className="absolute top-24 left-6 w-5 h-5 text-alma-yellow/40 pointer-events-none" />
                <Heart className="absolute bottom-32 right-10 w-6 h-6 text-alma-pink/30 pointer-events-none" />

                <div className="flex flex-col gap-3 max-w-md mx-auto w-full flex-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <NavLink
                        to={link.path}
                        end={link.end}
                        className={mobileNavLinkClass}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}

                  {!user && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Button
                        to="/login"
                        variant="secondary"
                        className="w-full !py-4 !text-base"
                        onClick={() => setMobileOpen(false)}
                      >
                        Iniciar Sesión
                      </Button>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-2"
                  >
                    <Button
                      href={CONTACT.whatsapp}
                      variant="whatsapp"
                      external
                      className="w-full !py-4 !text-base"
                      onClick={() => setMobileOpen(false)}
                    >
                      WhatsApp
                    </Button>
                  </motion.div>
                </div>

                {user && (
                  <motion.button
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full max-w-md mx-auto mt-6 py-3 text-sm font-medium text-alma-text-muted hover:text-alma-purple transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Cerrar sesión
                  </motion.button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

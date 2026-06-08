import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, Star, Heart, Sparkles, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { DecorativeBlob, FloatingIcon } from '../components/ui/shared'

export default function Welcome() {
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      setError('Por favor completá tu nombre y email para continuar.')
      return
    }
    setError('')
    login(name, email)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-alma-cream px-4 py-10">
      <DecorativeBlob className="w-72 h-72 -top-20 -left-20" color="bg-alma-pink/25" />
      <DecorativeBlob className="w-96 h-96 top-1/3 -right-32" color="bg-alma-sky/20" />
      <DecorativeBlob className="w-64 h-64 bottom-10 left-1/4" color="bg-alma-purple/15" />

      <FloatingIcon icon={Cloud} className="top-24 left-[10%] text-alma-sky/50" />
      <FloatingIcon icon={Star} className="top-40 right-[12%] text-alma-yellow/60" delay={0.5} />
      <FloatingIcon icon={Heart} className="bottom-32 left-[12%] text-alma-pink/45" delay={1} />
      <FloatingIcon icon={Sparkles} className="top-56 right-[30%] text-alma-purple/35" delay={1.5} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-violet-200/40 border border-violet-100/60 p-6 sm:p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/images/logo.png"
              alt="Alma Infantil"
              className="w-36 sm:w-44 h-auto drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-alma-text mb-3">
              Bienvenido/a a Alma Infantil
            </h1>
            <p className="text-alma-text-muted text-sm sm:text-base leading-relaxed">
              Ingresá para comenzar tu experiencia de Crianza Sincronizada.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="welcome-name" className="block text-sm font-semibold text-alma-text mb-1.5">
                Nombre
              </label>
              <input
                id="welcome-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                autoComplete="name"
                className="w-full px-4 py-3.5 rounded-xl border border-violet-200/60 bg-alma-cream/50 text-alma-text placeholder:text-alma-text-muted/50 focus:outline-none focus:ring-2 focus:ring-alma-purple/30 focus:border-alma-purple/40 transition-all text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="welcome-email" className="block text-sm font-semibold text-alma-text mb-1.5">
                Email
              </label>
              <input
                id="welcome-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                autoComplete="email"
                className="w-full px-4 py-3.5 rounded-xl border border-violet-200/60 bg-alma-cream/50 text-alma-text placeholder:text-alma-text-muted/50 focus:outline-none focus:ring-2 focus:ring-alma-purple/30 focus:border-alma-purple/40 transition-all text-sm sm:text-base"
              />
            </div>

            {error && (
              <p className="text-sm text-rose-500 font-medium text-center">{error}</p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-alma-purple to-violet-500 text-white shadow-lg shadow-violet-300/40 hover:shadow-xl hover:shadow-violet-300/50 transition-all cursor-pointer mt-2"
            >
              Ingresar
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  )
}

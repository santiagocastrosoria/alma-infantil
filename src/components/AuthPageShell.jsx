import { motion } from 'framer-motion'
import { Cloud, Star, Heart, Sparkles } from 'lucide-react'
import { DecorativeBlob, FloatingIcon } from './ui/shared'

export default function AuthPageShell({ children }) {
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
          {children}
        </div>
      </motion.div>
    </div>
  )
}

const inputClass =
  'w-full px-4 py-3.5 rounded-xl border border-violet-200/60 bg-alma-cream/50 text-alma-text placeholder:text-alma-text-muted/50 focus:outline-none focus:ring-2 focus:ring-alma-purple/30 focus:border-alma-purple/40 transition-all text-sm sm:text-base'

export function AuthInput({ id, label, type = 'text', value, onChange, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-alma-text mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  )
}

export function AuthSubmitButton({ children }) {
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-alma-purple to-violet-500 text-white shadow-lg shadow-violet-300/40 hover:shadow-xl hover:shadow-violet-300/50 transition-all cursor-pointer mt-2"
    >
      {children}
    </motion.button>
  )
}

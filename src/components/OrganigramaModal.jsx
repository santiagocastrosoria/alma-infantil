import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, GraduationCap, Laptop, Megaphone } from 'lucide-react'
import { ORGANIGRAM_INTRO, ORGANIGRAM_AREAS, fadeUp } from '../data/constants'

const AREA_ICONS = [GraduationCap, Laptop, Megaphone]

export default function OrganigramaModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const introParagraphs = ORGANIGRAM_INTRO.split('\n\n')

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-alma-purple/20 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl shadow-violet-300/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-violet-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-alma-text">
                Organigrama — Alma Infantil
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-alma-purple-light flex items-center justify-center text-alma-purple hover:bg-violet-200 transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6 overflow-auto max-h-[calc(92vh-72px)]">
              <img
                src="/organigrama.png"
                alt="Organigrama de Alma Infantil"
                className="w-full h-auto rounded-2xl shadow-lg mb-8 md:mb-10"
              />

              <div className="border-t border-violet-100 pt-8 md:pt-10">
                <motion.h4
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-alma-text text-center mb-5 md:mb-6"
                >
                  Distribución de la Organización
                </motion.h4>

                <div className="max-w-3xl mx-auto space-y-4 text-alma-text-muted text-sm sm:text-base leading-relaxed text-center mb-8 md:mb-10">
                  {introParagraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {ORGANIGRAM_AREAS.map((area, i) => {
                    const Icon = AREA_ICONS[i]
                    return (
                      <motion.div
                        key={area.title}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        whileHover={{ y: -4 }}
                        className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${area.color} border ${area.border} shadow-sm hover:shadow-lg transition-shadow`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center mb-4 shadow-sm ${area.iconColor}`}
                        >
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <h5 className="font-bold text-alma-text text-sm sm:text-base mb-2 leading-snug">
                          {area.title}
                        </h5>
                        <p className="text-alma-text-muted text-xs sm:text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

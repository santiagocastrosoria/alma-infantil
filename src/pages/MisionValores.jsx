import { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Users } from 'lucide-react'
import { CORE_VALUES, staggerContainer } from '../data/constants'
import {
  Button,
  CoreValueCard,
  DecorativeBlob,
  FadeIn,
  SectionTitle,
} from '../components/ui/shared'
import OrganigramaModal from '../components/OrganigramaModal'

export default function MisionValores() {
  const [organigramaOpen, setOrganigramaOpen] = useState(false)

  return (
    <>
      <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
        <DecorativeBlob className="w-80 h-80 left-1/2 -translate-x-1/2 -top-20" color="bg-alma-yellow/15" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 relative">
          <SectionTitle
            badge="Propósito"
            title="Misión, Visión y Valores"
            subtitle="El corazón de Alma Infantil: guiar cada decisión con amor, formación y confianza."
          />

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 md:mb-16">
            <FadeIn>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-alma-purple-light to-white border border-violet-200/50 shadow-lg shadow-violet-100/30"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-alma-purple/15 flex items-center justify-center text-alma-purple mb-5 sm:mb-6">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-alma-text mb-3 sm:mb-4">
                  Misión
                </h3>
                <p className="text-alma-text-muted leading-relaxed text-sm sm:text-base">
                  Brindar formación, acompañamiento y oportunidades de desarrollo a personas
                  vinculadas al cuidado infantil, promoviendo un entorno más seguro, consciente y
                  saludable para niños, familias y cuidadoras a través de la educación, la contención
                  emocional y el fortalecimiento de vínculos humanos.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-alma-teal-light to-white border border-teal-200/50 shadow-lg shadow-teal-100/30"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-alma-teal/15 flex items-center justify-center text-alma-teal mb-5 sm:mb-6">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-alma-text mb-3 sm:mb-4">
                  Visión
                </h3>
                <p className="text-alma-text-muted leading-relaxed text-sm sm:text-base">
                  Ser la principal comunidad educativa y profesional de cuidado infantil en
                  Latinoamérica, reconocida por transformar la manera en que se entiende y valora el
                  acompañamiento infantil mediante la innovación, la tecnología y el impacto social
                  positivo.
                </p>
              </motion.div>
            </FadeIn>
          </div>

          <FadeIn>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-alma-text text-center mb-8 md:mb-10">
              Nuestros Valores
            </h3>
          </FadeIn>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 mb-12 md:mb-16"
          >
            {CORE_VALUES.map((val, i) => (
              <CoreValueCard key={val.title} {...val} index={i} />
            ))}
          </motion.div>

          <FadeIn className="flex justify-center pb-8 md:pb-12">
            <Button variant="ghost" onClick={() => setOrganigramaOpen(true)} className="w-full sm:w-auto">
              <Users className="w-5 h-5" />
              ORGANIGRAMA
            </Button>
          </FadeIn>
        </div>
      </div>

      <OrganigramaModal isOpen={organigramaOpen} onClose={() => setOrganigramaOpen(false)} />
    </>
  )
}

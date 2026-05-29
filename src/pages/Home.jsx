import { motion } from 'framer-motion'
import { Heart, Star, Cloud, Sparkles, ArrowRight, Leaf } from 'lucide-react'
import { HIGHLIGHT_VALUES, STATS, staggerContainer } from '../data/constants'
import FooterBasic from '../components/FooterBasic'
import {
  Button,
  DecorativeBlob,
  FadeIn,
  FloatingIcon,
  ImageFrame,
  SectionTitle,
  StatItem,
  ValueCard,
} from '../components/ui/shared'

const INSTITUTIONAL_TEXT = [
  'Alma Infantil existe para transformar y profesionalizar el sector del cuidado infantil, creando un ecosistema seguro, humano y confiable donde familias y acompañantes infantiles puedan conectarse de manera consciente y responsable.',
  'La organización nace con el propósito de brindar mayor seguridad, capacitación y respaldo tanto a quienes trabajan en el cuidado de niños como a las familias que buscan un acompañamiento de calidad para sus hijos.',
  'A través de formación profesional, herramientas de crianza consciente, validación de perfiles y espacios de contención emocional, Alma Infantil busca elevar los estándares del cuidado infantil y generar un impacto positivo en el desarrollo emocional, afectivo y educativo de las infancias.',
  'Nuestro objetivo es construir una comunidad basada en la confianza, la empatía, el aprendizaje continuo y el bienestar integral de cada niño, familia y profesional que forma parte de este camino.',
]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center py-10 md:py-16">
        <DecorativeBlob className="w-72 h-72 -top-20 -left-20" color="bg-alma-pink/20" />
        <DecorativeBlob className="w-96 h-96 top-1/3 -right-32" color="bg-alma-sky/20" />
        <DecorativeBlob className="w-64 h-64 bottom-20 left-1/4" color="bg-alma-purple/15" />

        <FloatingIcon icon={Cloud} className="top-32 left-[8%] text-alma-sky/50" />
        <FloatingIcon icon={Star} className="top-48 right-[12%] text-alma-yellow/60" delay={0.5} />
        <FloatingIcon icon={Heart} className="bottom-40 left-[15%] text-alma-pink/50" delay={1} />
        <FloatingIcon icon={Sparkles} className="top-64 left-[45%] text-alma-purple/40" delay={1.5} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6 md:mb-8 flex justify-center lg:justify-start"
              >
                <img
                  src="/images/logo.png"
                  alt="Alma Infantil — Logo"
                  className="w-40 sm:w-48 md:w-64 lg:w-72 h-auto drop-shadow-lg"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-alma-text leading-[1.15] mb-5 md:mb-6"
              >
                Transformando el cuidado infantil con{' '}
                <span className="bg-gradient-to-r from-alma-purple via-alma-pink to-alma-teal bg-clip-text text-transparent">
                  profesionalismo, empatía y confianza.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-sm sm:text-base md:text-lg text-alma-text-muted leading-relaxed mb-7 md:mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Creamos un ecosistema seguro y humano donde familias y acompañantes infantiles
                pueden conectarse de manera consciente y responsable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button to="/servicios" className="w-full sm:w-auto">
                  Conocer más
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button to="/contacto" variant="secondary" className="w-full sm:w-auto">
                  Contactanos
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative max-w-md lg:max-w-lg mx-auto w-full"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-200/40 aspect-[4/5]">
                <ImageFrame
                  src="/images/family-laughing.png"
                  alt="Familia feliz — bienestar infantil"
                  overlay
                  className="h-full"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block"
              >
                <ImageFrame src="/images/caregiver-child.png" alt="Cuidado profesional" className="h-full" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-alma-yellow/30 backdrop-blur-sm flex items-center justify-center shadow-lg"
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-alma-yellow fill-alma-yellow/30" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institutional */}
      <section className="relative py-16 md:py-24 bg-alma-beige overflow-hidden">
        <DecorativeBlob className="w-80 h-80 -right-40 top-0" color="bg-alma-teal/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <div className="space-y-4 md:space-y-5">
                <span className="inline-flex items-center gap-2 text-alma-purple font-bold text-xs sm:text-sm uppercase tracking-widest">
                  <Leaf className="w-4 h-4" />
                  Quiénes somos
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-alma-text leading-tight">
                  Un ecosistema de confianza para el cuidado infantil
                </h2>
                {INSTITUTIONAL_TEXT.map((text, i) => (
                  <p key={i} className="text-alma-text-muted leading-relaxed text-sm md:text-base">
                    {text}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-md sm:max-w-lg mx-auto lg:max-w-none lg:mx-0">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                  <ImageFrame src="/images/hero-family.png" alt="Familia unida" className="h-full" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] mt-8 sm:mt-10">
                  <ImageFrame src="/images/baking.png" alt="Conexión emocional" className="h-full" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <SectionTitle
            badge="Nuestros pilares"
            title="Construimos confianza en cada detalle"
            subtitle="Cuatro valores fundamentales que guían cada acción de Alma Infantil."
            compact
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {HIGHLIGHT_VALUES.map((item) => (
              <ValueCard key={item.title} {...item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-violet-100/50 border border-violet-100/50 p-4 md:p-8"
          >
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} {...stat} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <FooterBasic />
    </div>
  )
}

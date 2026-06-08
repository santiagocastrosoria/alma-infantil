import { motion } from 'framer-motion'
import {
  Heart,
  Cloud,
  Sparkles,
  UserPlus,
  ClipboardList,
  Route,
  LineChart,
  Smile,
  Baby,
  Award,
  Brain,
  MessageCircle,
  RefreshCw,
  Shield,
  Plane,
} from 'lucide-react'
import {
  SERVICES,
  GALLERY_IMAGES,
  STATS,
  staggerContainer,
  scaleIn,
  SERVICIOS_TEXT,
  HOW_IT_WORKS_STEPS,
  HOW_IT_WORKS_CLOSING,
  PLAN_VUELO_TEXT,
  FORMATION_TEXT,
  FORMATION_TOPICS,
  fadeUp,
} from '../data/constants'
import {
  DecorativeBlob,
  FadeIn,
  FloatingIcon,
  ImageFrame,
  SectionTitle,
  ServiceCard,
  StatItem,
} from '../components/ui/shared'

const STEP_ICONS = [UserPlus, ClipboardList, Route, LineChart, Smile]

const TOPIC_ICONS = [
  Baby,
  Heart,
  Brain,
  MessageCircle,
  RefreshCw,
  Shield,
  Sparkles,
  Plane,
]

function HowItWorksSection() {
  return (
    <section className="mb-16 md:mb-24">
      <SectionTitle
        badge="Proceso"
        title="¿Cómo funciona Alma Infantil?"
        subtitle="Un camino simple para una crianza en equipo."
        compact
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-alma-purple/20 via-alma-pink/30 to-alma-teal/20" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {HOW_IT_WORKS_STEPS.map((item, i) => {
            const Icon = STEP_ICONS[i]
            return (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="relative flex flex-col items-center text-center p-5 sm:p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-violet-100/60 shadow-sm hover:shadow-xl hover:shadow-violet-100/40 transition-all"
              >
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-alma-purple to-violet-500 flex items-center justify-center text-white shadow-lg shadow-violet-200/50">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-alma-yellow text-alma-text text-xs font-bold flex items-center justify-center shadow-md">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-alma-text text-sm sm:text-base mb-2">{item.title}</h3>
                <p className="text-alma-text-muted text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <FadeIn className="max-w-3xl mx-auto mt-10 md:mt-12">
        <p className="text-center text-alma-text-muted text-sm md:text-base leading-relaxed px-4">
          {HOW_IT_WORKS_CLOSING}
        </p>
      </FadeIn>
    </section>
  )
}

function PlanVueloSection() {
  return (
    <section className="mb-16 md:mb-24">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-alma-purple via-violet-600 to-purple-700 p-6 sm:p-8 md:p-12 shadow-2xl shadow-violet-300/30">
        <DecorativeBlob className="w-64 h-64 -right-20 -top-20" color="bg-white/10" />
        <DecorativeBlob className="w-48 h-48 -left-16 bottom-0" color="bg-white/5" />

        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 bg-white/15 text-white backdrop-blur-sm">
              <Plane className="w-3.5 h-3.5" />
              Herramienta principal
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Plan de Vuelo Semanal
            </h2>
            <div className="space-y-4 text-white/85 text-sm md:text-base leading-relaxed">
              {PLAN_VUELO_TEXT.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-violet-100">
              <div className="w-10 h-10 rounded-xl bg-alma-purple/15 flex items-center justify-center text-alma-purple">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-alma-text-muted">Ejemplo semanal</p>
                <p className="font-bold text-alma-text">Plan de Vuelo</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-alma-purple-light/60 border border-violet-200/40">
                <p className="text-xs font-bold uppercase tracking-wider text-alma-purple mb-1">Eje</p>
                <p className="font-bold text-alma-text">Gestión emocional</p>
              </div>

              <div className="p-4 rounded-2xl bg-alma-teal-light/60 border border-teal-200/40">
                <p className="text-xs font-bold uppercase tracking-wider text-alma-teal mb-2">Actividades</p>
                <ul className="space-y-1.5 text-sm text-alma-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-alma-teal shrink-0" />
                    Cuento emocional
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-alma-teal shrink-0" />
                    Juego cooperativo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-alma-teal shrink-0" />
                    Técnica de respiración
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-alma-pink-light/60 border border-pink-200/40">
                <p className="text-xs font-bold uppercase tracking-wider text-alma-pink mb-2">
                  Tips enviados a los padres
                </p>
                <ul className="space-y-1.5 text-sm text-alma-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-alma-pink shrink-0" />
                    Validar emociones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-alma-pink shrink-0" />
                    Preguntas para conversar
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FormacionSection() {
  return (
    <section className="mb-16 md:mb-24">
      <SectionTitle
        badge="Capacitación"
        title="Formación para Acompañantes Infantiles"
        subtitle="Programa ABC de Niñeras con enfoque en Crianza Sincronizada."
        compact
      />

      <FadeIn className="max-w-4xl mx-auto mb-10 md:mb-12">
        <div className="space-y-4 text-alma-text-muted text-sm md:text-base leading-relaxed text-center">
          {FORMATION_TEXT.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </FadeIn>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10"
      >
        {FORMATION_TOPICS.map((topic, i) => {
          const Icon = TOPIC_ICONS[i]
          return (
            <motion.div
              key={topic}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-violet-100/60 shadow-sm hover:shadow-lg hover:shadow-violet-100/40 transition-all text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-alma-purple-light flex items-center justify-center text-alma-purple">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="font-bold text-alma-text text-xs sm:text-sm leading-snug">{topic}</span>
            </motion.div>
          )
        })}
      </motion.div>

      <FadeIn>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-alma-purple-light to-alma-teal-light border border-violet-200/50 shadow-sm">
            <Award className="w-6 h-6 text-alma-purple" />
            <span className="text-sm sm:text-base font-semibold text-alma-text">
              Certificación profesional al finalizar el programa
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default function Servicios() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-alma-cream to-alma-beige min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
      <DecorativeBlob className="w-96 h-96 -left-48 top-1/3" color="bg-alma-pink/15" />
      <DecorativeBlob className="w-72 h-72 -right-32 top-20" color="bg-alma-purple/10" />

      <FloatingIcon icon={Cloud} className="top-28 right-[10%] text-alma-sky/40" delay={0.3} />
      <FloatingIcon icon={Heart} className="bottom-40 left-[8%] text-alma-pink/40" delay={0.8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 relative">
        <SectionTitle
          badge="Servicios"
          title="¿Qué ofrece Alma Infantil?"
          subtitle="Plataforma integral de Crianza Sincronizada para familias y acompañantes infantiles."
        />

        <FadeIn className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="space-y-4 text-alma-text-muted text-sm md:text-base leading-relaxed text-center">
            {SERVICIOS_TEXT.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16 md:mb-24 max-w-5xl mx-auto"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </motion.div>

        <HowItWorksSection />
        <PlanVueloSection />
        <FormacionSection />

        <FadeIn className="mb-14 md:mb-20">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-200/30 aspect-[16/9] sm:aspect-[21/9] max-h-[320px] sm:max-h-none">
            <ImageFrame
              src="/images/training.png"
              alt="Crianza Sincronizada — Plan de Vuelo Semanal"
              overlay
              className="h-full"
            />
          </div>
        </FadeIn>

        <SectionTitle
          badge="Galería"
          title="Momentos que inspiran"
          subtitle="La esencia de nuestra comunidad en cada imagen."
          compact
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-14 md:mb-20"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.alt}
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${
                i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2 aspect-[16/9] md:aspect-auto md:min-h-[280px]' : ''
              }`}
            >
              <ImageFrame src={img.src} alt={img.alt} className="h-full" />
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto">
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
      </div>
    </div>
  )
}

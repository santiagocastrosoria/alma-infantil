import { motion } from 'framer-motion'
import { Heart, Cloud } from 'lucide-react'
import { SERVICES, GALLERY_IMAGES, STATS, staggerContainer, scaleIn } from '../data/constants'
import {
  DecorativeBlob,
  FadeIn,
  FloatingIcon,
  ImageFrame,
  SectionTitle,
  ServiceCard,
  StatItem,
} from '../components/ui/shared'

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
          subtitle="Una plataforma integral de cuidado infantil orientada a conectar familias con acompañantes capacitadas y validadas."
        />

        <FadeIn className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="space-y-4 text-alma-text-muted text-sm md:text-base leading-relaxed text-center">
            <p>
              Alma Infantil ofrece una plataforma integral de cuidado infantil orientada a conectar
              familias con acompañantes infantiles capacitadas y validadas, brindando un servicio
              seguro, confiable y profesional.
            </p>
            <p>
              Además de la intermediación laboral, la organización ofrece programas de formación
              profesional, capacitaciones certificadas, herramientas de crianza consciente,
              acompañamiento emocional y recursos educativos vinculados al desarrollo infantil.
            </p>
            <p>
              Entre sus principales servicios se encuentran la capacitación para niñeras y
              cuidadoras, programas de apoyo para familias, mentorías, comunidad digital, eventos
              presenciales, espacios de networking y asesoramiento para instituciones educativas.
            </p>
            <p>
              Todo el ecosistema está diseñado para mejorar la calidad del cuidado infantil,
              profesionalizar el sector y generar entornos más saludables, seguros y conscientes
              para las infancias.
            </p>
          </div>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 md:mb-20"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </motion.div>

        <FadeIn className="mb-14 md:mb-20">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-200/30 aspect-[16/9] sm:aspect-[21/9] max-h-[320px] sm:max-h-none">
            <ImageFrame
              src="/images/training.png"
              alt="Capacitación profesional — ABC de niñeras"
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

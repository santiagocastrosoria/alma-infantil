import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, Heart, Star, MapPin, Send, MessageCircle } from 'lucide-react'
import { NAV_LINKS, SOCIAL_LINKS, staggerContainer, CONTACT } from '../data/constants'
import { Button, DecorativeBlob, FadeIn, FloatingIcon, SectionTitle } from '../components/ui/shared'

export default function Contacto() {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
      <DecorativeBlob className="w-96 h-96 -left-32 top-20" color="bg-alma-purple/10" />
      <DecorativeBlob className="w-72 h-72 -right-24 bottom-20" color="bg-alma-pink/15" />

      <FloatingIcon icon={Star} className="top-32 right-[12%] text-alma-yellow/40" />
      <FloatingIcon icon={Heart} className="bottom-48 left-[10%] text-alma-pink/35" delay={0.6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 relative">
        <SectionTitle
          badge="Contacto"
          title="Conectemos con confianza"
          subtitle="Estamos aquí para acompañarte. Escribinos y formemos parte juntos de este ecosistema de Crianza Sincronizada."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <FadeIn>
            <div className="h-full p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-alma-purple via-violet-600 to-purple-700 text-white shadow-2xl shadow-violet-300/30 relative overflow-hidden">
              <DecorativeBlob className="w-48 h-48 -right-16 -bottom-16" color="bg-white/10" />

              <img
                src="/images/logo.png"
                alt="Alma Infantil"
                className="h-14 sm:h-16 w-auto mb-6 brightness-110 relative z-10"
              />

              <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                Transformando el cuidado infantil desde el amor, la formación y la confianza.
              </p>

              <div className="mb-6 relative z-10">
                <Button href={CONTACT.whatsapp} variant="whatsapp" external className="w-full !py-4">
                  <MessageCircle className="w-5 h-5" />
                  Escribinos por WhatsApp
                </Button>
              </div>

              <div className="space-y-5 relative z-10">
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-sm sm:text-base">{CONTACT.email}</p>
                  </div>
                </a>

                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">Teléfono</p>
                    <p className="font-semibold text-sm sm:text-base">{CONTACT.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">Ubicación</p>
                    <p className="font-semibold text-sm sm:text-base">{CONTACT.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 relative z-10">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">Redes sociales</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ label, path }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all hover:-translate-y-0.5"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-violet-100/60 shadow-xl shadow-violet-100/40">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-alma-text mb-2">
                Envianos un mensaje
              </h3>
              <p className="text-alma-text-muted text-sm mb-6">
                Completá el formulario y nos pondremos en contacto a la brevedad.
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-alma-text mb-1.5">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3.5 rounded-xl border border-violet-200/60 bg-alma-cream/50 text-alma-text placeholder:text-alma-text-muted/50 focus:outline-none focus:ring-2 focus:ring-alma-purple/30 focus:border-alma-purple/40 transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-alma-text mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-violet-200/60 bg-alma-cream/50 text-alma-text placeholder:text-alma-text-muted/50 focus:outline-none focus:ring-2 focus:ring-alma-purple/30 focus:border-alma-purple/40 transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-alma-text mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3.5 rounded-xl border border-violet-200/60 bg-alma-cream/50 text-alma-text placeholder:text-alma-text-muted/50 focus:outline-none focus:ring-2 focus:ring-alma-purple/30 focus:border-alma-purple/40 transition-all resize-none text-sm sm:text-base"
                  />
                </div>
                <Button variant="primary" className="w-full !py-4">
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </Button>
                <Button href={CONTACT.whatsapp} variant="whatsapp" external className="w-full !py-4">
                  <MessageCircle className="w-4 h-4" />
                  Contactar por WhatsApp
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-12 md:mt-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-alma-text-muted hover:text-alma-purple bg-white/60 hover:bg-alma-purple-light border border-violet-100/60 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </FadeIn>

        <p className="text-center text-alma-text-muted/60 text-xs mt-10 flex items-center justify-center gap-1.5">
          © {new Date().getFullYear()} Alma Infantil. Hecho con{' '}
          <Heart className="w-3.5 h-3.5 text-alma-pink fill-alma-pink" /> para las infancias
        </p>
      </div>
    </div>
  )
}

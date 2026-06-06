import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Star } from 'lucide-react'
import { fadeUp } from '../../data/constants'

export function FadeIn({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}

export function DecorativeBlob({ className, color = 'bg-alma-purple/10' }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${color} ${className}`}
      animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export function FloatingIcon({ icon: Icon, className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
    </motion.div>
  )
}

export function ImageFrame({ src, alt, className = '', overlay = false }) {
  if (!src) return null

  return (
    <div className={`relative overflow-hidden rounded-3xl group ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-alma-purple/20 via-transparent to-transparent" />
      )}
    </div>
  )
}

export function Button({ children, variant = 'primary', to, href, onClick, className = '', external = false }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer'
  const variants = {
    primary:
      'bg-gradient-to-r from-alma-purple to-violet-500 text-white shadow-lg shadow-violet-300/40 hover:shadow-xl hover:shadow-violet-300/50 hover:-translate-y-0.5',
    secondary:
      'bg-white/80 backdrop-blur-sm text-alma-purple border-2 border-violet-200 hover:bg-violet-50 hover:border-violet-300 hover:-translate-y-0.5 shadow-sm',
    outline:
      'bg-transparent text-alma-purple border-2 border-alma-purple/30 hover:bg-alma-purple/5 hover:-translate-y-0.5',
    ghost:
      'bg-alma-purple text-white shadow-xl shadow-violet-400/30 hover:shadow-2xl hover:shadow-violet-400/40 hover:-translate-y-1 px-10 py-4 text-lg',
    whatsapp:
      'bg-[#25D366] text-white shadow-lg shadow-green-300/40 hover:shadow-xl hover:shadow-green-300/50 hover:-translate-y-0.5',
    nav:
      'w-full justify-start px-5 py-4 rounded-2xl text-base font-semibold bg-white/50 hover:bg-white/80 text-alma-text hover:text-alma-purple border border-violet-100/60',
  }

  const classes = `${base} ${variants[variant]} ${className}`
  const isFullWidth = className.includes('w-full')

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={isFullWidth ? 'w-full' : 'inline-flex'}
      >
        <Link to={to} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export function SectionTitle({ badge, title, subtitle, light = false, compact = false }) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${compact ? 'mb-10 md:mb-14' : 'mb-12 md:mb-16'}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
            light
              ? 'bg-white/20 text-white backdrop-blur-sm'
              : 'bg-alma-purple-light text-alma-purple'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-alma-text'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-sm sm:text-base md:text-lg leading-relaxed px-2 ${
            light ? 'text-white/85' : 'text-alma-text-muted'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export function ValueCard({ icon: Icon, title, description, color, iconColor, border }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative p-5 sm:p-6 md:p-8 rounded-3xl bg-gradient-to-br ${color} border ${border} shadow-sm hover:shadow-xl hover:shadow-violet-100/50 transition-shadow duration-500`}
    >
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5 shadow-sm ${iconColor}`}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-alma-text mb-2 sm:mb-3">{title}</h3>
      <p className="text-alma-text-muted leading-relaxed text-sm md:text-base">{description}</p>
      <FloatingIcon icon={Star} className="top-4 right-4 text-alma-yellow/40" delay={1} />
    </motion.div>
  )
}

export function ServiceCard({ icon: Icon, title, description, color, iconBg, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group p-5 sm:p-6 md:p-7 rounded-3xl ${color} border border-white/60 shadow-sm hover:shadow-xl hover:shadow-violet-100/40 transition-all duration-500`}
    >
      <div
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-alma-text mb-2">{title}</h3>
      <p className="text-alma-text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export function StatItem({ value, label, index }) {
  return (
    <motion.div variants={fadeUp} custom={index} className="text-center px-3 sm:px-4 py-4 sm:py-6">
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-alma-purple mb-1 sm:mb-2">
        {value}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-alma-text-muted font-medium">{label}</div>
    </motion.div>
  )
}

export function CoreValueCard({ icon: Icon, title, color, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -5, rotate: 1 }}
      className={`flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br ${color} border border-white/50 shadow-sm hover:shadow-lg transition-shadow duration-300`}
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/60 flex items-center justify-center text-alma-purple">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
      </div>
      <span className="font-bold text-alma-text text-xs sm:text-sm md:text-base text-center">{title}</span>
    </motion.div>
  )
}

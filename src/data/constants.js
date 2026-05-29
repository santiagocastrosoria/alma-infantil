import {
  Heart,
  Star,
  Shield,
  GraduationCap,
  HandHeart,
  Users,
  BookOpen,
  Calendar,
  Building2,
  BadgeCheck,
  MessageCircle,
  Globe,
  Lightbulb,
  Award,
  Crown,
  Handshake,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Inicio', path: '/', end: true },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Misión y Valores', path: '/mision-valores' },
  { label: 'Contacto', path: '/contacto' },
]

export const HIGHLIGHT_VALUES = [
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Validamos perfiles y construimos relaciones basadas en la transparencia.',
    color: 'from-violet-100 to-purple-50',
    iconColor: 'text-alma-purple',
    border: 'border-violet-200/60',
  },
  {
    icon: Heart,
    title: 'Seguridad',
    description: 'Un ecosistema protegido donde cada niño y familia se siente contenido.',
    color: 'from-pink-100 to-rose-50',
    iconColor: 'text-alma-pink',
    border: 'border-pink-200/60',
  },
  {
    icon: GraduationCap,
    title: 'Capacitación',
    description: 'Formación continua para elevar los estándares del cuidado infantil.',
    color: 'from-sky-100 to-cyan-50',
    iconColor: 'text-alma-teal',
    border: 'border-sky-200/60',
  },
  {
    icon: HandHeart,
    title: 'Acompañamiento',
    description: 'Contención emocional y apoyo integral para familias y cuidadoras.',
    color: 'from-amber-100 to-yellow-50',
    iconColor: 'text-amber-500',
    border: 'border-amber-200/60',
  },
]

export const STATS = [
  { value: '500+', label: 'Familias conectadas' },
  { value: '200+', label: 'Profesionales capacitadas' },
  { value: '50+', label: 'Capacitaciones realizadas' },
  { value: '98%', label: 'Satisfacción familiar' },
]

export const SERVICES = [
  {
    icon: GraduationCap,
    title: 'Capacitación profesional',
    description: 'Programas certificados para niñeras y cuidadoras con enfoque en desarrollo infantil.',
    color: 'bg-alma-purple-light',
    iconBg: 'bg-alma-purple/15 text-alma-purple',
  },
  {
    icon: BadgeCheck,
    title: 'Validación de perfiles',
    description: 'Proceso riguroso de selección y verificación para garantizar confianza y seguridad.',
    color: 'bg-alma-pink-light',
    iconBg: 'bg-alma-pink/15 text-alma-pink',
  },
  {
    icon: Users,
    title: 'Mentorías',
    description: 'Acompañamiento personalizado para el crecimiento profesional de cuidadoras.',
    color: 'bg-alma-teal-light',
    iconBg: 'bg-alma-teal/15 text-alma-teal',
  },
  {
    icon: MessageCircle,
    title: 'Acompañamiento emocional',
    description: 'Espacios de contención y apoyo para familias y profesionales del cuidado.',
    color: 'bg-alma-yellow-light',
    iconBg: 'bg-alma-yellow/20 text-amber-600',
  },
  {
    icon: Globe,
    title: 'Comunidad digital',
    description: 'Red de apoyo, intercambio y aprendizaje continuo en un entorno seguro.',
    color: 'bg-alma-sky-light',
    iconBg: 'bg-alma-sky/20 text-sky-500',
  },
  {
    icon: BookOpen,
    title: 'Recursos educativos',
    description: 'Herramientas de crianza consciente y materiales para el desarrollo infantil.',
    color: 'bg-alma-purple-light',
    iconBg: 'bg-alma-purple/15 text-alma-purple',
  },
  {
    icon: Calendar,
    title: 'Eventos y networking',
    description: 'Encuentros presenciales para fortalecer la comunidad y compartir experiencias.',
    color: 'bg-alma-pink-light',
    iconBg: 'bg-alma-pink/15 text-alma-pink',
  },
  {
    icon: Building2,
    title: 'Asesoramiento institucional',
    description: 'Consultoría especializada para instituciones educativas y centros de cuidado.',
    color: 'bg-alma-teal-light',
    iconBg: 'bg-alma-teal/15 text-alma-teal',
  },
]

export const GALLERY_IMAGES = [
  { src: '/images/hero-family.png', alt: 'Familia en armonía' },
  { src: '/images/caregiver-child.png', alt: 'Cuidado profesional' },
  { src: '/images/training.png', alt: 'Capacitación ABC de niñeras' },
  { src: '/images/baking.png', alt: 'Momento de conexión' },
  { src: '/images/online-learning.png', alt: 'Formación digital' },
  { src: '/images/writing-desk.png', alt: 'Aprendizaje consciente' },
]

export const CORE_VALUES = [
  { icon: Heart, title: 'Empatía', color: 'from-pink-200/80 to-rose-100/60' },
  { icon: Award, title: 'Compromiso', color: 'from-violet-200/80 to-purple-100/60' },
  { icon: Shield, title: 'Profesionalismo', color: 'from-sky-200/80 to-cyan-100/60' },
  { icon: Lightbulb, title: 'Innovación', color: 'from-amber-200/80 to-yellow-100/60' },
  { icon: Users, title: 'Comunidad', color: 'from-teal-200/80 to-emerald-100/60' },
  { icon: Crown, title: 'Liderazgo', color: 'from-purple-200/80 to-violet-100/60' },
  { icon: Handshake, title: 'Respeto', color: 'from-rose-200/80 to-pink-100/60' },
]

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
  },
  {
    label: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2M2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
  },
]

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
}

import {
  Heart,
  Star,
  Shield,
  HandHeart,
  Users,
  BookOpen,
  Calendar,
  BadgeCheck,
  MessageCircle,
  Globe,
  Lightbulb,
  Award,
  Handshake,
  Lock,
  CheckCircle2,
} from 'lucide-react'

export const CONTACT = {
  phone: '+54 9 351 6352554',
  phoneHref: 'tel:+5493516352554',
  email: 'almainfantil@gmail.com',
  emailHref: 'mailto:almainfantil@gmail.com',
  location: 'Córdoba, Argentina',
  whatsapp:
    'https://wa.me/5493516352554?text=Hola%2C%20quiero%20más%20información%20acerca%20de',
}

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
    icon: BadgeCheck,
    title: 'Validación de perfiles',
    description: 'Proceso riguroso de selección y verificación para garantizar confianza y seguridad.',
    color: 'bg-alma-pink-light',
    iconBg: 'bg-alma-pink/15 text-alma-pink',
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
    color: 'bg-alma-teal-light',
    iconBg: 'bg-alma-teal/15 text-alma-teal',
  },
]

export const GALLERY_IMAGES = [
  { src: '/images/hero-family.png', alt: 'Familia en armonía' },
  { src: '/images/caregiver-child.png', alt: 'Cuidado profesional' },
  { src: '/images/training.png', alt: 'Crianza Sincronizada en acción' },
  { src: '/images/baking.png', alt: 'Momento de conexión' },
  { src: '/images/online-learning.png', alt: 'Formación digital' },
  { src: '/images/writing-desk.png', alt: 'Aprendizaje consciente' },
]

export const CORE_VALUES = [
  { icon: Heart, title: 'Empatía', color: 'from-pink-200/80 to-rose-100/60' },
  { icon: Award, title: 'Compromiso Social', color: 'from-violet-200/80 to-purple-100/60' },
  { icon: Handshake, title: 'Respeto', color: 'from-rose-200/80 to-pink-100/60' },
  { icon: Users, title: 'Trabajo en Equipo', color: 'from-teal-200/80 to-emerald-100/60' },
  { icon: Star, title: 'Excelencia', color: 'from-amber-200/80 to-yellow-100/60' },
  { icon: Lightbulb, title: 'Innovación', color: 'from-sky-200/80 to-cyan-100/60' },
  { icon: Shield, title: 'Confianza', color: 'from-purple-200/80 to-violet-100/60' },
  { icon: BadgeCheck, title: 'Profesionalismo', color: 'from-indigo-200/80 to-blue-100/60' },
  { icon: Lock, title: 'Seguridad', color: 'from-emerald-200/80 to-green-100/60' },
  { icon: CheckCircle2, title: 'Responsabilidad', color: 'from-orange-200/80 to-amber-100/60' },
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

export const QUIENES_SOMOS_TEXT = [
  'En Alma Infantil creemos que el cuidado infantil va mucho más allá de supervisar a un niño: implica acompañar su desarrollo, fortalecer los vínculos familiares y generar entornos seguros para crecer. Somos una plataforma digital que conecta a las familias con acompañantes infantiles calificadas y previamente evaluadas, integrando tecnología, formación y herramientas de crianza consciente para brindar una experiencia de cuidado confiable y de calidad.',
  'A través de nuestro sistema de Crianza Sincronizada, ayudamos a que familias y acompañantes trabajen de manera coordinada, compartiendo objetivos, rutinas y criterios educativos. Nuestro compromiso es transformar el cuidado infantil en una experiencia segura, profesional y enriquecedora, contribuyendo al bienestar integral de las infancias y al fortalecimiento de cada hogar.',
]

export const SERVICIOS_TEXT = [
  'Alma Infantil ofrece una plataforma integral de Crianza Sincronizada que conecta a las familias con acompañantes infantiles previamente evaluadas y capacitadas, garantizando seguridad, confianza y calidad en el cuidado. A través de herramientas digitales innovadoras, como el Plan de Vuelo Semanal, la plataforma permite coordinar en tiempo real las rutinas, objetivos y pautas de crianza entre las familias y las acompañantes, promoviendo una educación coherente y un entorno estable para los niños.',
  'Además, Alma Infantil brinda programas de formación continua para acompañantes infantiles en áreas como crianza consciente, pedagogía, gestión emocional y primeros auxilios, fortaleciendo su desarrollo profesional. La plataforma también ofrece recursos y acompañamiento para las familias, facilitando la aplicación de prácticas de crianza respetuosas y conscientes en la vida cotidiana. De esta manera, Alma Infantil transforma el cuidado infantil en una experiencia segura, profesional y colaborativa que favorece el bienestar integral de las infancias.',
]

export const MISION_TEXT =
  'Brindar bienestar integral a niños y niñas mediante una plataforma de Crianza Sincronizada que conecta a las familias con acompañantes infantiles altamente capacitadas y previamente evaluadas. A través de tecnología, acompañamiento profesional y herramientas pedagógicas innovadoras, promovemos una crianza coherente, segura y consciente, transformando el cuidado infantil en una experiencia de desarrollo compartido entre familias y acompañantes.'

export const VISION_TEXT =
  'Ser la plataforma líder en Latinoamérica en cuidado infantil y Crianza Sincronizada, reconocida por elevar los estándares de calidad, seguridad y profesionalización del sector. Aspiramos a construir una red de confianza que transforme la manera en que las familias y las acompañantes trabajan juntas, generando un impacto positivo y sostenible en el desarrollo de las infancias.'

export const ORGANIGRAM_INTRO =
  'Alma Infantil cuenta con una estructura organizacional funcional, diseñada para acompañar el crecimiento de la empresa de manera eficiente. La organización está liderada por la Fundadora, quien coordina las principales decisiones y supervisa el funcionamiento general.\n\nLa empresa se organiza en tres áreas principales:'

export const ORGANIGRAM_AREAS = [
  {
    title: 'Operaciones Pedagógicas y Calidad',
    description:
      'Responsable de la formación, los contenidos educativos, las certificaciones y la calidad de los servicios.',
    color: 'from-teal-100 to-cyan-50',
    iconColor: 'text-alma-teal',
    border: 'border-teal-200/60',
  },
  {
    title: 'Tecnología, Administración y Finanzas',
    description:
      'Encargada de la plataforma digital, la administración de recursos y la gestión financiera.',
    color: 'from-amber-100 to-yellow-50',
    iconColor: 'text-amber-600',
    border: 'border-amber-200/60',
  },
  {
    title: 'Comunidad, Marketing y Atención de Familias',
    description:
      'Responsable de la comunicación de la marca, la atención a usuarios, las redes sociales y la construcción de comunidad.',
    color: 'from-pink-100 to-rose-50',
    iconColor: 'text-alma-pink',
    border: 'border-pink-200/60',
  },
]

export const HOW_IT_WORKS_STEPS = [
  { step: 1, title: 'Registrarse', description: 'Crear perfil como familia o acompañante.' },
  { step: 2, title: 'Diagnóstico inicial', description: 'Identificamos necesidades y objetivos de crianza.' },
  { step: 3, title: 'Plan de Vuelo', description: 'Recibís un plan semanal personalizado.' },
  { step: 4, title: 'Seguimiento', description: 'Todos trabajan coordinados y visualizan los avances.' },
  { step: 5, title: 'Crianza Feliz', description: 'Niños seguros y familias tranquilas.' },
]

export const HOW_IT_WORKS_CLOSING =
  'Este recorrido refleja la esencia de Alma Infantil: acompañar, formar y fortalecer tanto a las familias como a quienes trabajan en el cuidado infantil mediante un proceso cercano, profesional y personalizado.'

export const PLAN_VUELO_TEXT = [
  'El Plan de Vuelo es la herramienta principal de Alma Infantil y permite coordinar el trabajo entre la familia y la acompañante infantil a través de objetivos de desarrollo definidos para cada semana.',
  'Según la edad, necesidades e intereses del niño, la plataforma propone un eje pedagógico semanal, como gestión de emociones, autonomía, creatividad o comunicación. A partir de este eje, se generan actividades, dinámicas y recomendaciones que son compartidas tanto con la acompañante como con la familia.',
  'De esta manera, todos los adultos involucrados en el cuidado trabajan de forma sincronizada, promoviendo una experiencia educativa coherente, personalizada y orientada al desarrollo integral del niño.',
]

export const FORMATION_TEXT = [
  'En Alma Infantil formamos acompañantes infantiles mediante el programa ABC de Niñeras preparándolas para brindar un cuidado seguro, consciente y de calidad.',
  'Nuestro programa combina contenidos de desarrollo infantil, crianza respetuosa, inteligencia emocional, comunicación, resolución de conflictos y primeros auxilios.',
  'Además, las participantes aprenden a implementar el sistema de Crianza Sincronizada y el Plan de Vuelo semanal, permitiendo trabajar de manera coordinada con las familias para favorecer el bienestar y desarrollo de cada niño.',
  'Al finalizar la capacitación, obtienen una certificación que respalda sus competencias y las integra a una comunidad comprometida con la excelencia en el cuidado infantil.',
]

export const FORMATION_TOPICS = [
  'Desarrollo Infantil',
  'Crianza Respetuosa',
  'Inteligencia Emocional',
  'Comunicación',
  'Resolución de Conflictos',
  'Primeros Auxilios',
  'Crianza Sincronizada',
  'Plan de Vuelo Semanal',
]

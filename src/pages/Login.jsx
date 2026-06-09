import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import AuthPageShell, { AuthInput, AuthSubmitButton } from '../components/AuthPageShell'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !name.trim()) {
      setError('Por favor completá tu email y nombre para continuar.')
      return
    }
    setError('')
    login(name, email)
    navigate('/')
  }

  return (
    <AuthPageShell>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="text-center mb-8"
      >
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-alma-text mb-3">
          Iniciar Sesión
        </h1>
        <p className="text-alma-text-muted text-sm sm:text-base leading-relaxed">
          Ingresá para comenzar tu experiencia de Crianza Sincronizada.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <AuthInput
          id="login-email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          autoComplete="email"
        />

        <AuthInput
          id="login-name"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          autoComplete="name"
        />

        {error && <p className="text-sm text-rose-500 font-medium text-center">{error}</p>}

        <AuthSubmitButton>
          Ingresar
          <ArrowRight className="w-4 h-4" />
        </AuthSubmitButton>
      </motion.form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-center text-sm text-alma-text-muted mt-6"
      >
        ¿No tenés cuenta?{' '}
        <Link to="/registro" className="font-semibold text-alma-purple hover:text-violet-600 transition-colors">
          Registrarse
        </Link>
      </motion.p>
    </AuthPageShell>
  )
}

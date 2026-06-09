import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import AuthPageShell, { AuthInput, AuthSubmitButton } from '../components/AuthPageShell'

export default function Registro() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError('Por favor completá todos los campos.')
      return
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
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
          Registrate
        </h1>
        <p className="text-alma-text-muted text-sm sm:text-base leading-relaxed">
          Creá tu cuenta para formar parte de Alma Infantil.
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
          id="registro-name"
          label="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre completo"
          autoComplete="name"
        />

        <AuthInput
          id="registro-email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          autoComplete="email"
        />

        <AuthInput
          id="registro-password"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 6 caracteres"
          autoComplete="new-password"
        />

        <AuthInput
          id="registro-confirm"
          label="Confirmar contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repetí tu contraseña"
          autoComplete="new-password"
        />

        {error && <p className="text-sm text-rose-500 font-medium text-center">{error}</p>}

        <AuthSubmitButton>
          Registrarme
          <ArrowRight className="w-4 h-4" />
        </AuthSubmitButton>
      </motion.form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-center text-sm text-alma-text-muted mt-6"
      >
        ¿Ya tenés cuenta?{' '}
        <Link to="/login" className="font-semibold text-alma-purple hover:text-violet-600 transition-colors">
          Iniciar sesión
        </Link>
      </motion.p>
    </AuthPageShell>
  )
}

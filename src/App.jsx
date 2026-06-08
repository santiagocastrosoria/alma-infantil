import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Layout from './components/Layout'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import MisionValores from './pages/MisionValores'
import Contacto from './pages/Contacto'

function AppRoutes() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-alma-cream">
        <div className="w-10 h-10 rounded-full border-2 border-alma-purple/30 border-t-alma-purple animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Welcome />
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="mision-valores" element={<MisionValores />} />
        <Route path="mision" element={<Navigate to="/mision-valores" replace />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

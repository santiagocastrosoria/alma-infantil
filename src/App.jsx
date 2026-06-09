import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import MisionValores from './pages/MisionValores'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="mision-valores" element={<MisionValores />} />
            <Route path="mision" element={<Navigate to="/mision-valores" replace />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import MisionValores from './pages/MisionValores'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="mision-valores" element={<MisionValores />} />
          <Route path="mision" element={<Navigate to="/mision-valores" replace />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

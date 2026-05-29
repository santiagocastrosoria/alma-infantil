import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { DecorativeBlob } from './ui/shared'

export default function FooterBasic() {
  return (
    <footer className="relative bg-gradient-to-br from-alma-purple via-violet-600 to-purple-700 text-white overflow-hidden mt-auto">
      <DecorativeBlob className="w-72 h-72 -right-24 -bottom-24" color="bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <img
              src="/images/logo.png"
              alt="Alma Infantil"
              className="h-12 w-auto mb-3 mx-auto md:mx-0 brightness-110"
            />
            <p className="text-white/75 text-sm max-w-sm leading-relaxed">
              Transformando el cuidado infantil desde el amor, la formación y la confianza.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              to="/contacto"
              className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              Contactanos
            </Link>
            <p className="text-white/50 text-xs flex items-center gap-1.5">
              © {new Date().getFullYear()} Alma Infantil
              <Heart className="w-3 h-3 text-alma-pink fill-alma-pink" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

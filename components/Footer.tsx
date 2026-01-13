import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Columna 1 y 2: Marca y Disclaimer (Más ancho) */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-white tracking-tight">
              Software<span className="text-emerald-400">Clinico</span>.top
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            La plataforma líder en análisis de software para el sector odontológico. Ayudamos a clínicas a modernizarse con reseñas honestas y datos verificados.
          </p>
          
          {/* DISCLAIMER DE AFILIADOS (IMPORTANTE) */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-xs text-slate-500 mt-6">
            <p><strong>Transparencia:</strong> Este sitio es soportado por sus lectores. Cuando compras a través de enlaces en nuestro sitio, podemos ganar una comisión de afiliado sin costo adicional para ti.</p>
          </div>
        </div>

        {/* Columna 3: Navegación */}
        <div>
          <h3 className="text-white font-bold mb-4 tracking-wide uppercase text-xs">Explorar</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors duration-200 block">Comparativa 2026</Link></li>
            <li><Link href="/#guias" className="hover:text-emerald-400 transition-colors duration-200 block">Guías de Gestión</Link></li>
            <li>
                {/* CAMBIO AQUÍ: Ahora lleva a tu nueva página de contacto */}
                <Link href="/contacto" className="hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2">
                    <span>✉️ Contactar</span>
                </Link>
            </li>
          </ul>
        </div>

        {/* Columna 4: Legal */}
        <div>
          <h3 className="text-white font-bold mb-4 tracking-wide uppercase text-xs">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/legal/aviso-legal" className="hover:text-emerald-400 transition-colors duration-200 block">Aviso Legal</Link></li>
            <li><Link href="/legal/privacidad" className="hover:text-emerald-400 transition-colors duration-200 block">Política de Privacidad</Link></li>
            <li><Link href="/legal/cookies" className="hover:text-emerald-400 transition-colors duration-200 block">Política de Cookies</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} SoftwareClinico.top. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
            {/* Aquí podrías poner iconos de redes sociales en el futuro */}
            <span>Hecho con 🦷 para dentistas</span>
        </div>
      </div>
    </footer>
  );
}
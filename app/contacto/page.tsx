import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen py-20 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Cabecera */}
        <div className="bg-slate-900 p-10 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Hablemos</h1>
          <p className="text-slate-400">¿Tienes dudas sobre qué software elegir o quieres colaborar con nosotros?</p>
        </div>

        <div className="p-10 space-y-12">
          
          {/* Opción Principal: Email */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0 mx-auto sm:mx-0">
              ✉️
            </div>
            <div className="text-center sm:text-left flex-grow">
              <h3 className="text-xl font-bold text-slate-800">Envíanos un Email</h3>
              <p className="text-slate-500 mb-4 mt-1">
                Respondemos generalmente en 24-48 horas hábiles.
              </p>
              
              {/* Botón con tu correo real */}
              <a 
                href="mailto:contacto.softwareclinico@gmail.com" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors w-full sm:w-auto"
              >
                contacto.softwareclinico@gmail.com
              </a>
              
              <p className="text-xs text-slate-400 mt-3">
                Si el botón no funciona, copia y pega la dirección manualmente.
              </p>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Sección Informativa */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                🦷 Para Dentistas
              </h4>
              <p className="text-sm text-slate-600">
                ¿No sabes qué software elegir? Escríbenos contándonos el tamaño de tu clínica y te daremos una recomendación neutral.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                💼 Para Empresas
              </h4>
              <p className="text-sm text-slate-600">
                ¿Tienes un software dental y quieres aparecer en nuestro ranking? Contáctanos para evaluar tu producto.
              </p>
            </div>
          </div>

        </div>
        
        {/* Pie de la tarjeta */}
        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
          <Link href="/" className="text-emerald-600 font-semibold hover:underline text-sm">
            ← Volver a la Comparativa
          </Link>
        </div>

      </div>
    </main>
  );
}
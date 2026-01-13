import Link from "next/link";
import { notFound } from "next/navigation";

// Diccionario de contenidos legales básicos
const legalContent: Record<string, { title: string; content: React.ReactNode }> = {
  "aviso-legal": {
    title: "Aviso Legal",
    content: (
      <>
        <p><strong>Titular del sitio web:</strong> SoftwareClinico.top</p>
        <p><strong>Contacto:</strong> contacto.softwareclinico@gmail.com</p>
        <h3>1. Objeto</h3>
        <p>Este sitio web ofrece información comparativa sobre software dental y enlaces de afiliados. No vendemos software directamente.</p>
        <h3>2. Propiedad Intelectual</h3>
        <p>Los textos e imágenes propias de este sitio están protegidos. Las marcas comerciales mencionadas (Dentalink, Clinic Cloud, etc.) pertenecen a sus respectivos dueños.</p>
        <h3>3. Responsabilidad</h3>
        <p>No nos hacemos responsables de las decisiones tomadas basándose en nuestra información, ni del funcionamiento de los software de terceros enlazados.</p>
      </>
    ),
  },
  "privacidad": {
    title: "Política de Privacidad",
    content: (
      <>
        <p>En SoftwareClinico.top nos tomamos muy en serio tu privacidad.</p>
        <h3>1. Datos que recopilamos</h3>
        <p>No recopilamos datos personales a menos que nos escribas por correo electrónico voluntariamente.</p>
        <h3>2. Analíticas</h3>
        <p>Usamos Vercel Analytics para medir el tráfico de forma anónima. No usamos cookies intrusivas de seguimiento individual.</p>
        <h3>3. Tus derechos</h3>
        <p>Puedes solicitar la eliminación de cualquier comunicación que hayas tenido con nosotros escribiendo a nuestro email de contacto.</p>
      </>
    ),
  },
  "cookies": {
    title: "Política de Cookies",
    content: (
      <>
        <p>Este sitio web utiliza una cantidad mínima de cookies para funcionar correctamente.</p>
        <h3>¿Qué cookies usamos?</h3>
        <ul className="list-disc pl-5 mt-2">
            <li><strong>Técnicas:</strong> Necesarias para que la web cargue rápido.</li>
            <li><strong>Analíticas:</strong> (Vercel) Para saber cuántas personas nos visitan. Son anónimas.</li>
        </ul>
        <p className="mt-4">Al navegar por este sitio, aceptas el uso de estas cookies básicas.</p>
      </>
    ),
  }
};

export default function LegalPage({ params }: { params: { slug: string } }) {
  const pageData = legalContent[params.slug];

  if (!pageData) {
    return notFound(); // Si escriben /legal/algo-raro, da error 404
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-20 font-sans text-slate-800">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">{pageData.title}</h1>
      
      <div className="prose prose-slate lg:prose-lg bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <p className="text-sm text-slate-400 mb-6">Última actualización: Enero 2026</p>
        {pageData.content}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200">
        <Link href="/" className="text-emerald-600 font-semibold hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
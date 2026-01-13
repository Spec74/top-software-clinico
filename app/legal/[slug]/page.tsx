export default function LegalPage({ params }: { params: { slug: string } }) {
  // Convertimos "aviso-legal" en "Aviso Legal" para el título
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="max-w-3xl mx-auto px-4 py-20 font-sans text-slate-800">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">{title}</h1>
      
      <div className="prose prose-slate lg:prose-lg">
        <p className="text-lg text-slate-600 mb-6">
          Esta es una página legal generada automáticamente para <strong>{title}</strong>.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-700 text-sm">
            🚧 <strong>Nota para el dueño:</strong> Aquí debes pegar el texto legal real. Puedes usar generadores online gratuitos de políticas de privacidad para rellenar esto.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introducción</h2>
        <p>
          En cumplimiento con la normativa vigente, SoftwareClinico.top informa a los usuarios sobre sus políticas respecto a...
        </p>
        
        {/* Aquí iría más texto de relleno */}
      </div>
    </main>
  );
}
import ComparisonTable from "@/components/ComparisonTable";
import { Button } from "@/components/ui/button";

// Datos simulados (Aquí irán tus afiliados reales luego)
const softwareData = [
  {
    id: "1",
    name: "Dentalink",
    description: "Gestión integral con pagos online y Agenda.",
    price: "Desde $50/mes",
    rating: 5,
    affiliateLink: "https://dentalink.com", // Aquí irá tu link de afiliado
    isRecommended: true,
  },
  {
    id: "2",
    name: "ClinicCloud",
    description: "Nube pura. Ideal para franquicias grandes.",
    price: "Consultar",
    rating: 4,
    affiliateLink: "https://cliniccloud.com",
    isRecommended: false,
  },
  {
    id: "3",
    name: "Doctoralia",
    description: "El mejor para captar pacientes nuevos.",
    price: "Desde $99/mes",
    rating: 4,
    affiliateLink: "https://doctoralia.com",
    isRecommended: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Los Mejores Software para <span className="text-emerald-400">Clínicas</span> en 2025
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Hemos analizado 20+ herramientas. Solo estas 3 te ayudarán a facturar más y perder menos tiempo.
          </p>
        </div>
      </section>

      {/* Tabla Comparativa */}
      <section className="max-w-5xl mx-auto -mt-10 px-4 pb-20 relative z-10">
        <ComparisonTable data={softwareData} />
        
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Información actualizada a Enero 2025. Algunos enlaces pueden generar comisiones.</p>
        </div>
      </section>
    </main>
  );
}
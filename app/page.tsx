import ComparisonTable from "@/components/ComparisonTable";
import { client } from "@/lib/sanity";

// 1. Esta función pide los datos a Sanity
async function getSoftware() {
  // Esta query ordena primero por Recomendado (true va antes), 
  // y luego por nombre (para que el resto se vea ordenado).
  // "coalesce" asegura que si no tocaste el switch, cuente como "false" y no rompa el orden.
  const query = `*[_type == "software"] | order(coalesce(isRecommended, false) desc, name asc) {
    _id,
    name,
    description,
    price,
    rating,
    affiliateLink,
    isRecommended
  }`;
  
  return client.fetch(query, {}, { next: { revalidate: 0 } }); 
}

export default async function Home() {
  const data = await getSoftware();

  const formattedData = data.map((item: any) => ({
    id: item._id,
    name: item.name,
    description: item.description,
    price: item.price,
    rating: item.rating,
    affiliateLink: item.affiliateLink,
    isRecommended: item.isRecommended
  }));

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Los Mejores Software para <span className="text-emerald-400">Clínicas</span> en 2025
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Comparativa actualizada y honesta para digitalizar tu consultorio.
          </p>
        </div>
      </section>

      {/* Tabla Comparativa - Conectada a Sanity */}
      <section className="max-w-5xl mx-auto -mt-10 px-4 pb-20 relative z-10">
        <ComparisonTable data={formattedData} />
        
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Información gestionada desde Sanity CMS.</p>
        </div>
      </section>
    </main>
  );
}
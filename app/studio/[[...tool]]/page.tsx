import ComparisonTable from "@/components/ComparisonTable";
import { client } from "@/lib/sanity";

// 1. Esta función pide los datos a Sanity
async function getSoftware() {
  // Esta frase rara (GROQ) es el lenguaje de consulta. Pide todos los softwares ordenados.
  const query = `*[_type == "software"] | order(isRecommended desc) {
    _id,
    name,
    description,
    price,
    rating,
    affiliateLink,
    isRecommended
  }`;
  
  // Revalidate: 0 significa que si cambias un precio, la web se actualiza al instante
  return client.fetch(query, {}, { next: { revalidate: 0 } }); 
}

export default async function Home() {
  // 2. Aquí ejecutamos la petición
  const data = await getSoftware();

  // 3. Adaptamos los datos para que encajen en tu tabla
  const formattedData = data.map((item: any) => ({
    id: item._id, // Sanity usa '_id', tu tabla espera 'id'
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

      {/* Tabla Comparativa - Ahora con datos REALES */}
      <section className="max-w-5xl mx-auto -mt-10 px-4 pb-20 relative z-10">
        <ComparisonTable data={formattedData} />
        
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Información gestionada desde Sanity CMS.</p>
        </div>
      </section>
    </main>
  );
}
import ComparisonTable from "@/components/ComparisonTable";
import { client } from "@/lib/sanity";

// 1. Esta función pide los datos a Sanity
async function getSoftware() {
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
      
      {/* Hero Section & Navbar */}
      <section className="bg-slate-900 text-white pb-32 pt-6 px-4 relative overflow-hidden">
        
        {/* Fondo decorativo sutil (opcional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

        {/* Navbar */}
        <nav className="relative z-10 w-full mb-16 flex justify-between items-center max-w-5xl mx-auto border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black shadow-lg shadow-emerald-500/20">
              SC
            </div>
            <span className="text-lg font-bold text-white tracking-tight">SoftwareClinico<span className="text-emerald-400">.top</span></span>
          </div>
          <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Sobre Nosotros</a>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-emerald-400 mb-2">
            ✨ Actualizado para Enero 2026
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Los Mejores Software para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Clínicas Dentales
            </span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Hemos analizado +20 herramientas del mercado. Esta es la comparativa definitiva y honesta para digitalizar tu consultorio.
          </p>
        </div>
      </section>

      {/* Tabla Comparativa */}
      <section className="max-w-5xl mx-auto -mt-24 px-4 pb-20 relative z-20">
        <ComparisonTable data={formattedData} />
        
        <div className="mt-12 text-center text-slate-400 text-sm flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <p>Información verificada por expertos en gestión clínica.</p>
        </div>
      </section>
    </main>
  );
}
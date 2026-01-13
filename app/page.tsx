import ComparisonTable from "@/components/ComparisonTable";
import { client, urlFor } from "@/lib/sanity"; // Importamos urlFor para las fotos
import Link from "next/link";
import Image from "next/image";

// 1. Fetch de Software
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

// 2. Fetch de Artículos (NUEVO)
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    description,
    mainImage,
    publishedAt
  }`;
  return client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function Home() {
  // Pedimos los datos al mismo tiempo (más rápido)
  const [softwareData, postsData] = await Promise.all([
    getSoftware(),
    getPosts()
  ]);

  const formattedSoftware = softwareData.map((item: any) => ({
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
      <section className="bg-slate-900 text-white pb-32 pt-6 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

        <nav className="relative z-10 w-full mb-16 flex justify-between items-center max-w-5xl mx-auto border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black shadow-lg shadow-emerald-500/20">
              SC
            </div>
            <span className="text-lg font-bold text-white tracking-tight">SoftwareClinico<span className="text-emerald-400">.top</span></span>
          </div>
          <span className="text-gray-400 text-sm font-medium">Análisis 2026</span>
        </nav>

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
        <ComparisonTable data={formattedSoftware} />
        
        <div className="mt-12 text-center text-slate-400 text-sm flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <p>Información verificada por expertos en gestión clínica.</p>
        </div>
      </section>

      {/* SECCIÓN DE BLOG (NUEVA) */}
      <section className="bg-white py-20 px-4 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Guías para Digitalizar tu Clínica</h2>
          <p className="text-slate-500 text-center mb-12">Artículos prácticos para mejorar la rentabilidad de tu consultorio.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {postsData.length > 0 ? (
              postsData.map((post: any) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-slate-50 rounded-xl overflow-hidden h-full border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 flex flex-col">
                    
                    {/* Imagen del Post */}
                    {post.mainImage && (
                      <div className="relative w-full h-48 bg-slate-200">
                        <Image 
                          src={urlFor(post.mainImage).url()} 
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.description && (
                        <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-grow">
                          {post.description}
                        </p>
                      )}
                      <span className="text-emerald-600 font-bold text-sm flex items-center gap-1 mt-auto pt-4">
                        Leer artículo <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-10 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                <p className="text-slate-400">Escribiendo artículos...</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
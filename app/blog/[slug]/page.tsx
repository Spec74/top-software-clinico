import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

// 1. Función para buscar el artículo en Sanity
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body
  }`;
  return client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  // Si no encuentra el post, muestra error
  if (!post) {
    return <div className="text-center py-20 text-xl">Artículo no encontrado 😢</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 min-h-screen bg-white">
      {/* Botón para volver atrás */}
      <Link href="/" className="text-emerald-600 font-bold hover:underline mb-8 block">
        ← Volver al inicio
      </Link>

      {/* Título del Artículo */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
        {post.title}
      </h1>
      
      {/* Fecha */}
      {post.publishedAt && (
        <p className="text-slate-500 mb-8 font-medium">
          Publicado el {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}

      {/* Imagen Principal */}
      {post.mainImage && (
        <div className="relative w-full h-[300px] md:h-[400px] mb-10 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Contenido (Cuerpo del texto) */}
      <div className="prose prose-lg prose-emerald text-slate-700 max-w-none">
        <PortableText value={post.body} />
      </div>
      
      {/* Llamada a la acción final */}
      <div className="mt-12 p-6 bg-emerald-50 rounded-lg border border-emerald-100 text-center">
        <h3 className="font-bold text-xl text-emerald-800 mb-2">¿Quieres dejar de perder dinero con Excel?</h3>
        <p className="mb-4 text-emerald-700">Compara las mejores opciones profesionales ahora.</p>
        <Link href="/">
           <button className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
             Ver Tabla Comparativa
           </button>
        </Link>
      </div>
    </article>
  );
}
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

// 1. Configuración para que el texto entienda las imágenes internas
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-64 md:h-96 my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Imagen del artículo'}
            fill
            className="object-contain" // Esto evita que la imagen se recorte feo
          />
        </div>
      );
    }
  }
};

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body
  }`;
  return client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 
  const post = await getPost(slug);

  if (!post) {
    return <div className="text-center py-20 text-xl">Artículo no encontrado 😢</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 min-h-screen bg-white">
      <Link href="/" className="text-emerald-600 font-bold hover:underline mb-8 block">
        ← Volver al inicio
      </Link>

      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
        {post.title}
      </h1>
      
      {post.publishedAt && (
        <p className="text-slate-500 mb-8 font-medium">
          Publicado el {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}

      {/* Imagen Principal (Cabecera) */}
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

      {/* Cuerpo del texto con el arreglo de componentes */}
      <div className="prose prose-lg prose-emerald text-slate-700 max-w-none">
        <PortableText value={post.body} components={ptComponents} />
      </div>
      
      {/* Banner final para vender */}
      <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-center text-white shadow-2xl">
        <h3 className="font-bold text-2xl mb-2">¿Tu clínica sigue perdiendo dinero?</h3>
        <p className="mb-6 text-slate-300">No dejes que Excel frene tu crecimiento.</p>
        <Link href="/">
           <button className="bg-emerald-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-emerald-400 transition transform hover:scale-105">
             Ver Software Recomendado
           </button>
        </Link>
      </div>
    </article>
  );
}
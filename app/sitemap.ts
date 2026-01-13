import { MetadataRoute } from 'next';
import { client } from "@/lib/sanity"; // 👈 Asegúrate de que esta ruta sea correcta según tu proyecto

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://top-software-clinico.vercel.app/';

  // 1. Obtenemos todos los slugs de tus artículos
  const posts = await client.fetch(`
    *[_type == "post"] {
      "slug": slug.current,
      publishedAt
    }
  `);

  // 2. Mapeamos los artículos a la estructura del sitemap
  const postUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt || new Date()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. Devolvemos las rutas estáticas + las dinámicas (artículos)
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...postUrls,
  ];
}
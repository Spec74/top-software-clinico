import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // No queremos que Google indexe tu panel de administración de Sanity
    },
    sitemap: 'https://softwareclinico.top/sitemap.xml',
  };
}
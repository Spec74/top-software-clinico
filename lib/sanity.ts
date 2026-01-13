import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Configuración del cliente
export const client = createClient({
  projectId: "09v26jde", 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Configuración para las imágenes
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
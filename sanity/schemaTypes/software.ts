import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'software',
  title: 'Software',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Software',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción Corta (Para la tabla)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Precio (Texto)',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Estrellas (1 a 5)',
      type: 'number',
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Tu Link de Afiliado',
      type: 'url',
    }),
    defineField({
      name: 'isRecommended',
      title: '¿Es Recomendado? (Sale en Azul)',
      type: 'boolean',
    }),
  ],
})
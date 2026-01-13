'use client'

/**
 * Esta configuración define el funcionamiento de Sanity Studio.
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// IMPORTANTE: Ajustado a tu estructura de carpetas (sin 'src')
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Clinica CMS',

  projectId: '09v26jde', // <--- ¡BORRA ESTO Y PEGA EL CÓDIGO QUE COPIASTE ANTES!
  dataset: 'production',
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schema.types,
  },
})
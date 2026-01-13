import { type SchemaTypeDefinition } from 'sanity'
import software from './software'
import post from './post' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [software, post],
}
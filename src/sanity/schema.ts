import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './schemas/siteSettings'
import websiteImages from './schemas/websiteImages'
import physiotherapist from './schemas/physiotherapist'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, websiteImages, physiotherapist],
}

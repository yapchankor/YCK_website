import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'E.g., G-XXXXXXXXXX',
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager ID',
      type: 'string',
      description: 'E.g., GTM-XXXXXXX',
    }),
    defineField({
      name: 'metaPixelId',
      title: 'Meta Pixel ID',
      type: 'string',
      description: 'E.g., 1234567890',
    }),
  ],
})

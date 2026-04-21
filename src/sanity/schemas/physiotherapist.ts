import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'physiotherapist',
  title: 'Physiotherapist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'e.g., Senior Physiotherapist, Lead Consultant',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography / Quote',
      type: 'text',
      description: 'A short bio or quote about the clinician',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'branch',
      title: 'Branch',
      type: 'string',
      options: {
        list: [
          { title: 'Ampang', value: 'ampang' },
          { title: 'Old Klang Road', value: 'okr' },
          { title: 'Shah Alam', value: 'shahAlam' },
          { title: 'Subang Jaya', value: 'subangJaya' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'branch',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      const branchNames: Record<string, string> = {
        ampang: 'Ampang',
        okr: 'Old Klang Road',
        shahAlam: 'Shah Alam',
        subangJaya: 'Subang Jaya',
      }
      return {
        title,
        subtitle: branchNames[subtitle as string] || subtitle,
        media,
      }
    },
  },
})

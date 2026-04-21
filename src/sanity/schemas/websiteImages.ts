import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'websiteImages',
  title: 'Website Images',
  type: 'document',
  fieldsets: [
    { name: 'homepage', title: 'Homepage Images' },
    { name: 'branches', title: 'Branch Images' },
    { name: 'about', title: 'About Page Images' },
    { name: 'method', title: 'Method Page Images' },
  ],
  fields: [
    // Homepage
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      fieldset: 'homepage',
      options: { hotspot: true },
    }),
    
    // Branches
    defineField({
      name: 'ampangImage',
      title: 'Ampang Branch',
      type: 'image',
      fieldset: 'branches',
      options: { hotspot: true },
    }),
    defineField({
      name: 'okrImage',
      title: 'Old Klang Road Branch',
      type: 'image',
      fieldset: 'branches',
      options: { hotspot: true },
    }),
    defineField({
      name: 'shahAlamImage',
      title: 'Shah Alam Branch',
      type: 'image',
      fieldset: 'branches',
      options: { hotspot: true },
    }),
    defineField({
      name: 'subangImage',
      title: 'Subang Jaya Branch',
      type: 'image',
      fieldset: 'branches',
      options: { hotspot: true },
    }),

    // About Page
    defineField({
      name: 'aboutHistoryImage',
      title: 'About - History Image',
      type: 'image',
      fieldset: 'about',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutTeamImage',
      title: 'About - Team Image',
      type: 'image',
      fieldset: 'about',
      options: { hotspot: true },
    }),

    // Method Page
    defineField({
      name: 'methodManualTherapy',
      title: 'Method - Manual Therapy',
      type: 'image',
      fieldset: 'method',
      options: { hotspot: true },
    }),
    defineField({
      name: 'methodClinicalFormulation',
      title: 'Method - Clinical Formulation',
      type: 'image',
      fieldset: 'method',
      options: { hotspot: true },
    }),
    defineField({
      name: 'methodStructuredRehab',
      title: 'Method - Structured Rehab',
      type: 'image',
      fieldset: 'method',
      options: { hotspot: true },
    }),
  ],
})

import { defineField, defineType } from 'sanity'
import { testimonialsData } from '../../data/testimonials'

export default defineType({
  name: 'testimonialImageOverride',
  title: 'Testimonial Image Override',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonialId',
      title: 'Select Static Testimonial',
      type: 'string',
      description: 'Search by patient name, category, or the first few words of their story.',
      options: {
        list: testimonialsData.map(t => {
          // Create a snippet from the content (first 10 words)
          const snippet = t.content 
            ? t.content.split(' ').slice(0, 10).join(' ') + '...'
            : 'No content';
          
          // Format category for the label
          const category = t.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          
          return {
            title: `[${category}] ${snippet}`,
            value: t.id
          }
        }),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Patient Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'testimonialId',
      media: 'image',
    },
    prepare({ title, media }) {
      // Find the label for the preview
      const testimonial = testimonialsData.find(t => t.id === title);
      const category = testimonial?.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Static';
      const snippet = testimonial?.content?.split(' ').slice(0, 6).join(' ') || title;
      
      return {
        title: snippet ? `"${snippet}..."` : title,
        subtitle: `Category: ${category}`,
        media
      }
    }
  },
})

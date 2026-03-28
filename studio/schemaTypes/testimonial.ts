import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'clientName', title: 'Client Name', type: 'string' }),
    defineField({ name: 'caseType', title: 'Case Type', type: 'string' }),
    defineField({ name: 'rating', title: 'Rating', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})

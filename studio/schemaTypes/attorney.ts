import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'attorney',
  title: 'Attorneys',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'title', title: 'Title/Position', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'bio', title: 'Biography', type: 'text', rows: 5 }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
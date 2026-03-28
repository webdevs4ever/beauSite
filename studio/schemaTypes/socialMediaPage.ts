import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'socialMediaPage',
  title: 'Social Media Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', title: 'Platform', type: 'string', description: 'e.g., Facebook, LinkedIn, Instagram'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Social Media Page',
      }
    },
  },
})

import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({ name: 'firmName', title: 'Firm Name', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'hours', title: 'Office Hours', type: 'text', rows: 3 }),
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 3 }),
  ],
})
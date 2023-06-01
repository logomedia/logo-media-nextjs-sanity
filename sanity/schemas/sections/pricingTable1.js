import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricingTable1',
  title: 'Pricing Table 1',
  icon: BookIcon,
  type: 'object',

  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow Text',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'plans',
      type: 'array',
      title: 'Plans',
      of: [{ title: 'Plan', type: 'plan' }],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

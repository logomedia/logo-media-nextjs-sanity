import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesInclude',
  title: 'Services Include Section',
  icon: BookIcon,
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'cards',
      type: 'array',
      title: 'List of Services',
      validation: (rule) => rule.required(),
      of: [{ type: 'cardImgTxtDesc' }],
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

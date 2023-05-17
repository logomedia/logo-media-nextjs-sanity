import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clients',
  title: 'Our Clients',
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
      name: 'logos',
      type: 'array',
      title: 'Client Logos',
      validation: (rule) => rule.required(),
      of: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
        },
      ],
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

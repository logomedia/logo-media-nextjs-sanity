import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  icon: BookIcon,
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
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

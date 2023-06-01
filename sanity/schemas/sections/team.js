import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
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
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow Text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'cards',
      type: 'array',
      title: 'Team Members',
      validation: (rule) => rule.required(),
      of: [
        {
          title: 'Team Member',
          type: 'teamMember',
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

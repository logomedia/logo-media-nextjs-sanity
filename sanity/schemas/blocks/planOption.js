import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Plan Option',
  name: 'planOption',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Disabled',
      name: 'disabled',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
      }
    },
  },
})

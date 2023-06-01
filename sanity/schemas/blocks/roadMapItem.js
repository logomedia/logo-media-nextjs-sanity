import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'roadMapItem',
  title: 'Roadmap Item',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'color',
      type: 'string',
      title: 'Color',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workflowCard',
  title: 'Workflow Card',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Icon',
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
})

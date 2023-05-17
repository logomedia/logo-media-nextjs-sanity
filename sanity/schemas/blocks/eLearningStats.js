import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'eLearningStats',
  title: 'Stats for e-Learning Hero',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'number',
      type: 'string',
      title: 'Stat Number',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'color',
      type: 'string',
      title: 'Background Circle Color',
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

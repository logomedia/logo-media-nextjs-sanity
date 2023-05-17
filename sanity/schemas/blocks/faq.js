import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Single FAQ',
  type: 'object',
  fieldsets: [
    {
      title: '',
      name: '',
    },
  ],
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'answer',
      type: 'array',
      title: 'Answer',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'question',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

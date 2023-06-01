import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bestForCustomerCard',
  title: 'Card',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'stat',
      type: 'string',
      title: 'Stat Number',
      validation: (rule) => rule.required(),
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

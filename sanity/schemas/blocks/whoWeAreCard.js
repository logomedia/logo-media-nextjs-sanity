import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'whoWeAreCard',
  title: 'Who We Are Section Card',
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

    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule) => rule.required(),
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

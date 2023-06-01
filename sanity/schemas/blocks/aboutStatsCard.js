import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutStatsCard',
  title: 'Card Block for About page Stats',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'stat',
      type: 'string',
      title: 'Main Stat Text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Stat Icon',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'color',
      type: 'string',
      title: 'Card Background color',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      media: 'icon',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
})

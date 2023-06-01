import { defineField, defineType } from 'sanity'

// Reusable block for layouts that have a Icon/Image, Title, and Description.

export default defineType({
  name: 'cardImgTxtDesc',
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
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'color',
      type: 'string',
      title: 'Color (optional)',
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Image/Icon',
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

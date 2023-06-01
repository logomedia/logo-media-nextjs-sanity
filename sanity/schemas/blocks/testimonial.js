import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',

  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'position',
      type: 'string',
      title: 'Position',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'testimonialDescription',
      type: 'array',
      title: 'Testimonial Description',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
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

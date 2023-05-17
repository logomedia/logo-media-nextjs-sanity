import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
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
      name: 'icons',
      type: 'array',
      title: 'Social Icons',
      of: [
        {
          title: 'Icon',
          type: 'iconWithLink',
        },
      ],
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

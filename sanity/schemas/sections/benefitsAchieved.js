import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'benefitsAchieved',
  title: 'Benefits Achieved Section',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Mid Section Image',
      name: 'midImage',
    },
  ],

  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
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
      name: 'benefits',
      type: 'array',
      title: 'Benefits List',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'benefit',
        },
      ],
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Middle Section Image',
      fieldset: 'midImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageAltText',
      type: 'string',
      title: 'Middle Section Image alt text',
      fieldset: 'midImage',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
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

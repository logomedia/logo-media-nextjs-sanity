import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'freeAnalysis',
  title: 'Get Free SEO Analysis',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Section Background Image',
      name: 'backgroundImage',
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
      name: 'info',
      type: 'array',
      title: 'Email and Location Info',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'iconWithLink',
        },
      ],
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Section Background Image',
      fieldset: 'backgroundImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageAltText',
      type: 'string',
      title: 'Section Background Image alt text',
      fieldset: 'backgroundImage',
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

import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Page Hero Section',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Section Image',
      name: 'sectionImage',
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
      title: 'Contact Information',
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
      title: 'Section Image',
      fieldset: 'sectionImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageAltText',
      type: 'string',
      title: 'Section Image alt text',
      fieldset: 'sectionImage',
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

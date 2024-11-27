import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'imageBlock',
  title: 'Image Block',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Image Block',
      name: 'image',
    },
  ],
  fields: [
    defineField({
      name: 'link',
      type: 'string',
      title: 'Link',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      fieldset: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Image alt Text',
      fieldset: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'alt',
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

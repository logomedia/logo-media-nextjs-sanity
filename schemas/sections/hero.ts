import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Hero image',
      name: 'hero',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow Text',
    }),
    defineField({
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    }),
    defineField({
      name: 'icons',
      type: 'array',
      title: 'Below Button Icons',
      of: [
        {
          title: 'Icon',
          type: 'icon',
        },
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Hero image',
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroImageAltText',
      type: 'string',
      title: 'Hero image alt Text',
      fieldset: 'hero',
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

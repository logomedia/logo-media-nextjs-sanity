import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'textWithBackground',
  title: 'Text With Background',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Background image',
      name: 'background',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
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
      name: 'image',
      type: 'image',
      title: 'Background image',
      fieldset: 'background',
    }),
    defineField({
      name: 'bgImageAltText',
      type: 'string',
      title: 'Background image alt Text',
      fieldset: 'background',
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

import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'boxedImageWithText',
  title: 'Boxed Image With Text',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Image',
      name: 'image',
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
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
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
      title: ' Image',
      fieldset: 'image',
    }),
    defineField({
      name: 'imageAltText',
      type: 'string',
      title: 'Image alt Text',
      fieldset: 'image',
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

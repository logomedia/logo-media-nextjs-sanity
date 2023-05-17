import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroLanding',
  title: 'Hero Landing',
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
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow Text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImageAltText',
      type: 'string',
      title: 'Hero image alt Text',
      fieldset: 'hero',
      validation: (rule) => rule.required(),
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

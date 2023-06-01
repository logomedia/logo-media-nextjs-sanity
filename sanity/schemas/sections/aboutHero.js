import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutHero',
  title: 'About Page Hero Section',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Hero Image',
      name: 'heroImage',
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
      title: 'Button Icon',
      of: [
        {
          title: 'Icon',
          type: 'icon',
        },
      ],
    }),

    defineField({
      name: 'cards',
      type: 'array',
      title: 'Stats List with icons',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'aboutStatsCard',
        },
      ],
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Hero Image',
      fieldset: 'heroImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImageAlt',
      type: 'string',
      title: 'Hero Image alt text',
      fieldset: 'heroImage',
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

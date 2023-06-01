import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ourVision',
  title: 'Our Vision Section',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Background Image',
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
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'videoUrl',
      type: 'string',
      title: 'Video URL',
    }),

    defineField({
      name: 'icons',
      type: 'array',
      title: 'Section Icons',
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
      title: 'Background Image',
      fieldset: 'backgroundImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageAltText',
      type: 'string',
      title: 'Background Image alt text',
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

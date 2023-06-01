import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bestForCustomers',
  title: 'We make the best for our customers',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      name: 'section',
      title: 'Second Section',
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
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow Text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description1',
      type: 'array',
      title: 'Description 1',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description2',
      type: 'array',
      title: 'Description 2',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'sectionHeading',
      type: 'string',
      title: 'Second Section Heading',
      fieldset: 'section',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'sectionDescription',
      type: 'array',
      title: 'Second Section Description',
      fieldset: 'section',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'stats',
      type: 'array',
      title: 'Section Stats',
      fieldset: 'section',
      of: [
        {
          type: 'bestForCustomerCard',
        },
      ],
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Section Image',
      fieldset: 'section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageAltText',
      type: 'string',
      title: 'Section Image alt text',
      fieldset: 'section',
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

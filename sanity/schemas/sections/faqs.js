import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faqs',
  title: 'Frequently Asked Questions',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'FAQ Section Image',
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
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow Text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'faqsList',
      type: 'array',
      title: 'Questions',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'faq',
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

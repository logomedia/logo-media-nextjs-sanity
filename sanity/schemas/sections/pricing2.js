import { BookIcon } from '@sanity/icons'
import { defineField, defineType, Rule } from 'sanity'

export default defineType({
  name: 'pricing2',
  title: 'Pricing Table 2',
  icon: BookIcon,
  type: 'object',

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
      name: 'featuresTitle',
      type: 'string',
      title: 'Features Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'pricingFeature',
        },
      ],
    }),

    defineField({
      name: 'plans',
      type: 'array',
      title: 'Plans',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'pricingPlan2',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

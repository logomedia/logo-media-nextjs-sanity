import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricingFeature',
  title: 'Feature',
  type: 'object',

  fields: [
    defineField({
      name: 'feature',
      type: 'string',
      title: 'Feature Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'popover',
      type: 'string',
      title: 'Feature Details Popover',
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'feature',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

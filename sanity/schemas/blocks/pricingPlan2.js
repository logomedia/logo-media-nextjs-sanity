import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricingPlan2',
  title: 'Plan for pricing2',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'price',
      type: 'string',
      title: 'Price',
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
      name: 'popular',
      type: 'boolean',
      title: 'Popular',
      initialValue: false,
    }),

    defineField({
      name: 'enabledFeatures',
      type: 'array',
      title: 'Enabled Features',
      validation: (rule) => rule.required(),
      of: [
        {
          name: 'featureProvided',
          title: 'Feature Provided',
          type: 'boolean',
          initialValue: false,
          validation: (rule) => rule.required(),
        },
      ],
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
      title: 'Plan Icon',
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
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

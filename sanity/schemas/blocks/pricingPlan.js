import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricingPlan',
  title: 'Plan for Pricing',
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
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'popular',
      type: 'boolean',
      title: 'Popular',
      initialValue: false,
    }),

    defineField({
      name: 'services',
      type: 'array',
      title: 'Services Provided',
      validation: (rule) => rule.required(),
      of: [
        {
          name: 'service',
          title: 'Service Name',
          type: 'string',
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

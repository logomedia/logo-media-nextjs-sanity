import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesCard',
  title: 'Services Card',
  type: 'object',
  fieldsets: [
    {
      title: 'Card Icon',
      name: 'cardIcon',
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
      title: 'Below Button Icons',
      of: [
        {
          title: 'Icon',
          type: 'icon',
        },
      ],
    }),

    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Card Icon',
      fieldset: 'cardIcon',
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

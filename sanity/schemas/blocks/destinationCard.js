import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'destinationCard',
  title: 'Destination Card',
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
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'icon',
      type: 'image',
      title: 'Location Icon',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'iconColor',
      type: 'string',
      title: 'Icon Color',
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
      title: 'background Image alt text',
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

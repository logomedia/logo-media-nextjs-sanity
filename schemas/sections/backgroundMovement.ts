import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'backgroundMovement',
  title: 'Background Movement',
  icon: BookIcon,
  type: 'object',
  fieldsets: [
    {
      title: 'Image 1',
      name: 'imageOne',
    },
    {
      title: 'Image 2',
      name: 'imageTwo',
    },
    {
      title: 'Image 3',
      name: 'imageThree',
    },
    {
      title: 'Image 4',
      name: 'imageFour',
    },
    {
      title: 'Image 5',
      name: 'imageFive',
    },
    {
      title: 'Image 6',
      name: 'imageSix',
    },
    {
      title: 'Image 7',
      name: 'imageSeven',
    },
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Cta',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image1',
      type: 'image',
      title: 'Image 1',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image1alt',
      type: 'string',
      title: 'Image 1 Alt text',
      fieldset: 'imageOne',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image2',
      type: 'image',
      title: 'Image 2',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image2alt',
      type: 'string',
      title: 'Image 2 Alt text',
      fieldset: 'imageTwo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image3',
      type: 'image',
      title: 'Image 3',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image3alt',
      type: 'string',
      title: 'Image 3 Alt text',
      fieldset: 'imageThree',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image4',
      type: 'image',
      title: 'Image 4',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image4alt',
      type: 'string',
      title: 'Image 4 Alt text',
      fieldset: 'imageFour',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image5',
      type: 'image',
      title: 'Image 5',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image5alt',
      type: 'string',
      title: 'Image 5 Alt text',
      fieldset: 'imageFive',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image6',
      type: 'image',
      title: 'Image 6',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image6alt',
      type: 'string',
      title: 'Image 6 Alt text',
      fieldset: 'imageSix',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image7',
      type: 'image',
      title: 'Image 7',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image7alt',
      type: 'string',
      title: 'Image 7 Alt text',
      fieldset: 'imageSeven',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image1',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
})

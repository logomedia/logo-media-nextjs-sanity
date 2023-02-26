import { defineField, defineType } from 'sanity'

import ctatypes from './ctatypes'

export default defineType({
  title: 'Call to Action',
  name: 'cta',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
    },
  ],
  validation: (Rule) =>
    Rule.custom(
      (fields = {}) =>
        !fields.route || !fields.link || 'Only one link type is allowed'
    ),

  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Button Type',
      name: 'cta_types',
      type: 'document',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'button_type',
          type: 'string',
          title: 'Button Type',
          initialValue: 'primary',
          options: {
            list: [...ctatypes],
          },
        },
      ],
    }),
    defineField({
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'route',
      type: 'reference',
      fieldset: 'link',
      to: [
        { type: 'post' },
        { type: 'page' },
        { type: 'project' },
        { type: 'action' },
      ],
    }),
    defineField({
      title: 'External link',
      name: 'exroute',
      type: 'url',
      fieldset: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      routeTitle: 'page.title',
      slug: 'page.slug.current',
      exroute: 'exroute',
    },
    prepare({ title, routeTitle = '', slug, exroute }) {
      const subtitleExtra = slug
        ? `Slug:/${slug}/`
        : exroute
        ? `External link: ${exroute}`
        : 'Not set'
      return {
        title: `${title}`,
        subtitle: `${routeTitle} ${subtitleExtra}`,
      }
    },
  },
})

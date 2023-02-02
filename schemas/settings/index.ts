import { CogIcon } from '@sanity/icons'
import * as demo from 'lib/demo.data'
import { defineArrayMember, defineField, defineType } from 'sanity'

import OpenGraphInput from './OpenGraphInput'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      description: 'Website Email Address',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      description: 'Website Phone Number',
      title: 'Phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      description: 'This website url, used to create canonical url.',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    }),
    defineField({
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'page' },
    }),
    defineField({
      name: 'description',
      description:
        'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'Descriprion',
      type: 'array',
      initialValue: demo.description,
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description:
        'Used for social media previews when linking to the index page.',
      type: 'image',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
      ],
    }),
  ],
})

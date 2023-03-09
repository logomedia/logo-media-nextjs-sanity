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
      name: 'facebook',
      description: 'Facebook Page URL',
      title: 'Facebook',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'instagram',
      description: 'Instagram Page URL',
      title: 'Instagram',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'twitter',
      description: 'Twitter Page URL',
      title: 'Twitter',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkedin',
      description: 'LinkedIn Page URL',
      title: 'LinkedIn',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'youtube',
      description: 'Youtube Page URL',
      title: 'Youtube',
      type: 'url',
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
      name: 'mainMenu',
      title: 'Main Menu Navigation',
      type: 'array',
      of: [
        {
          title: 'Nav Links',
          type: 'navItem',
        },
      ],
    }),
    defineField({
      name: 'footerMenus',
      title: 'Footer Menus',
      type: 'array',
      of: [
        {
          title: 'Nav Links',
          type: 'navItem',
        },
      ],
    }),
  ],
})

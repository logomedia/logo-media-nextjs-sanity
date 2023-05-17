import { UsersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'client',
  title: 'Clients',
  icon: UsersIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientImage',
      title: 'Client Logo',
      type: 'image',
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'clientImage',
    },
    prepare({ title, media, }) {
      return { title, media }
    },
  },
})

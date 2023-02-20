import { DocumentsIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

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
  name: 'page',
  title: 'Pages',
  icon: DocumentsIcon,
  type: 'document',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [{ type: 'hero' }, { type: 'projects' }, { type: 'posts' }],
    }),
    defineField({
      name: 'description',
      title: 'Page Meta Description',
      type: 'text',
      fieldset: 'metadata',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      fieldset: 'metadata',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'ogImage',
    },
    prepare({ title, description, media }) {
      const subtitles = [description && `${description}`].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})

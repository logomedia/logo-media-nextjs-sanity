import { CodeIcon } from "@sanity/icons"
import { format, parseISO } from "date-fns"
import { defineField, defineType } from "sanity"

import authorType from "./author"

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
	name: "project",
	title: "Projects",
	icon: CodeIcon,
	type: "document",
	fieldsets: [
		{
			title: "SEO & metadata",
			name: "metadata",
		},
	],
	fields: [
		defineField({
			name: "name",
			title: "Client Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "logo",
			title: "Client Logo",
			type: "image",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			title: "Client Description",
			type: "text",
		}),
		defineField({
			name: "website",
			title: "Website",
			type: "url",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "brief",
			title: "Project Brief",
			type: "text",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "scope",
			title: "Project Scope",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "image",
					fields: [
						{
							type: "string",
							name: "alt",
							title: "Alternative text",
						},
					],
				},
			],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "results",
			title: "Project Results",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "image",
					fields: [
						{
							type: "string",
							name: "alt",
							title: "Alternative text",
						},
					],
				},
			],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "date",
			title: "Date",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "images",
			title: "Project Images",
			type: "array",
			of: [{ type: "image" }],
			validation: (rule) => rule.required().min(4).error("At least 4 images are needed"),
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "metaTitle",
			title: "Page Meta Title",
			type: "string",
			fieldset: "metadata",
		}),
		defineField({
			name: "schemaDescription",
			title: "Schema Description",
			type: "text",
			fieldset: "metadata",
		}),
		defineField({
			name: "metaDescription",
			title: "Page Meta Description",
			type: "text",
			fieldset: "metadata",
		}),
	],
	preview: {
		select: {
			title: "name",
			date: "date",
			media: "coverImage",
		},
		prepare({ title, media, date }) {
			return { title, media }
		},
	},
})

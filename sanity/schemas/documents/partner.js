import { UsersIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

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
	name: "partner",
	title: "Partners",
	icon: UsersIcon,
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Partner Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			title: "Partner Description",
			type: "text",
		}),
		defineField({
			name: "website",
			title: "Website",
			type: "url",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "partnerImage",
			title: "Partner Logo",
			type: "image",
		}),
		defineField({
			name: "tags",
			title: "Partner Type",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "partnerImage",
		},
		prepare({ title, media }) {
			return { title, media }
		},
	},
})

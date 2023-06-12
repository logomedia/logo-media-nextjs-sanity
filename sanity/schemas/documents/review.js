import { StarIcon } from "@sanity/icons"
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
	name: "review",
	title: "Reviews",
	icon: StarIcon,
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Client Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "title",
			title: "Client Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "company",
			title: "Client Company",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "rating",
			title: "Client Rating",
			type: "number",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			title: "Review Description",
			type: "text",
		}),
	],
	preview: {
		select: {
			title: "name",
		},
		prepare({ title }) {
			return { title }
		},
	},
})

import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "favoriteDestinations",
	title: "4 image block with text",
	icon: BookIcon,
	type: "object",

	fields: [
		defineField({
			name: "heading",
			type: "string",
			title: "Heading",
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "description",
			type: "array",
			title: "Description",
			of: [{ type: "block" }],
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "favoritesList",
			type: "array",
			title: "Favorites List",
			validation: (rule) => rule.required(),
			of: [
				{
					name: "listItem",
					title: "List Item",
					type: "string",
				},
			],
		}),

		defineField({
			name: "cards",
			type: "array",
			title: "Favorite Destination Cards",
			validation: (rule) => rule.required(),
			of: [
				{
					type: "destinationCard",
				},
			],
		}),
	],

	preview: {
		select: {
			title: "heading",
		},
		prepare({ title }) {
			return {
				title,
			}
		},
	},
})

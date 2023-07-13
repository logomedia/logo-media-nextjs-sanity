import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "servicesOfflineSeo",
	title: "Services Second Section after Hero",
	icon: BookIcon,
	type: "object",
	fieldsets: [
		{
			title: "Inline Section Image",
			name: "sectionImage",
		},
	],

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
			name: "list",
			type: "array",
			title: "List Items",
			of: [
				{
					name: "listItem",
					title: "List Item",
					type: "string",
				},
			],
		}),

		defineField({
			name: "ctas",
			type: "array",
			title: "Call to actions",
			of: [
				{
					title: "Call to action",
					type: "cta",
				},
			],
		}),

		defineField({
			name: "icons",
			type: "array",
			title: "Button Icons",
			of: [
				{
					title: "Icon",
					type: "icon",
				},
			],
		}),

		defineField({
			name: "image",
			type: "image",
			title: "Section Image",
			fieldset: "sectionImage",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "imageAltText",
			type: "string",
			title: "Section Image alt text",
			fieldset: "sectionImage",
		}),
	],

	preview: {
		select: {
			title: "heading",
			media: "image",
		},
		prepare({ title, media }) {
			return {
				title,
				media,
			}
		},
	},
})

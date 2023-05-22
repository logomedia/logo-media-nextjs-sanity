import { defineField, defineType } from "sanity"

export default defineType({
	title: "Plan",
	name: "plan",
	type: "object",

	fields: [
		defineField({
			title: "Title",
			name: "title",
			type: "string",
			validation: (rule) => rule.required(),
		}),

		defineField({
			title: "Price",
			name: "price",
			type: "string",
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
			title: "Icons",
			name: "icons",
			type: "array",
			validation: (rule) => rule.required(),
			of: [
				{
					title: "Icon",
					type: "icon",
				},
			],
		}),

		defineField({
			title: "Commons",
			name: "commons",
			type: "array",
			validation: (rule) => rule.required(),
			of: [
				{
					title: "Common",
					type: "string",
				},
			],
		}),

		defineField({
			title: "Options",
			name: "options",
			type: "array",
			validation: (rule) => rule.required(),
			of: [
				{
					type: "planOption",
				},
			],
		}),
		defineField({
			name: "ctas",
			type: "array",
			title: "Call to actions",
			validation: (rule) => rule.required(),
			of: [
				{
					title: "Call to action",
					type: "cta",
				},
			],
		}),
	],

	preview: {
		select: {
			title: "title",
		},
		prepare({ title }) {
			return {
				title: title,
			}
		},
	},
})

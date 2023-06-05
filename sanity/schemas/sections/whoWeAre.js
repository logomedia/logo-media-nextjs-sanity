import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "whoWeAre",
	title: "Who We Are",
	icon: BookIcon,
	type: "object",
	fieldsets: [
		{
			title: "Section Image",
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
			name: "eyebrow",
			type: "string",
			title: "Eyebrow Text",
			validation: (rule) => rule.required(),
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
		defineField({
			name: "cards",
			type: "array",
			title: "Achievements",
			validation: (rule) => rule.required(),
			of: [
				{
					title: "Card",
					type: "whoWeAreCard",
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
			title: "Section Image alt Text",
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

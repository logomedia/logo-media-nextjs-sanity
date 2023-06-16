import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "eLearningHero",
	title: "Hero with Styled Text and Motion",
	icon: BookIcon,
	type: "object",
	fieldsets: [
		{
			title: "Hero Image",
			name: "heroImage",
		},
		{
			title: "Heading",
			name: "heading",
		},
	],

	fields: [
		defineField({
			name: "headingStart",
			type: "string",
			title: "Heading Start",
			fieldset: "heading",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "headingHighlight",
			type: "string",
			title: "Heading Highlight",
			fieldset: "heading",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "headingMainHighlight",
			type: "string",
			title: "Heading Main Highlight",
			fieldset: "heading",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "headingEnd",
			type: "string",
			title: "Heading End",
			fieldset: "heading",
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
			title: "Below Button Icons",
			of: [
				{
					title: "Icon",
					type: "icon",
				},
			],
		}),

		defineField({
			name: "stats",
			type: "array",
			title: "Hero Stats",
			of: [
				{
					type: "eLearningStats",
				},
			],
		}),

		defineField({
			name: "imagesArray",
			type: "array",
			title: "Hovering Icons Over Hero Section Image",
			of: [
				{
					name: "icon",
					title: "Icon",
					type: "image",
				},
			],
		}),

		defineField({
			name: "image",
			type: "image",
			title: "Hero Image",
			fieldset: "heroImage",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "imageAltText",
			type: "string",
			title: "Hero Image alt text",
			fieldset: "heroImage",
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

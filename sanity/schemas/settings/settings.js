import { CogIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "settings",
	title: "Settings",
	type: "document",
	icon: CogIcon,
	preview: { select: { title: "title", subtitle: "description" } },
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: "title",
			description: "This field is the title of your blog.",
			title: "Title",
			type: "string",
			initialValue: "Logo Media",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "email",
			description: "Website Email Address",
			title: "Email",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "address",
			description: "Company Address",
			title: "Address",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "phone",
			description: "Website Phone Number",
			title: "Phone",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "url",
			description: "This website url, used to create canonical url.",
			title: "URL",
			type: "url",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Brand logo",
			description: "Best choice is to use an SVG where the color are set with currentColor",
			name: "logo",
			type: "image",
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
					description: "Important for SEO and accessiblity.",
				},
			],
		}),
		defineField({
			title: "Brand logo Dark",
			description: "Best choice is to use an SVG where the color are set with currentColor",
			name: "logoDark",
			type: "image",
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
					description: "Important for SEO and accessiblity.",
				},
			],
		}),
		defineField({
			name: "mainMenu",
			title: "Main Menu Navigation",
			type: "array",
			of: [
				{
					title: "Nav Links",
					type: "navItem",
				},
			],
		}),
		defineField({
			name: "mainMenuCTAs",
			title: "Main Menu CTAs",
			type: "array",
			of: [
				{
					title: "Call to action",
					type: "cta",
				},
			],
		}),
		defineField({
			name: "footerMenu",
			title: "Footer Menu Navigation",
			type: "array",
			of: [
				{
					title: "Nav Links",
					type: "navItem",
				},
			],
		}),
		defineField({
			name: "newsletterTitle",
			description: "Newsletter Title",
			title: "Newsletter Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "newsletterDescription",
			description: "Newsletter Description",
			title: "Newsletter Description",
			type: "string",
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "socials",
			title: "Social Media",
			type: "array",
			of: [
				{
					title: "Social Media",
					type: "social",
				},
			],
		}),
	],
})

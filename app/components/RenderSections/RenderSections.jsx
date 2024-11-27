"use client"
import { motion } from "framer-motion"

import capitalizeString from "../../../utils/capitalizeString"
import * as SectionComponents from "../../sections"

function resolveSections(section) {
	const Section = SectionComponents[capitalizeString(section._type)]
	
	if (Section) {
		console.log(Section)
		return Section
	}

	//console.error("Cant find section", section) // eslint-disable-line no-console
	return null
}

function RenderSections(props) {
	const { sections, projects, reviews, partners, posts, preview } = props
	
	if (!sections) {
		console.error("Missing section")
		return <div>Missing sections</div>
	}

	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 20 }} exit={{ opacity: 0, y: 20 }}>
			{sections.map((section) => {
				const SectionComponent = resolveSections(section)
				
				if (!SectionComponent) {
					return <div key={section._key}>Missing section {section._type}</div>
				}
				return <SectionComponent {...section} key={section._key} posts={posts} projects={projects} reviews={reviews} preview={preview} partners={partners} />
			})}
		</motion.div>
	)
}

export default RenderSections

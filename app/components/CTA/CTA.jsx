import Link from "next/link"

import React from "react"
import { useContext } from "react"

import Calendly from "../Calendly"
import styles from "./Cta.module.css"
import { ModalContext } from "../../../context/projectModal"

function Cta(props) {
	const modalContext = useContext(ModalContext)
	const toggleProjectModal = () => modalContext.setIsOpen(!modalContext.isOpen)

	const { title, route, link, cta_types, _type } = props
	let btnStyles = ""
	if (cta_types.button_type === "primary") {
		btnStyles = styles.button
	} else if (cta_types.button_type === "secondary") {
		btnStyles = styles.secondaryButton
	} else if (cta_types.button_type === undefined) {
		btnStyles = styles.button
	}
	if (route._type === "action") {
		if (title === "Book a Call") {
			return <Calendly styles={btnStyles} text={title} />
		}
		if (title === "Start a Project") {
			return (
				<button className={btnStyles} onClick={toggleProjectModal}>
					{title}
				</button>
			)
		}
		if (title === "Call") {
			return (
				<a className={btnStyles} href='tel:3053172807'>
					{title}
				</a>
			)
		}
		if (title === "Text") {
			return (
				<a className={btnStyles} href='sms:3053172807'>
					{title}
				</a>
			)
		}
		if (title === "Email") {
			return (
				<a className={btnStyles} href='mailto:info@logo.media'>
					{title}
				</a>
			)
		}
		if (title === "Contact Us") {
			return (
				<Link className={btnStyles} href='/contact-us'>
					{title}{" "}
				</Link>
			)
		}
		return <a className={btnStyles}>{title} </a>
	}
	if (route._type === "page" && route.slug.current) {
		return (
			<Link className={btnStyles} href={`${route.slug.current}`}>
				{title}
			</Link>
		)
	}
	if (route._type === "post" && route.slug.current) {
		return (
			<Link className={btnStyles} href={`/news-and-trends/${route.slug.current}`}>
				{title}
			</Link>
		)
	}
	if (route._type === "project" && route.slug.current) {
		return (
			<Link className={btnStyles} href={`/projects/${route.slug.current}`}>
				{title}
			</Link>
		)
	}

	return <a className={btnStyles}>{title}</a>
}

export default Cta

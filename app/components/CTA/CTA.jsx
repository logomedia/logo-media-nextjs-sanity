import Link from "next/link"
import { Button } from "@mui/material"

import React from "react"
import { useContext } from "react"

import Calendly from "../Calendly"
import styles from "./Cta.module.css"
import { ModalContext } from "../../../context/projectModal"

function Cta(props) {
	const modalContext = useContext(ModalContext)
	const toggleProjectModal = () => modalContext.setIsOpen(!modalContext.isOpen)

	const { title, route, link, cta_types, cta_variant, cta_size, _type } = props
	let btnStyles = ""

	if (route._type === "action") {
		if (title === "Book a Call") {
			return (
				<Button component='div' color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<Calendly text={title} />
				</Button>
			)
		}
		if (title === "Start a Project") {
			return (
				<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size} onClick={toggleProjectModal}>
					{title}
				</Button>
			)
		}
		if (title === "Call") {
			return (
				<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<a href='tel:3053172807'>{title}</a>
				</Button>
			)
		}
		if (title === "Text") {
			return (
				<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<a href='sms:3053172807'>{title}</a>
				</Button>
			)
		}
		if (title === "Email") {
			return (
				<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<a href='mailto:info@logo.media'>{title}</a>
				</Button>
			)
		}
		if (title === "Contact Us") {
			return (
				<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<Link href='/contact-us'>{title} </Link>
				</Button>
			)
		}
		return (
			<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
				{title}{" "}
			</Button>
		)
	}
	if (route._type === "page" && route.slug.current) {
		return (
			<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
				<Link href={`${route.slug.current}`}>{title}</Link>
			</Button>
		)
	}
	if (route._type === "post" && route.slug.current) {
		return (
			<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
				<Link className={btnStyles} href={`/news-and-trends/${route.slug.current}`}>
					{title}
				</Link>
			</Button>
		)
	}
	if (route._type === "project" && route.slug.current) {
		return (
			<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
				<Link className={btnStyles} href={`/projects/${route.slug.current}`}>
					{title}
				</Link>
			</Button>
		)
	}

	return (
		<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
			{title}
		</Button>
	)
}

export default Cta

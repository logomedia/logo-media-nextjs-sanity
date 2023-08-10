import Link from "next/link"
import { Button } from "@mui/material"

import React from "react"
import { useContext } from "react"

import Calendly from "../Calendly"

import { ModalContext } from "../../../context/projectModal"
import { ClassNames } from "@emotion/react"

function Cta(props) {
	const modalContext = useContext(ModalContext)
	const toggleProjectModal = () => {
		modalContext.setIsOpen(!modalContext.isOpen)
		document.body.style.height = "100vh"
		document.body.style.overflow = "hidden"
	}

	const { title, route, link, cta_types, cta_variant, cta_size, _type, className } = props
	let btnStyles = ""
	const btnClass = className ? className : ""
	if (route._type === "action") {
		if (route.title === "Book a Call") {
			return (
				<Button component='div' color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<Calendly text={title} />
				</Button>
			)
		}
		if (route.title === "Start a Project") {
			return (
				<Button className={btnClass} color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size} onClick={toggleProjectModal}>
					{title}
				</Button>
			)
		}
		if (route.title === "Call") {
			return (
				<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<a href='tel:3053172807'>{title}</a>
				</Button>
			)
		}
		if (route.title === "Text") {
			return (
				<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<a href='sms:3053172807'>{title}</a>
				</Button>
			)
		}
		if (route.title === "Email") {
			return (
				<Button color={cta_types.button_type} variant={cta_variant.button_variant} size={cta_size.button_size}>
					<a href='mailto:info@logo.media'>{title}</a>
				</Button>
			)
		}
		if (route.title === "Contact Us") {
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

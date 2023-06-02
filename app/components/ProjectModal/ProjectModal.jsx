"use client"

import emailjs from "@emailjs/browser"
import { useContext, useState } from "react"
import CloseIcon from "../icons/Close"
import { ModalContext } from "../../../context/projectModal"
import styles from "./projectModal.module.css"
import ContactMarketingForm from "../../sections/Contact/ContactForm"
import { SettingsContext } from "../Settings/SettingsContext"

const ProjectModal = (props) => {
	const modalContext = useContext(ModalContext)
	const modeContent = useContext(SettingsContext)
	const { themeMode } = modeContent
	const dark = themeMode === "dark"
	console.log(dark)

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [website, setWebsite] = useState("")
	const [message, setMessage] = useState("About Us:" + "\r\n" + "\r\n" + "Project Description:" + "\r\n" + "\r\n" + "Project Goal:")
	const [successMessage, setSuccessMessage] = useState("")
	const toSend = {
		from_name: firstName + " " + lastName,
		to_name: "Logo Media",
		message: website + " " + message + " " + phone,
		reply_to: email,
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = {
			data: {
				name: firstName + " " + lastName,
				phone: phone,
				website: website,
				email: email,
				project_details: message,
			},
		}
		emailjs
			.send("service_1tbbiwc", "template_nta5lyb", toSend, "XtmHxL5zdet_8tKjY")
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text)
			})
			.catch((err) => {
				console.log("FAILED...", err)
			})
		fetch("https://admin.logo.media/api/contacts", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data)
				setSuccessMessage("Success! Your message has been sent")
				setFirstName("")
				setLastName("")
				setPhone("")
				setWebsite("")
				setEmail("")
				setMessage("")
			})
			.catch((error) => {
				setSuccessMessage("Error:", error)
			})
	}
	const innerModalStyles = dark ? styles.darkInnerModal : styles.innerModal
	const closeStyles = dark ? styles.darkClose : styles.close
	return (
		<div className={styles.modal}>
			<div className={`${innerModalStyles}`}>
				<CloseIcon
					className={`${closeStyles}`}
					onClick={() => {
						modalContext.setIsOpen(false)
						document.body.style.height = ""
						document.body.style.overflow = ""
					}}
				/>
				<h2> Start a Project</h2>
				<ContactMarketingForm />
			</div>
		</div>
	)
}
export default ProjectModal

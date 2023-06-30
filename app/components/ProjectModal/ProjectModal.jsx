"use client"

import emailjs from "@emailjs/browser"
import { useContext, useState } from "react"
import CloseIcon from "../icons/Close"
import { ModalContext } from "../../../context/projectModal"
import styles from "./projectModal.module.css"
import ContactMarketingForm from "../../sections/Contact/ContactForm"
import { SettingsContext } from "../Settings/SettingsContext"
import { usePathname } from "next/navigation"

const ProjectModal = (props) => {
	const modalContext = useContext(ModalContext)
	const modeContent = useContext(SettingsContext)
	const { themeMode } = modeContent
	const dark = themeMode === "dark"

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

"use client"
import React, { useState } from "react"
import { createContext } from "react"
import ProjectModal from "../app/components/ProjectModal/ProjectModal"

export const ModalContext = createContext()
export const ProjectModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
			{isOpen ? <ProjectModal /> : ""}
		</ModalContext.Provider>
	)
}

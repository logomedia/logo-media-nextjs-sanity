"use client"
import { useEffect, useState } from "react"
import { PopupButton } from "react-calendly"

const Calendly = ({ url, prefill, pageSettings, utm, text, styles }) => {
	const [root, setRoot] = useState("")
	useEffect(() => setRoot(document.getElementById("app")), [])

	return (
		<PopupButton
			url='https://calendly.com/logo_media/meet'
			rootElement={root}
			text={text}
			pageSettings={{
				backgroundColor: "ffffff",
				hideEventTypeDetails: false,
				hideLandingPageDetails: false,
				primaryColor: "540e6f",
				textColor: "000",
			}}
		/>
	)
}

export default Calendly

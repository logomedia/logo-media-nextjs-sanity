// next
import Link from "next/link"
import SVG from "react-inlinesvg"

import styles from "./Logo.module.css"
import { useContext } from "react"
import { SettingsContext } from "../Settings/SettingsContext"

// ----------------------------------------------------------------------

function Logo({ settings }) {
	const { logo, logoDark } = settings
	const modeContent = useContext(SettingsContext)
	const { themeMode } = modeContent

	if (themeMode === "dark") {
		return (
			<Link href='/' className={styles.logoLink}>
				<SVG className={styles.Logo} src={logoDark.asset.url} />
			</Link>
		)
	} else {
		return (
			<Link href='/' className={styles.logoLink}>
				<SVG className={styles.Logo} src={logo.asset.url} />
			</Link>
		)
	}
}

export default Logo

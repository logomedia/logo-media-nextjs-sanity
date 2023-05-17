// next
import Link from "next/link"
import SVG from "react-inlinesvg"

import styles from "./Logo.module.css"

// ----------------------------------------------------------------------

function Logo({ settings }) {
	const { logo } = settings

	return (
		<Link href='/' className={styles.logoLink}>
			<SVG className={styles.Logo} src={logo.asset.url} />
		</Link>
	)
}

export default Logo

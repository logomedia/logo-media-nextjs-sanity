"use client"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"

export default function LoadingSkeleton({ children }) {
	function load() {
		setTimeout(function () {
			setLoading(false)
		}, 1000)
	}
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		load()
	})
	return (
		<>
			{loading ? (
				<>
					<Loader />
					{children}
				</>
			) : (
				<>{children}</>
			)}
		</>
	)
}
function Loader() {
	return (
		<div className={styles.container} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className={styles.ldsRoller}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

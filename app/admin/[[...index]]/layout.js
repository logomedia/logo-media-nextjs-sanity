import styles from "./admin.css"
export default async function Layout({ children }) {
	return (
		<html>
			<body>{children}</body>
		</html>
	)
}

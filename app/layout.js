export default async function RootLayout({ children }) {
	return (
		<html>
			<body>
				<div id='app'>{children}</div>
			</body>
		</html>
	)
}

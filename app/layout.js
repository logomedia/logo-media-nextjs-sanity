export const metadata = {
	icons: {
		icon: "public/icon.svg",
		shortcut: "public/icon.svg",
		apple: "public/icon.svg",
		other: {
			rel: "public/icon.svg",
			url: "public/icon.svg",
		},
	},
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#540e6f" },
		{ media: "(prefers-color-scheme: dark)", color: "#bce6f4" },
	],
}

export default async function RootLayout({ children }) {
	return (
		<html>
			<body>
				<div id='app'>{children}</div>
			</body>
		</html>
	)
}

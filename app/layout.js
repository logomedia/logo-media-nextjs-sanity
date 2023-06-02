import { getSettings } from "../lib/sanity.client"
import { Header } from "./sections/Header"
import { Footer } from "./sections/Footer"
import ContextWrapper from "../app/components/ContextWrapper"
import { ModalContext } from "../context/projectModal"
import styles from "./globals.css"

// slick-carousel
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
	const settings = await getSettings()

	return (
		<>
			<html>
				<body>
					<div id='app'>
						<ContextWrapper>
							<Header settings={settings} />
							{children}
							<Footer settings={settings} />
						</ContextWrapper>
					</div>
				</body>
			</html>
		</>
	)
}

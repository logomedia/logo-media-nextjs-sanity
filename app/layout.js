import { getSettings } from "../lib/sanity.client"
import { Header } from "./sections/Header"
import { Footer } from "./sections/Footer"
import ContextWrapper from "../app/components/ContextWrapper"
import styles from "./globals.css"

// slick-carousel
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default async function RootLayout({ children }) {
	const settings = await getSettings()
	return (
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
	)
}

import { ProjectModalProvider } from "../context/projectModal"
import { getSettings } from "../lib/sanity.client"
import { Header } from "./sections/Header"
import { Footer } from "./sections/Footer"
import { ThemeSettings, SettingsProvider } from "./components/settings"
import ThemeProvider from "../theme"
import styles from "./globals.css"

export default async function RootLayout({ children }) {
	const settings = await getSettings()
	return (
		<html>
			<body>
				<SettingsProvider>
					<ThemeProvider>
						<ThemeSettings>
							<ProjectModalProvider>
								<div id='app'>
									<Header settings={settings} />
									{children}
									<Footer settings={settings} />
								</div>
							</ProjectModalProvider>
						</ThemeSettings>
					</ThemeProvider>
				</SettingsProvider>
			</body>
		</html>
	)
}

import { ProjectModalProvider } from "../../../context/projectModal"
import { getSettings } from "../../../lib/sanity.client"
import { Header } from "../../sections/Header"
import { ThemeSettings, SettingsProvider } from "../../components/Settings"
import ThemeProvider from "../../../theme"
import styles from "../../globals.css"

export default async function PageLayout({ children }) {
	const settings = await getSettings()
	return (
		<html>
			<body>
				<SettingsProvider>
					<ThemeProvider>
						<ThemeSettings>
							<ProjectModalProvider>
								<Header settings={settings} />
								{children}
							</ProjectModalProvider>
						</ThemeSettings>
					</ThemeProvider>
				</SettingsProvider>
			</body>
		</html>
	)
}

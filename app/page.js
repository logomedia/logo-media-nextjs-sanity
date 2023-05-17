import { getHomepage } from "../lib/sanity.client"
import RenderSections from "../app/components/RenderSections/RenderSections"
import { ProjectModalProvider } from "../context/projectModal"
import { getSettings } from "../lib/sanity.client"
import { Header } from "./sections/Header"
import { ThemeSettings, SettingsProvider } from "./components/Settings"
import ThemeProvider from "../theme"
import styles from "./globals.css"

export default async function Page() {
	const settings = await getSettings()
	const home = await getHomepage()
	const content = home?.content
	return (
		<SettingsProvider>
			<ThemeProvider>
				<ThemeSettings>
					<ProjectModalProvider>
						<Header settings={settings} />
						{content && <RenderSections sections={content} />}
					</ProjectModalProvider>
				</ThemeSettings>
			</ThemeProvider>
		</SettingsProvider>
	)
}

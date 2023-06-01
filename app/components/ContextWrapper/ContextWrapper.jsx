"use client"
import { ProjectModalProvider } from "../../../context/projectModal"
import { ThemeSettings, SettingsProvider } from "../Settings"
import ThemeProvider from "../../../theme"
export default function ContextWrapper({ children }) {
	return (
		<SettingsProvider>
			<ThemeProvider>
				<ThemeSettings>
					<ProjectModalProvider>{children}</ProjectModalProvider>
				</ThemeSettings>
			</ThemeProvider>
		</SettingsProvider>
	)
}

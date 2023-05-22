"use client"
import PropTypes from "prop-types"
import { useMemo } from "react"
// @mui
import { CssBaseline } from "@mui/material"
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles"
// components
import { useSettingsContext } from "../app/components/Settings"
//
import palette from "./palette"
import typography from "./typography"
import shadows from "./shadows"
import componentsOverride from "./overrides"
import customShadows from "./customShadows"
import GlobalStyles from "./globalStyles"

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
	children: PropTypes.node,
}

export default function ThemeProvider({ children }) {
	const { themeMode, themeDirection } = useSettingsContext()

	const themeOptions = useMemo(
		() => ({
			palette: palette(themeMode),
			typography,
			shape: { borderRadius: 8 },
			direction: themeDirection,
			shadows: shadows(themeMode),
			customShadows: customShadows(themeMode),
		}),
		[themeDirection, themeMode]
	)

	const theme = createTheme(themeOptions)

	theme.components = componentsOverride(theme)

	return (
		<MUIThemeProvider theme={theme}>
			<CssBaseline />
			<GlobalStyles />
			{children}
		</MUIThemeProvider>
	)
}

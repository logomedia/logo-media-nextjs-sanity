import PropTypes from "prop-types"
import merge from "lodash.merge"
import { useMemo } from "react"
// @mui
import { alpha, ThemeProvider, createTheme, useTheme } from "@mui/material/styles"
//
import { useSettingsContext } from "./SettingsContext"

// ----------------------------------------------------------------------

ThemeColorPresets.propTypes = {
	children: PropTypes.node,
}

export default function ThemeColorPresets({ children }) {
	const outerTheme = useTheme()

	const theme = createTheme(merge(outerTheme))

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

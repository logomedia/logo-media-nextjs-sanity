"use client"
import PropTypes from "prop-types"

import ThemeColorPresets from "./ThemeColorPresets"

// ----------------------------------------------------------------------

ThemeSettings.propTypes = {
	children: PropTypes.node,
}

export default function ThemeSettings({ children }) {
	return <ThemeColorPresets>{children}</ThemeColorPresets>
}

"use client"
import PropTypes from "prop-types"
import { useMemo, useState, useEffect, useContext, useCallback, createContext } from "react"
//
import { defaultSettings } from "./config-setting"
import { defaultPreset, getPresets, presetsOption } from "./presets"

// ----------------------------------------------------------------------

const initialState = {
	...defaultSettings,
	// Mode
	onToggleMode: () => {},
	// Direction
	onToggleDirection: () => {},
	// Color
	onChangeColorPresets: () => {},
	presetsColor: defaultPreset,
	presetsOption: [],
	// Reset
	onResetSetting: () => {},
	// Open
	open: false,
	onToggle: () => {},
	onOpen: () => {},
	onClose: () => {},
	// Not default
	notDefault: false,
}

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState)

export const useSettingsContext = () => {
	const context = useContext(SettingsContext)

	if (!context) throw new Error("useSettingsContext must be use inside SettingsProvider")

	return context
}

// ----------------------------------------------------------------------

export function SettingsProvider({ children }) {
	const [open, setOpen] = useState(false)

	const [themeMode, setThemeMode] = useState(defaultSettings.themeMode)
	const [themeDirection, setThemeDirection] = useState(defaultSettings.themeDirection)
	const [themeColorPresets, setThemeColorPresets] = useState(defaultSettings.themeColorPresets)

	useEffect(() => {
		const mode = getCookie("themeMode") || defaultSettings.themeMode
		const direction = getCookie("themeDirection") || defaultSettings.themeDirection
		const colorPresets = getCookie("themeColorPresets") || defaultSettings.themeColorPresets

		setThemeMode(mode)
		setThemeDirection(direction)
		setThemeColorPresets(colorPresets)
	}, [])

	// Mode
	const onToggleMode = useCallback(() => {
		const value = themeMode === "light" ? "dark" : "light"
		setThemeMode(value)
		setCookie("themeMode", value)
	}, [themeMode])

	// Direction
	const onToggleDirection = useCallback(() => {
		const value = themeDirection === "rtl" ? "ltr" : "rtl"
		setThemeDirection(value)
		setCookie("themeDirection", value)
	}, [themeDirection])

	// Color
	const onChangeColorPresets = useCallback((event) => {
		const { value } = event.target
		setThemeColorPresets(value)
		setCookie("themeColorPresets", value)
	}, [])

	// Reset
	const onResetSetting = useCallback(() => {
		setThemeMode(defaultSettings.themeMode)
		setThemeDirection(defaultSettings.themeDirection)
		setThemeColorPresets(defaultSettings.themeColorPresets)
		removeCookie("themeMode")
		removeCookie("themeDirection")
		removeCookie("themeColorPresets")
	}, [])

	const onToggle = useCallback(() => {
		setOpen(!open)
	}, [open])

	const onOpen = useCallback(() => {
		setOpen(true)
	}, [])

	const onClose = useCallback(() => {
		setOpen(false)
	}, [])

	const notDefault = themeMode !== defaultSettings.themeMode || themeDirection !== defaultSettings.themeDirection || themeColorPresets !== defaultSettings.themeColorPresets

	const memoizedValue = useMemo(
		() => ({
			// Mode
			themeMode,
			onToggleMode,
			// Direction
			themeDirection,
			onToggleDirection,
			// Color
			themeColorPresets,
			onChangeColorPresets,
			presetsOption,
			presetsColor: getPresets(themeColorPresets),
			// Reset
			onResetSetting,
			// Open
			open,
			onToggle,
			onOpen,
			onClose,
			// Not default
			notDefault,
		}),
		[
			// Mode
			themeMode,
			onToggleMode,
			// Color
			themeColorPresets,
			onChangeColorPresets,
			// Direction
			themeDirection,
			onToggleDirection,
			// Reset
			onResetSetting,
			// Open
			open,
			onToggle,
			onOpen,
			onClose,
			// Not default
			notDefault,
		]
	)

	return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>
}

SettingsProvider.propTypes = {
	children: PropTypes.node,
}

// ----------------------------------------------------------------------

function getCookie(name) {
	if (typeof document === "undefined") {
		throw new Error("getCookie() is not supported on the server. Fallback to a different value when rendering on the server.")
	}

	const value = `; ${document.cookie}`

	const parts = value.split(`; ${name}=`)

	if (parts.length === 2) {
		return parts[1].split(";").shift()
	}

	return undefined
}

function setCookie(name, value, exdays = 3) {
	const date = new Date()
	date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000)
	const expires = `expires=${date.toUTCString()}`
	document.cookie = `${name}=${value};${expires};path=/`
}

function removeCookie(name) {
	document.cookie = `${name}=;path=/;max-age=0`
}

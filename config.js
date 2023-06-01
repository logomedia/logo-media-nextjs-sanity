// API
// ----------------------------------------------------------------------

export const HOST_API = {
	dev: process.env.DEV_API,
	production: process.env.PRODUCTION_API,
}

export const GOOGLE_API = process.env.GOOGLE_API

// DEFAULT LOCALE
// ----------------------------------------------------------------------
// Also change in next.config.mjs

export const defaultLocale = "en"

// SETTINGS
// ----------------------------------------------------------------------

export const defaultSettings = {
	// light | dark
	themeMode: "light",
	// ltr | rtl
	themeDirection: "ltr",
	//  default | blueOrange | greenOrange | purpleTeal | cyanYellow | pinkCyan
	themeColorPresets: "default",
}

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER_MOBILE_HEIGHT = 64
export const HEADER_DESKTOP_HEIGHT = 96
export const DRAWER_WIDTH = 280

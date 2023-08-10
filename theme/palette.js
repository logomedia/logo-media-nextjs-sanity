import { alpha } from "@mui/material/styles"

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
	0: "#FFFFFF",
	100: "#F9FAFB",
	200: "#F4F6F8",
	300: "#DFE3E8",
	400: "#C4CDD5",
	500: "#919EAB",
	600: "#637381",
	700: "#454F5B",
	800: "#212B36",
	900: "#161C24",
}
const BOX_SHADOW = {
	light: "#777777",
	dark: "#0f1216",
}

const PRIMARY = {
	lighter: "#673389",
	light: "#5D2D7C",
	main: "#54266D",
	dark: "#44215B",
	darker: "#3B1D4F",
	contrastText: "#FFFFFF",
}

const SECONDARY = {
	lighter: "#CDF2FC",
	light: "#C9EDF7",
	main: "#BCE6F4",
	dark: "#B3D8E2",
	darker: "#ABCDD6",
	contrastText: "#000000",
}

const ORANGE = {
	lighter: "#FFA748",
	light: "#F99932",
	main: "#F7941D",
	dark: "#EF8818",
	darker: "#E88213",
	contrastText: "#FFFFFF",
}
const PINK = {
	lighter: "#B262B0",
	light: "#AA5CA8",
	main: "",
	dark: "#A05A9E",
	darker: "#995897",
	contrastText: "#FFFFFF",
}
const YELLOW = {
	lighter: "#FFF68A",
	light: "#FFF255",
	main: "#FFF200",
	dark: "#F4E200",
	darker: "#EFDD03",
	contrastText: "#000000",
}

const INFO = {
	lighter: "#CAFDF5",
	light: "#61F3F3",
	main: "#00B8D9",
	dark: "#006C9C",
	darker: "#003768",
	contrastText: "#FFFFFF",
}

const SUCCESS = {
	lighter: "#D8FBDE",
	light: "#86E8AB",
	main: "#36B37E",
	dark: "#1B806A",
	darker: "#0A5554",
	contrastText: "#FFFFFF",
}

const WARNING = {
	lighter: "#FFF5CC",
	light: "#FFD666",
	main: "#FFAB00",
	dark: "#B76E00",
	darker: "#7A4100",
	contrastText: GREY[800],
}

const ERROR = {
	lighter: "#FFE9D5",
	light: "#FFAC82",
	main: "#FF5630",
	dark: "#B71D18",
	darker: "#7A0916",
	contrastText: "#FFFFFF",
}

const COMMON = {
	common: { black: "#000000", white: "#FFFFFF" },
	white: "#ffffff",
	black: "#000000",
	primary: PRIMARY,
	secondary: SECONDARY,
	info: INFO,
	success: SUCCESS,
	warning: WARNING,
	error: ERROR,
	grey: GREY,
	orange: ORANGE,
	pink: PINK,
	yellow: YELLOW,
	boxShadow: BOX_SHADOW.light,
	divider: alpha(GREY[500], 0.24),
	action: {
		hover: alpha(GREY[500], 0.08),
		selected: alpha(GREY[500], 0.16),
		disabled: alpha(GREY[500], 0.8),
		disabledBackground: alpha(GREY[500], 0.24),
		focus: alpha(GREY[500], 0.24),
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
}
const COMMONDARK = {
	common: { black: "#FFFFFF", white: "#000000" },
	white: "#ffffff",
	black: "#000000",
	primary: SECONDARY,
	secondary: YELLOW,
	info: INFO,
	success: SUCCESS,
	warning: WARNING,
	error: ERROR,
	grey: GREY,
	orange: ORANGE,
	pink: PINK,
	yellow: YELLOW,
	boxShadow: BOX_SHADOW.dark,
	divider: alpha(GREY[500], 0.24),
	action: {
		hover: alpha(GREY[500], 0.08),
		selected: alpha(GREY[500], 0.16),
		disabled: alpha(GREY[500], 0.8),
		disabledBackground: alpha(GREY[500], 0.24),
		focus: alpha(GREY[500], 0.24),
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
}

export default function palette(themeMode) {
	const light = {
		...COMMON,
		mode: "light",
		text: {
			primary: GREY[800],
			secondary: GREY[600],
			disabled: GREY[500],
		},
		background: { paper: "#FFFFFF", default: "#FFFFFF", neutral: GREY[100] },
		action: {
			...COMMON.action,
			active: GREY[600],
		},
	}

	const dark = {
		...COMMONDARK,
		mode: "dark",
		text: {
			primary: "#FFFFFF",
			secondary: GREY[500],
			disabled: GREY[600],
		},
		background: {
			paper: GREY[800],
			default: GREY[900],
			neutral: alpha(GREY[500], 0.12),
		},
		action: {
			...COMMON.action,
			active: GREY[500],
		},
	}

	return themeMode === "light" ? light : dark
}

import { alpha } from "@mui/material/styles";

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
};
const BOX_SHADOW = {
  light: "#777777",
  dark: "#0f1216",
};

const PRIMARY = {
  lighter: "#2a3286",
  light: "#2a3286",
  main: "#2a3286",
  dark: "#2a3286",
  darker: "#2a3286",
  contrastText: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#cbe8f9",
  light: "#cbe8f9",
  main: "#cbe8f9",
  dark: "#cbe8f9",
  darker: "#cbe8f9",
  contrastText: "#2a3286",
};

const ORANGE = {
  lighter: "#cbe8f9",
  light: "#cbe8f9",
  main: "#cbe8f9",
  dark: "#cbe8f9",
  darker: "#cbe8f9",
  contrastText: "#2a3286",
};
const PINK = {
  lighter: "#4f2670",
  light: "#4f2670",
  main: "#4f2670",
  dark: "#4f2670",
  darker: "#4f2670",
  contrastText: "#FFFFFF",
};
const YELLOW = {
  lighter: "#d7d7d7",
  light: "#d7d7d7",
  main: "#d7d7d7",
  dark: "#d7d7d7",
  darker: "#d7d7d7",
  contrastText: "#4f2670",
};

const INFO = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#FFFFFF",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
};

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
};
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
};

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
  };

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
  };

  return themeMode === "light" ? light : dark;
}

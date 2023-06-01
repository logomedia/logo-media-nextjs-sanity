import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

export default function ToggleButton(theme) {
  const rootStyle = (ownerState) => {
    const defaultStyle = {
      '&.Mui-selected': {
        borderColor: 'currentColor',
        boxShadow: `0 0 0 1px currentColor`,
      },
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        '&:hover': {
          borderColor: alpha(theme.palette[color].main, 0.48),
          backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
        },
      }),
    }));

    const disabledState = {
      '&.Mui-disabled': {
        '&.Mui-selected': {
          color: theme.palette.action.disabled,
          backgroundColor: theme.palette.action.selected,
          borderColor: theme.palette.action.disabledBackground,
          boxShadow: `0 0 0 1px ${theme.palette.action.disabledBackground}`,
        },
      },
    };

    return [defaultStyle, ...colorStyle, disabledState];
  };

  return {
    MuiToggleButton: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyle(ownerState),
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          border: `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
        },
        grouped: {
          margin: 4,
          boxShadow: 'none !important',
          borderColor: 'transparent !important',
          borderRadius: `${theme.shape.borderRadius}px !important`,
        },
      },
    },
  };
}

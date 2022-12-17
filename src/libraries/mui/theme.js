import { createTheme } from "@mui/material"
import { color, palette } from "@mui/system"

export const lightThemeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#78130A',
      light: '#C4281A',
    },
    secondary: {
      main: '#60E82A',
      dark: '#6323C2',
    },
    background: {
      default: '#E8E4EE',
    },
    divider: '#241240',
    text: {
      secondary: '#241240',
    },
  },
  typography: {
    fontFamily: 'Pathway Gothic One',
    fontSize: 24,
    h4: {
      fontFamily: 'Spectral',
    },
    h6: {
      fontFamily: 'Spectral',
    },
    body1: {
      fontFamily: 'Spectral',
    },
    body2: {
      fontFamily: 'Spectral',
      fontSize: '1.5rem',
    },
    button: {
      fontFamily: 'Spectral',
    },
    h1: {
      fontFamily: 'Spectral',
    },
  },
});

export const darkThemeOptions = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#78130A',
      light: '#C4281A',
    },
    secondary: {
      main: '#60E82A',
      dark: '#6323C2',
      light: '#E8E4EE',
    },
    background: {
      paper: '#241240',
      default: '#211F24',
    },
    text: {
      primary: '#E8E4EE',
    },
    divider: '#60E82A',
  },
  typography: {
    fontFamily: 'Pathway Gothic One',
    fontSize: 24,
    h4: {
      fontFamily: 'Spectral',
    },
    h6: {
      fontFamily: 'Spectral',
    },
    body1: {
      fontFamily: 'Spectral',
    },
    body2: {
      fontFamily: 'Spectral',
    },
    button: {
      fontFamily: 'Spectral',
    },
    h1: {
      fontFamily: 'Spectral',
    },
  },
});
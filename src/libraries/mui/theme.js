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
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    subtitle1:{
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    },
    body1: {
      fontFamily: 'Spectral',
    },
    body2: {
      fontFamily: 'Pathway Gothic One',
      fontSize: '1.5rem',
      
    },
    button: {
      fontFamily: 'Spectral',
    },
    h1: {
      fontFamily: 'Spectral',
      fontSize: '16rem',
      '@media (max-width:600px)': {
        fontSize: '4rem',
      },
    },
  },
});

export const darkThemeOptions = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FAACA8',
          backgroundImage: `radial-gradient(circle, rgba(4,3,22,1) 0%, rgba(2,13,36,1) 95%, rgba(11,9,138,1) 100%)`,
          textShadow: "2px 3px 5px rgba(0,0,0,0.5)"
        },
      },
    },
  },
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
    textShadow: "2px 3px 5px rgba(0,0,0,0.5)",
    h4: {
      fontFamily: 'Spectral',
    },
    h6: {
      fontFamily: 'Spectral',
      textShadow: "0px 0px 3px rgba(255,255,255,0.7)",
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    subtitle1:{
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    },
    body1: {
      fontFamily: 'Spectral',
    },
    body2: {
      fontFamily: 'Pathway Gothic One',
      textShadow: "1px 3px 5px rgba(0,0,0,0.5)",
    },
    button: {
      fontFamily: 'Spectral',
    },
    h1: {
      fontFamily: 'Spectral',
      fontSize: '16rem',
      textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
      '@media (max-width:600px)': {
        fontSize: '4rem',
      },
    },
  },
});
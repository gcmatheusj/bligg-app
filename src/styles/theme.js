import { createMuiTheme } from '@material-ui/core';

export const muiTheme = createMuiTheme({
  palette: {
    text: {
      primary: '#5F6971',
      secondary: '#757575'
    },
    primary: {
      light: '#BBDEFB',
      main: '#2196F3',
      dark: '#1976D2',
    },
  },
  // typography: {
  //   "fontFamily": "Oswald",
  //   "lineHeight": 1.2,
  //   "letterSpacing": 0.32,
  //   useNextVariants: true,
  //   suppressDeprecationWarnings: true,
  // // h1: {
  // //     "fontFamily": "Open Sans",
  // //     "fontWeight":400,
  // //   },
  // },
});

export const theme = {
  palette: {
    primary: '#333',
    secondary: '#fefefe',
  },
  font: {
    palette: {
      primary: '#fff',
      secondary: '#000',
    },
  },
};

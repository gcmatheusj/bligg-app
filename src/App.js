import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';

import { muiTheme } from './styles/theme';

import Home from './pages/home'

export default function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Home />
    </MuiThemeProvider>
  );
}

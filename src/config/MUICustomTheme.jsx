import React from 'react';

// Material UI Theme
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: "#27c24c",
    //   light: "#69f67b",
    //   dark: "#00901b",
    //   contrastText: "#000000a6"
    // },
    // secondary: {
    //   main: "#ffffff",
    //   light: "#ffffff",
    //   dark: "#cccccc",
    //   contrastText: "#000000a6"
    // },

    // Ant Design Pro Colors
    primary: {
      main: '#1890ff',
      light: '#096dd9',
      dark: '#40a9ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000000a6',
    },
    background: { default: '#f0f2f5' },
    // ----------------------------
  },
  typography: {
    useNextVariants: true,
  },
  drawerWidth: 256,
});

const MUICustomTheme = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default MUICustomTheme;

import React from 'react';

// Material UI Theme
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    // Socatol Colors
    // primary: {
    // main: "#27c24c",
    // light: "#69f67b",
    // dark: "#00901b",
    // contrastText: 'rgba(0,0,0,0.65)'
    // },
    // secondary: {
    //   main: "#ffffff",
    //   light: "#ffffff",
    //   dark: "#cccccc",
    //   contrastText: 'rgba(0,0,0,0.65)'
    // },

    // Ant Design Pro Colors
    primary: {
      main: '#1890ff',
      light: '#096dd9',
      dark: '#40a9ff',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#cccccc',
      contrastText: 'rgba(0,0,0,0.65)'
    }
    // background: { default: '#fff' }

    // ----------------------------
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto, "Google Sans"'
  },
  drawerWidth: 260
});

const MUICustomTheme = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default MUICustomTheme;

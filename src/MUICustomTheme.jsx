import React from "react";

// Material UI Theme
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#69f67b",
      main: "#27c24c",
      dark: "#00901b",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff"
    },
    background: { default: "#f8f8f8" }
  },
  typography: {
    useNextVariants: true
  },
  drawerWidth: 240
});

const MUICustomTheme = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default MUICustomTheme;

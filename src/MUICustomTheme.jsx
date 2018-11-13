import React from "react";

// Material UI Theme
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#27c24c",
      light: "#69f67b",
      dark: "#27c24c",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ffffff",
      light: "rgb(255, 255, 255)",
      dark: "rgb(178, 178, 178)",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    background: { default: "#eceff1" }
  },
  typography: {
    useNextVariants: true
  },
  drawerWidth: 260
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

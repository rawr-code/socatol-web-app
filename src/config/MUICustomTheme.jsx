import React from "react";

// Material UI Theme
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000a6"
    },
    secondary: {
      main: "#ffffff",
      light: "rgb(255, 255, 255)",
      dark: "rgb(178, 178, 178)",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    background: { default: "#f0f2f5" }
  },
  typography: {
    useNextVariants: true
  },
  drawerWidth: 256
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

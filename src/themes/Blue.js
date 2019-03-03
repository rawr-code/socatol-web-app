// Material UI Theme
import { createMuiTheme } from "@material-ui/core/styles";

// Ant Design Pro Colors
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b90f7",
      light: "#096dd9",
      dark: "#40a9ff",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#cccccc",
      contrastText: "rgba(0,0,0,0.65)"
    }
  },
  // shape: {
  //   borderRadius: 4
  // },
  typography: {
    useNextVariants: true,
    fontFamily: "Roboto, Google Sans"
  },
  drawerWidth: 260
});

export default theme;

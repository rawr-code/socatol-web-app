// Material UI Theme
import { createMuiTheme } from '@material-ui/core/styles';

// Socatol Colors
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#27c24c',
      light: '#69f67b',
      dark: '#00901b',
      contrastText: '#ffffff'
    }
  },
  secondary: {
    main: '#ffffff',
    light: '#ffffff',
    dark: '#cccccc',
    contrastText: 'rgba(0,0,0,0.65)'
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto, Google Sans'
  },
  drawerWidth: 260
});

export default theme;

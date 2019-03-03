// Material UI Theme
import { createMuiTheme } from '@material-ui/core/styles';

// Ant Design Pro Colors
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#ccc',
      contrastText: 'rgba(0,0,0,0.65)'
    }
  },
  // shape: {
  //   borderRadius: 4
  // },
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto, Google Sans'
  },
  drawerWidth: 260
});

export default theme;

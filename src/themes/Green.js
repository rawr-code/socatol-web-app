// Material UI Theme
import { createMuiTheme } from '@material-ui/core/styles';

// Socatol Colors
let theme = createMuiTheme({
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

const overrides = {
  MuiButton: {
    label: {
      textTransform: 'initial'
    },
    contained: {
      '&:active': {
        boxShadow: 'none'
      }
    }
  },
  MuiIconButton: {
    root: {
      padding: theme.spacing.unit,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  },
  MuiTabs: {
    root: {
      marginLeft: theme.spacing.unit
    },
    indicator: {
      height: 3,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: theme.palette.common.white
    }
  },
  MuiTab: {
    root: {
      textTransform: 'initial',
      fontSize: '14px !important',
      letterSpacing: '.25px',
      margin: '0 16px',
      minWidth: 0,
      [theme.breakpoints.up('md')]: {
        minWidth: 0
      }
    },
    labelContainer: {
      padding: 0,
      [theme.breakpoints.up('md')]: {
        padding: 0
      }
    }
  },
  MuiTooltip: {
    tooltip: {
      borderRadius: 4
    }
  }
};

const props = {
  MuiTab: {
    disableRipple: true
  }
};

const mixins = {
  ...theme.mixins,
  toolbar: {
    minHeight: 48
  }
};
theme = { ...theme, overrides, props, mixins };

export default theme;

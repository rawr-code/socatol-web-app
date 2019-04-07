// Material UI Theme
import { createMuiTheme } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto, Google Sans',
    h5: {
      fontFamily: 'Google Sans',
      fontWeight: 500,
      fontSize: '1.625rem',
      letterSpacing: 0
    },
    body1: {
      fontSize: '0.875rem',
      textTransform: 'initial'
    }
  },
  shape: {
    borderRadius: 8
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

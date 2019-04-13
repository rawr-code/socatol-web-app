// Material UI Theme
import { createMuiTheme } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      // Firebase main color
      main: '#039be5',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#fff'
    },
    // Firebase background color
    background: {
      default: '#eceff1'
    }
  },
  typography: {
    useNextVariants: true,
    h5: {
      fontFamily: 'Google Sans',
      fontWeight: 500,
      fontSize: 26
    }
  },
  shape: {
    borderRadius: 8
  },

  // other
  drawerWidth: 256
});

const overrides = {
  MuiButton: {
    label: {
      textTransform: 'initial'
    },
    contained: {
      boxShadow: 'none',
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
      margin: '0 16px',
      minWidth: 0,
      letterSpacing: '.25px',
      [theme.breakpoints.up('md')]: {
        fontSize: 14,
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
  },
  MuiListItemText: {
    primary: {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  MuiListItemIcon: {
    root: {
      color: 'inherit',
      marginRight: 0,
      '& svg': {
        fontSize: 20
      }
    }
  },
  MuiAvatar: {
    root: {
      width: 32,
      height: 32
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

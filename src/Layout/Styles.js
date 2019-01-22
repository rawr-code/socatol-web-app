const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.drawerWidth,
    overflowX: 'hidden',
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  listItemIcon: {
    margin: '0 8px',
  },
  logo: {
    width: theme.drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

export default styles;

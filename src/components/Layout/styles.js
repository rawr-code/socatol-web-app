const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: theme.drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: theme.drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: 24
  }
});
export default styles;

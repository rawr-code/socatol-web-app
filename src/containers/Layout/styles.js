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
    // padding: '3px 0',
    // backgroundColor: '#2a3e52',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`
    }
  },
  list: {
    padding: 15
  },
  listItem: {
    margin: '8px 0'
  },
  listItemActive: {
    margin: '8px 0',
    borderRadius: 8,
    backgroundColor: `${theme.palette.primary.main} !important`,
    boxShadow: `0 3px 0 0 ${theme.palette.primary.main}, 0 2px 8px 0 ${
      theme.palette.primary.main
    }, 0 4px 10px 0 rgba(33,7,77,.5)`
  },
  listItemPrimary: {
    margin: '0 8px'
  },
  listItemIcon: {
    color: '#fff',
    margin: '0 8px'
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  navLink: {
    textDecoration: 'none'
  },
  navLinkText: {
    height: 20
  },
  navbarTitle: {
    fontFamily: 'Google Sans',
    fontWeight: 400
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: theme.drawerWidth
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    marginTop: 208,
    width: '100%'
    // margin: '0 auto'
  }
});
export default styles;

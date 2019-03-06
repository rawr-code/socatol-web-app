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
  drawerPaper: {
    width: theme.drawerWidth
  },
  list: {
    padding: 15,
    marginTop: 250
  },
  navLink: {
    textDecoration: 'none'
  },
  selected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `0 3px 0 0 ${theme.palette.primary.main}, 0 2px 8px 0 ${
      theme.palette.primary.main
    }, 0 4px 10px 0 rgba(33,7,77,.5)`
  },
  icon: {
    color: 'white'
  },
  text: {
    fontSize: 16,
    fontFamily: 'Google Sans'
  },
  textWhite: {
    color: 'white'
  },
  listItemText: {
    color: '#4b4b4b'
  },
  toolbar: theme.mixins.toolbar
});
export default styles;

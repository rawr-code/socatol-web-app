const Styles = theme => ({
  root: {
    display: "flex"
  },
  article: {
    width: "100%"
  },
  textWhite: {
    color: "white",
    fontFamily: "Google Sans"
  },
  appBar: {
    boxShadow: "none",
    marginLeft: theme.drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${theme.drawerWidth}px)`
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end"
    }
  },
  mixin: theme.mixins.toolbar,
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: theme.drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: theme.drawerWidth
  },
  link: {
    textDecoration: "none"
  },
  listItem: {
    padding: 15,
    marginTop: 250
  },
  listItemText: {
    color: "#4b4b4b",
    fontFamily: "Google Sans"
  },
  itemRoot: {
    background: "none !important"
  },
  itemIcon: {
    color: "white"
  },
  itemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    borderRadius: 8,
    boxShadow:
      "0 3px 0 0 #27c24c, 0 2px 8px 0 #27c24c, 0 4px 10px 0 rgba(33,7,77,.5)"
  }
});

export default Styles;

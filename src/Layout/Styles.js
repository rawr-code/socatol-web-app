const styles = theme => ({
  root: {
    display: "flex"
  },
  article: {
    width: "100%"
  },
  appBarRoot: {
    boxShadow: "none"
  },
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    padding: "20px 24px",
    borderRadius: 0
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerPaper: {
    boxShadow: "2px 0 8px 0 rgba(29,35,41,.05)"
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  link: {
    textDecoration: "none"
  },
  linkIcon: {
    margin: "0 8px"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  toolbarRoot: {
    boxShadow: "0 1px 4px rgba(0,21,41,.08)"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

export default styles;

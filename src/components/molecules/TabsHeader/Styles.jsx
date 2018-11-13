const Styles = theme => ({
  root: {
    boxShadow: "none",
    marginBottom: theme.spacing.unit * 6
  },
  arrow: {
    paddingLeft: "8px !important"
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
    paddingLeft: 24
  },
  title: {
    color: "#fff",
    fontFamily: "Google Sans",
    fontSize: 26,
    fontWeight: 500,
    lineHeight: "32px"
  },
  icon: {
    color: "rgba(255,255,255,0.7)"
  },
  tabsRoot: {
    padding: "0 16px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 24px"
    }
  },
  tabsIndicator: {
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  tabButtonRoot: {
    minWidth: 0,
    marginRight: 32
  },
  labelContainer: {
    padding: 0
  }
});

export default Styles;

const Styles = theme => ({
  root: {
    maxWidth: 936,
    margin: "0 auto",
    borderRadius: 8,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0 16px"
    }
  },
  paper: {
    borderRadius: 8
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingRight: 8,
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.hint
  },
  icon: {
    color: theme.palette.text.secondary
  },
  iconButton: {
    margin: `${theme.spacing.unit}px 0`
  },
  tableContainer: {
    overflowX: "auto"
  },
  tableHead: {
    backgroundColor: "#f5f5f5"
  },
  tableRowHover: {
    cursor: "pointer"
  },
  pagination: {
    [theme.breakpoints.down(350)]: {
      paddingLeft: 10
    }
  },
  paginationCaption: {
    [theme.breakpoints.down(400)]: {
      flexShrink: 0.2
    },
    [theme.breakpoints.down(350)]: {
      flexShrink: 0.1
    }
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 100,
    [theme.breakpoints.down("xs")]: {
      padding: 30
    }
  },
  info: {
    textAlign: "center"
  },
  title: {
    fontWeight: 400
  },
  titleContainer: {
    margin: "20px 0"
  }
});

export default Styles;

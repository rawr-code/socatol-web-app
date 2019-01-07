const Styles = theme => ({
  root: {
    maxWidth: 736,
    borderRadius: 8,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0 16px"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 8,
    padding: "15px 0"
  },
  imgContainer: {
    textAlign: "center"
  },
  formContainer: {
    textAlign: "center",
    marginBottom: 15
  },
  formTitle: {
    fontFamily: "Google Sans"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  textFieldContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    },
    marginBottom: 15
  }
});

export default Styles;

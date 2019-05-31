const styles = theme => ({
  root: {
    margin: 0,
    marginTop: 8,
    marginBottom: 16,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  dense: {
    marginTop: 19
  },
  outLinedDense: {
    marginTop: 16
  },
  adornment: {
    width: 50
  },
  mr: {
    marginRight: 8
  },
  ml: {
    marginLeft: 8
  },
  tRight: {
    textAlign: 'right'
  }
});

export default styles;

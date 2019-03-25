const styles = theme => ({
  root: {
    marginRight: theme.spacing.unit,
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
  }
});

export default styles;

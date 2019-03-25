const styles = theme => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      borderRadius: 0
      // boxShadow: 'none'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 24
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 48
    }
  }
});

export default styles;
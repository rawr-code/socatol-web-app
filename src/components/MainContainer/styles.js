const styles = theme => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.drawerWidth
    }
  },
  secondary: {
    margin: '0 auto',
    maxWidth: 1000,
    marginTop: 48
  }
});

export default styles;

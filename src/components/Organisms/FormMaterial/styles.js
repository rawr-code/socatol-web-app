const styles = theme => ({
  root: {
    maxWidth: 400,
    margin: '0 auto',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8
  },
  sm: {
    maxWidth: 600
  },
  md: {
    maxWidth: 960
  },
  content: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }
});

export default styles;

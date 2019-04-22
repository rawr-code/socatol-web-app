const styles = theme => ({
  root: {
    maxWidth: 400,
    margin: '0 auto',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8
  },
  md: {
    maxWidth: 700
  },
  content: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }
});

export default styles;

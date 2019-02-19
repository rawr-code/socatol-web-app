const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 24
  },
  title: {
    color: theme.palette.primary.main
  },
  subtitle: {
    color: theme.palette.text.secondary
  },
  button: {
    maxHeight: 40
  }
});

export default styles;

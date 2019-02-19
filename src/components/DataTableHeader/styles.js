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
  },
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    height: 64,
    width: 64
  },
  textContainer: {
    marginLeft: 24,
    display: 'flex',
    flexDirection: 'column'
  }
});

export default styles;

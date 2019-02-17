const styles = theme => ({
  root: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 64,
    width: '100%',
    height: 120,
    display: 'flex',
    alignItems: 'center',
    padding: 24
  },
  image: {
    height: 64,
    width: 64
  },
  textContainer: {
    marginLeft: 24,
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column'
    // alignItems: 'center'
  },
  title: {
    color: theme.palette.text.primary
  },
  subtitle: {
    color: theme.palette.text.secondary
  }
});

export default styles;

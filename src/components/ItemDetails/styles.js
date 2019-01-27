const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    borderLeft: '1px solid rgba(0,0,0,0.12)',
    backgroundColor: theme.palette.background.paper,
    position: 'relative'
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 24
  },
  header: {
    padding: 24
  },
  tabs: {
    borderBottom: '1px solid rgba(0,0,0,0.12)'
  }
});

export default styles;

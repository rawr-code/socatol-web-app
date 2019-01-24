const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  fab: {
    margin: theme.spacing.unit,
    position: 'absolute',
    top: 30,
    right: 40,
    zIndex: theme.zIndex.appBar + 1,
    backgroundColor: 'white',
    color: theme.palette.primary.main
  },
  list: {
    borderTop: '1px solid rgba(0,0,0,0.12)'
  },
  textField: {
    marginLeft: 20,
    paddingRight: 20,
    width: 'calc(100% - 20px)'
  },
  search: {
    padding: 8
  }
});

export default styles;

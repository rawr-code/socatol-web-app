const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 300
  },
  addBotton: {
    margin: 0,
    padding: 20,
    borderRadius: 0,
    width: '100%',
    boxShadow: 'none',
    borderBottomLeftRadius: 8
  },
  avatar: {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent'
  },
  list: {
    height: 550,
    maxHeight: 550,
    borderTop: '1px solid rgba(0,0,0,0.12)',
    overflowY: 'auto'
  },
  listItem: {
    cursor: 'pointer'
  },
  listItemText: {
    wordWrap: 'break-word'
  },
  li: {
    height: 8
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBox: {
    padding: 8,
    display: 'flex',
    flexDirection: 'column'
  },
  searchBoxTextField: {
    marginLeft: 20,
    paddingRight: 20,
    marginBottom: 8,
    width: 'calc(100% - 20px)'
  },
  detailsRoot: {
    width: '100%',
    position: 'relative'
  },
  detailsEmpty: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: 24
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

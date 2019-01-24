const styles = theme => ({
  root: {},
  selectList: {
    height: 'calc(100vh - 64px)',
    position: 'relative',
    // maxWidth: 300,
    backgroundColor: '#fff',
    borderRight: '1px solid rgba(0,0,0,0.12)'
  },
  selectListHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16
  },
  selectListHeaderTitle: {
    padding: '20px 0',
    textTransform: 'uppercase'
  },
  footerBotton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    borderRadius: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  list: {
    padding: '24px 16px',
    height: 'calc(100% - 180px)',
    overflowY: 'auto'
  }
});

export default styles;

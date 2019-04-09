const styles = () => ({
  root: {
    maxWidth: 936,
    margin: '0 auto'
  },
  card: {
    margin: '20px 0'
  },
  cardHeader: {
    height: 56,
    padding: '12px 12px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  cardHeaderButtonLeft: {
    position: 'absolute',
    left: 24
  },
  cardHeaderButtonRight: {
    position: 'absolute',
    right: 24
  },
  cardHeaderTitle: {
    textTransform: 'uppercase',
    textAlign: 'center'
    // fontWeight: 400
  },
  cardPadding: {
    padding: 24
  },
  swipeable: {
    maxWidth: 1050,
    margin: '0 auto'
  }
});

export default styles;

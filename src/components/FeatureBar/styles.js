const colorWhite = 'rgba(255, 255, 255, 0.7)';

const styles = () => ({
  toolbar: {
    marginBottom: 8
  },
  button: {
    borderColor: colorWhite
  },
  rootCrumbs: {
    padding: '16px 24px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  backArrow: {
    color: colorWhite,
    padding: '8px 0',
    width: 40,
    margin: '0 8px 0 -8px',
    '&:hover': {
      color: '#fff'
    }
  },
  crumb: {
    textTransform: 'capitalize',
    cursor: 'pointer',
    fontWeight: 500,
    color: colorWhite,
    '&:hover': {
      color: '#fff'
    }
  },
  crumbArrow: {
    width: 24
  }
});
export default styles;

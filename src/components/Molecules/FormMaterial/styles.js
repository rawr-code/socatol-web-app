const styles = theme => ({
  root: {
    maxWidth: 360,
    margin: '0 auto',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8
  },
  sm: {
    maxWidth: 600
  },
  md: {
    maxWidth: 960
  },
  textWrapper: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: '24px 24px 16px',
    backgroundColor: theme.palette.primary.main
  },
  title: {
    color: theme.palette.common.white
  },
  subtitle: {
    color: theme.palette.light
  },
  card: {
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    padding: '24px 24px 0'
  }
});

export default styles;

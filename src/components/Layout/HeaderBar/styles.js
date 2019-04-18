const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginLeft: -theme.spacing.unit
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: 'none',
    fontWeight: 500,
    color: theme.palette.light,
    '&:hover': {
      color: theme.palette.common.white
    }
  }
});

export default styles;

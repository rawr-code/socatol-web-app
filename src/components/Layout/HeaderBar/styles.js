const lightColor = 'rgba(255, 255, 255, 0.7)';
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
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white
    }
  }
});

export default styles;

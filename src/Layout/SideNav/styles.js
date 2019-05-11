const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: theme.drawerWidth,
      flexShrink: 0
    }
  },
  drawer: {
    width: theme.drawerWidth
  },
  categoryHeader: {
    padding: '20px 24px 8px'
  },
  categoryHeaderPrimary: {
    color: theme.palette.text.secondary
  },
  item: {
    padding: '12px 24px',
    color: theme.palette.text.secondary
  },
  itemCategory: {
    // backgroundColor: '#232f3e',
    backgroundColor: 'rgba(250, 250, 250, 0.7)',
    boxShadow: `0 -1px 0 ${theme.palette.divider} inset`,
    paddingTop: 16,
    paddingBottom: 16
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)'
    }
  },
  itemActiveItem: {
    color: theme.palette.primary.main
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize
    }
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit
  },
  toolbar: theme.mixins.toolbar
});

export default styles;

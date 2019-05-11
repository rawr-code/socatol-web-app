import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  AppBar,
  Toolbar,
  Grid,
  Hidden,
  IconButton,
  Typography,
  // Tooltip,
  // Avatar,
  withStyles
} from '@material-ui/core';

// Icons
import {
  Menu
  // Notifications
} from '@material-ui/icons';

import styles from './styles';

const HeaderBar = props => {
  const { classes } = props;
  return (
    <AppBar color="primary" position="fixed" className={classes.root}>
      <Toolbar>
        <Grid container spacing={0} alignItems="center">
          <Hidden mdUp implementation="css">
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Menu"
                className={classes.menuButton}>
                <Menu />
              </IconButton>
            </Grid>
          </Hidden>
          <Typography variant="h6" color="inherit" component="span">
            SOCATOL
          </Typography>
          {/* <Grid item xs />
          <Grid item>
            <Typography className={classes.link} component="a" href="#">
              Ir a la documentación
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip title="No hay notificaciones">
              <IconButton color="inherit" className={classes.link}>
                <Notifications />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <IconButton color="inherit" className={classes.iconButtonAvatar}>
              <Avatar
                className={classes.avatar}
                src="/static/images/avatar/1.jpg"
              />
            </IconButton>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

// Apply styles
const _HeaderBar = withStyles(styles)(HeaderBar);

export default _HeaderBar;

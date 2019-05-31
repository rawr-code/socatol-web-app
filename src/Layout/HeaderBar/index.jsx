import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';

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
  withStyles,
  Button
} from '@material-ui/core';

// Icons
import {
  Menu
  // Notifications
} from '@material-ui/icons';

import styles from './styles';

const logout = (client, history) => {
  localStorage.removeItem('token', '');
  history.push('/');
  window.location.reload();

  // client.resetStore();
};

const HeaderBar = props => {
  const { classes, history } = props;

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
          <Grid item xs />
          <Grid item>
            <ApolloConsumer>
              {client => {
                return (
                  <Typography
                    className={classes.link}
                    component={Button}
                    onClick={() => logout(client, history)}>
                    Cerrar sesión
                  </Typography>
                );
              }}
            </ApolloConsumer>
          </Grid>
          {/* <Grid item>
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

export default withRouter(_HeaderBar);

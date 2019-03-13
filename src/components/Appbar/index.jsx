import React from 'react';

// Material UI
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Hidden,
  withStyles
} from '@material-ui/core';

// Icons
import { Menu } from '@material-ui/icons';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const ButtonAppBar = props => {
  const { classes, openSideNav } = props;
  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Hidden mdUp implementation="css">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={openSideNav}>
            <Menu />
          </IconButton>
        </Hidden>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
          <Button color="inherit">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(ButtonAppBar);

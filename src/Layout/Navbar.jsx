import React from 'react';

// MaterialUI Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';

import { Menu } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Navbar = props => {
  const { classes } = props;
  return (
    // <div className={classes.root}>
    <AppBar position="fixed" className={classes.appBar}>
      <div className={classes.logo}>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          News
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <Menu />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    // </div>
  );
};

export default withStyles(styles)(Navbar);

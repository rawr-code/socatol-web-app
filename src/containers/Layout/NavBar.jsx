import React from 'react';

// Material UI
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

// Icons
import { Menu } from 'react-feather';

const NavBar = props => {
  const { classes, navOpen } = props;
  return (
    <AppBar position="fixed" className={classes.appBar} color="primary">
      {/* Toolbar */}
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={() => navOpen()}
          className={classes.menuButton}>
          <Menu />
        </IconButton>
        <Typography
          variant="h5"
          component="h1"
          color="inherit"
          className={classes.navbarTitle}>
          SocatolWeb
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

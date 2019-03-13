import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={openSideNav}>
          <MenuIcon />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);

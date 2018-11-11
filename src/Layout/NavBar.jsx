import React from "react";

//Material UI
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const NavBar = ({ classes }) => {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Abrir navegación"
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

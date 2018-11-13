import React from "react";

//Material UI
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { Menu, Notifications, DateRange } from "@material-ui/icons";
import { Bell } from "react-feather";

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
        {/* <Button color="inherit">Login</Button> */}
        <div>
          <IconButton color="inherit" aria-label="Calendario">
            <DateRange />
          </IconButton>
          <IconButton color="inherit" aria-label="Notificaciones">
            <Notifications />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

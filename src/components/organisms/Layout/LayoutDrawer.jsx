import React from "react";

// React Router
import { NavLink } from "react-router-dom";

// MaterialUI Components
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import classNames from "classnames";

const LayoutDrawer = props => {
  const { classes, open, routes, itemSelected } = props;
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: classNames(
          { [classes.drawerOpen]: open, [classes.drawerClose]: !open },
          classes.drawerPaper
        )
      }}
      open={open}
    >
      <List>
        <ListItem button>
          <ListItemIcon className={classes.linkIcon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Socatol" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {routes.map(({ name, path, exact, icon }, index) => (
          <NavLink to={path} exact={exact} key={name} className={classes.link}>
            <ListItem selected={itemSelected === index}>
              <ListItemIcon className={classes.linkIcon}>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default LayoutDrawer;

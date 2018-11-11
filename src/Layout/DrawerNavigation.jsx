import React from "react";

// Material UI
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import { Inbox, Mail } from "@material-ui/icons";

// React Router
import { NavLink } from "react-router-dom";

// Styles
import classNames from "classnames";

const DrawerNavigation = ({
  classes,
  routes,
  handleNavigation,
  itemSelected
}) => {
  const drawer = (
    <List classes={{ root: classes.listItem }}>
      {routes.map(({ name, path, exact }, index) => (
        <NavLink to={path} exact={exact} key={name} className={classes.link}>
          <ListItem
            selected={itemSelected === index}
            onClick={event => handleNavigation(event, index)}
            classes={{
              root: classes.itemRoot,
              selected: classNames(classes.itemSelected)
            }}
          >
            <ListItemIcon classes={{ root: classes.itemIcon }}>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText
              primary={name}
              classes={{
                primary:
                  itemSelected === index
                    ? classes.textWhite
                    : classes.listItemText
              }}
            />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          // open={this.state.mobileOpen}
          // onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default DrawerNavigation;

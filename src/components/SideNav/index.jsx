import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Material UI
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';

// Icons
import { Package, Printer, FileText, Users } from 'react-feather';
import { AccountBalanceOutlined } from '@material-ui/icons';

import styles from './styles';

const navigation = [
  {
    label: 'Tesorería',
    to: '/',
    icon: <AccountBalanceOutlined />
  },

  {
    label: 'Facturación',
    to: '/',
    icon: <FileText />
  },

  {
    label: 'Inventario',
    to: '/productos',
    icon: <Package />
  },

  {
    label: 'Contactos',
    to: '/',
    icon: <Users />
  },

  {
    label: 'Reportes',
    to: '/',
    icon: <Printer />
  }
];

const SideNav = props => {
  const {
    classes,
    selectedItem,
    handleClick,
    mobileOpen,
    handleDrawerToggle
  } = props;
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List component="nav" className={classes.list}>
        {navigation.map((item, index) => (
          <NavLink to={item.to} className={classes.navLink} key={item.label}>
            <ListItem
              component="div"
              selected={selectedItem === index}
              // onClick={() => handleClick(index)}
              classes={{ selected: classes.selected }}>
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>

              <ListItemText
                primary={item.label}
                className={classes.text}
                classes={{
                  primary: classNames(
                    classes.text,
                    selectedItem === index
                      ? classes.textWhite
                      : classes.listItemText
                  )
                }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
  return (
    <nav className={classes.drawer}>
      {/* MobileNav */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}>
          {drawer}
        </Drawer>
      </Hidden>
      {/* DesktopNav */}
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default withStyles(styles)(SideNav);

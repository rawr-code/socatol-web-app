import React from 'react';
import { NavLink } from 'react-router-dom';

// Material UI
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';

// Icons
import { Package, DollarSign, Printer, Grid, FileText } from 'react-feather';

const navigation = [
  {
    label: 'Inicio',
    to: '/',
    icon: <Grid />
  },
  {
    label: 'Facturación',
    to: '/facturacion',
    icon: <FileText />
  },
  {
    label: 'Tesoreria',
    to: '/tesoreria',
    icon: <DollarSign />
  },
  {
    label: 'Productos',
    to: '/productos',
    icon: <Package />
  },
  {
    label: 'Reportes',
    // to: '/reportes'
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
      <List
        className={classes.list}
        component="nav"
        subheader={<ListSubheader component="span">Menu</ListSubheader>}>
        {navigation.map((item, index) => (
          <NavLink to={item.to} className={classes.navLink} key={item.label}>
            <ListItem
              className={classes.listItem}
              classes={{ selected: classes.listItemActive }}
              component="div"
              selected={selectedItem === index}
              onClick={() => handleClick(index)}>
              <ListItemIcon className={classes.listItemIcon}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                className={classes.navLinkText}
                classes={{
                  primary:
                    selectedItem === index
                      ? classes.listItemIcon
                      : classes.listItemPrimary
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
          // container={this.props.container}
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

export default SideNav;

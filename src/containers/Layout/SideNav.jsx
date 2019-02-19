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
import {
  Package,
  Home,
  Printer,
  FilePlus,
  FileMinus,
  Users,
  Activity
} from 'react-feather';

import { AccountBalanceOutlined } from '@material-ui/icons';
const navigation = [
  // {
  //   label: 'Inicio',
  //   to: '/',
  //   icon: <Grid />
  // },
  {
    title: 'Tesorería',
    childs: [
      {
        label: 'Estadisticas',
        to: '/',
        icon: <Activity />
      },
      {
        label: 'Cuentas Bancarias',
        to: '/tesoreria',
        icon: <AccountBalanceOutlined />
      }
    ]
  },
  {
    title: 'Facturación',
    childs: [
      {
        label: 'Compras',
        to: '/compras',
        icon: <FileMinus />
      },
      {
        label: 'Ventas',
        to: '/ventas',
        icon: <FilePlus />
      }
    ]
  },
  {
    title: 'Inventario',
    childs: [
      {
        label: 'Almacenes',
        to: '/almacenes',
        icon: <Home />
      },
      {
        label: 'Productos',
        to: '/productos',
        icon: <Package />
      }
    ]
  },
  {
    title: 'Contactos',
    childs: [
      {
        label: 'Clientes',
        to: '/clientes',
        icon: <Users />
      },
      {
        label: 'Proveedores',
        to: '/proveedores',
        icon: <Users />
      }
    ]
  },
  {
    title: 'Administración',
    childs: [
      {
        label: 'Reportes',
        to: '/',
        icon: <Printer />
      }
    ]
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
      {navigation.map((item, index) => (
        <List
          key={index}
          component="nav"
          subheader={
            <ListSubheader component="span">{item.title}</ListSubheader>
          }>
          {item.childs.map(child => (
            <NavLink
              to={child.to}
              className={classes.navLink}
              key={child.label}>
              <ListItem
                component="div"
                selected={selectedItem === child.label}
                onClick={() => handleClick(child.label)}>
                <ListItemIcon>{child.icon}</ListItemIcon>

                <ListItemText primary={child.label} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      ))}
      {/* <List
        className={classes.list}
        component="nav"
        subheader={<ListSubheader component="span">Facturación</ListSubheader>}>
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
      </List> */}
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

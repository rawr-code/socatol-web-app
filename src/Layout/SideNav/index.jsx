import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Material UI
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';

// Icons
import {
  TrendingUp,
  TrendingDown,
  Home,
  AccountBalance,
  Settings,
  Print
} from '@material-ui/icons';

// import { Box } from 'react-feather';

import styles from './styles';

const categories = [
  {
    id: 'Menu',
    children: [
      { id: 'Ingresos', to: '/ingresos', icon: <TrendingUp /> },
      { id: 'Gastos', to: '/gastos', icon: <TrendingDown /> },
      { id: 'Tesorería', to: '/tesoreria', icon: <AccountBalance /> },
      { id: 'Inventario', to: '/inventario', icon: <Home /> },
      // { id: 'Contactos', to: '/contactos', icon: <People /> },
      // { id: 'Calendario', to: '/calendario', icon: <CalendarToday /> },
      { id: 'Reportes', to: '/reportes', icon: <Print /> }
    ]
  },
  {
    id: 'Sistema',
    children: [
      { id: 'Configuración', to: '/configuracion', icon: <Settings /> }
      // { id: 'Rendimiento', to: '/', icon: <Timer /> },
      // { id: 'Base de datos', to: '/', icon: <PhonelinkSetup /> },
      // { id: 'Servidor', to: '/', icon: <SettingsInputComponent /> }
    ]
  }
];

const SideNav = props => {
  const { classes } = props;
  return (
    <nav className={classes.root}>
      <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
        <div className={classes.toolbar} />
        <List disablePadding>
          <ListItem className={classNames(classes.item, classes.itemCategory)}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.itemPrimary
              }}>
              Emmanuel Villegas
            </ListItemText>
          </ListItem>
          {categories.map(({ id, children }) => (
            <div key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary
                  }}>
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, to }) => (
                <ListItem
                  button
                  dense
                  key={childId}
                  className={classNames(classes.item, classes.itemActionable)}
                  component={NavLink}
                  to={to}
                  activeClassName={classes.itemActiveItem}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                      textDense: classes.textDense
                    }}>
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
              <Divider className={classes.divider} />
            </div>
          ))}
        </List>
      </Drawer>
    </nav>
  );
};

SideNav.propTypes = {
  classes: PropTypes.object.isRequired
};

// Apply styles
const _SideNav = withStyles(styles)(SideNav);

export default _SideNav;

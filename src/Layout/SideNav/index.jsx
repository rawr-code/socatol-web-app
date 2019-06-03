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
  CreditCard,
  Home,
  People,
  AccountBalance,
  Settings,
  Print,
  Person,
  Dns
} from '@material-ui/icons';

import styles from './styles';

const categories = [
  {
    id: 'Menu',
    children: [
      { id: 'Ingresos', to: '/ingresos', icon: <TrendingUp /> },
      { id: 'Gastos', to: '/gastos', icon: <CreditCard /> },
      {
        id: 'Tesorería',
        to: '/tesoreria',
        icon: <AccountBalance />,
        not: 'CONSULTOR'
      },
      { id: 'Inventario', to: '/inventario', icon: <Home /> },
      { id: 'Contactos', to: '/contactos', icon: <People /> },
      { id: 'Reportes', to: '/reportes', icon: <Print />, not: 'CONSULTOR' },
      {
        id: 'Configuración',
        to: '/configuracion',
        icon: <Settings />,
        not: 'CONSULTOR'
      }
    ]
  },
  {
    permission: true,
    id: 'Sistema',
    children: [{ id: 'Base de datos', to: '/base-de-datos', icon: <Dns /> }]
  }
];

const SideNav = props => {
  const { classes, session } = props;

  return (
    <nav className={classes.root}>
      <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
        <div className={classes.toolbar} />
        <List disablePadding>
          <ListItem className={classNames(classes.item, classes.itemCategory)}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.itemPrimary
              }}
              primary={session.username}
              secondary={session.role}
            />
          </ListItem>
          {categories.map(({ id, children, permission }) => {
            if (permission) {
              if (id === 'Sistema' && session.role === 'ADMINISTRADOR') {
                return (
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
                        className={classNames(
                          classes.item,
                          classes.itemActionable
                        )}
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
                );
              } else {
                return null;
              }
            } else {
              return (
                <div key={id}>
                  <ListItem className={classes.categoryHeader}>
                    <ListItemText
                      classes={{
                        primary: classes.categoryHeaderPrimary
                      }}>
                      {id}
                    </ListItemText>
                  </ListItem>
                  {children.map(({ id: childId, icon, to, not }) => {
                    if (session.role !== not) {
                      return (
                        <ListItem
                          button
                          dense
                          key={childId}
                          className={classNames(
                            classes.item,
                            classes.itemActionable
                          )}
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
                      );
                    } else {
                      return null;
                    }
                  })}
                  <Divider className={classes.divider} />
                </div>
              );
            }
          })}
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

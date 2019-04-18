import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  Home,
  People,
  DnsRounded,
  PermMediaOutlined,
  Public,
  SettingsEthernet,
  SettingsInputComponent
} from '@material-ui/icons';

import styles from './styles';

const categories = [
  {
    id: 'Menu',
    children: [
      { id: 'Usuarios', to: '/usuarios', icon: <People />, active: true },
      { id: 'Ingresos', to: '/ingresos', icon: <DnsRounded /> },
      { id: 'Gastos', to: '/gastos', icon: <PermMediaOutlined /> },
      { id: 'Tesorería', to: '/tesoreria', icon: <SettingsEthernet /> },
      { id: 'Inventario', to: '/inventario', icon: <Public /> },
      { id: 'Reportes', to: '/reportes', icon: <SettingsInputComponent /> }
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
              {children.map(({ id: childId, icon, active, to }) => (
                <ListItem
                  button
                  dense
                  key={childId}
                  component={Link}
                  to={to}
                  className={classNames(
                    classes.item,
                    classes.itemActionable,
                    active && classes.itemActiveItem
                  )}>
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

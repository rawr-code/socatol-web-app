import React from 'react';
import styles from './styles';
import { NavLink } from 'react-router-dom';

// Material UI Components
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';

import { Inbox, Menu } from '@material-ui/icons';
import { Package } from 'react-feather';

import { withStyles } from '@material-ui/core/styles';

class Layout extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, children } = this.props;
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List
          className={classes.list}
          component="nav"
          subheader={
            <ListSubheader component="span">
              Gestion de inventario
            </ListSubheader>
          }
        >
          <NavLink to="/" className={classes.navLink}>
            <ListItem className={classes.listItem} component="div">
              <ListItemIcon className={classes.listItemIcon}>
                <Inbox />
              </ListItemIcon>

              <ListItemText
                primary="Almacenes"
                className={classes.navLinkText}
              />
            </ListItem>
          </NavLink>
          <NavLink to="/productos" className={classes.navLink}>
            <ListItem className={classes.listItemActive}>
              <ListItemIcon className={classes.listItemIcon}>
                <Package />
              </ListItemIcon>

              <ListItemText
                primary="Productos"
                className={classes.navLinkText}
                classes={{ primary: classes.listItemIcon }}
              />
            </ListItem>
          </NavLink>
          <NavLink to="/" className={classes.navLink}>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <Inbox />
              </ListItemIcon>

              <ListItemText
                primary="Proveedores"
                className={classes.navLinkText}
              />
            </ListItem>
          </NavLink>
        </List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar} color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);

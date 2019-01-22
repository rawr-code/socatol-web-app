import React, { Component } from 'react';

// MaterialUI Components
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { Inbox } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';

class SideNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleDrawer = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <nav>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar} />

          <List>
            <ListItem button onClick={this.handleDrawer}>
              <ListItemIcon className={classes.listItemIcon}>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Drawer" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon className={classes.listItemIcon}>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Tesoreria" />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.listItemIcon}>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inventario" />
            </ListItem>
          </List>
        </Drawer>
      </nav>
    );
  }
}

export default withStyles(styles)(SideNavbar);

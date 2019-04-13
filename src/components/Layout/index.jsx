import React, { Component } from 'react';

// Material UI
import { CssBaseline, withStyles } from '@material-ui/core';

import SideNav from './SideNav';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  toolbar: theme.mixins.toolbar
});

class Layout extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <SideNav />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </div>
      </div>
    );
  }
}

// Apply styles
const _Layout = withStyles(styles)(Layout);

export default _Layout;

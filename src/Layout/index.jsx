import React, { Component } from 'react';

// Material UI
import { withStyles } from '@material-ui/core';

// Layout Components

import HeaderBar from './HeaderBar';
import SideNav from './SideNav';
import FeatureBar from './FeatureBar';
import FeatureBarTabs from './FeatureBarTabs';
import MainContainer from './MainContainer';

export { HeaderBar, SideNav, FeatureBar, FeatureBarTabs, MainContainer };

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
    const { classes, children, session } = this.props;
    return (
      <div className={classes.root}>
        <HeaderBar />
        <SideNav session={session} />
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

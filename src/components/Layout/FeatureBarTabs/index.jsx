import React from 'react';

// Material UI
import { AppBar, Tabs, Tab, withStyles } from '@material-ui/core';

import styles from './styles';

const FeatureBarTabs = props => {
  const { classes } = props;
  return (
    <AppBar
      component="div"
      className={classes.root}
      color="primary"
      position="static"
      elevation={0}>
      <Tabs value={0} textColor="inherit">
        <Tab textColor="inherit" label="Users" className={classes.root} />
        <Tab
          textColor="inherit"
          label="Sign-in method"
          className={classes.root}
        />
        <Tab textColor="inherit" label="Templates" className={classes.root} />
        <Tab textColor="inherit" label="Usage" className={classes.root} />
      </Tabs>
    </AppBar>
  );
};

// Apply styles
const _FeatureBarTabs = withStyles(styles)(FeatureBarTabs);

export default _FeatureBarTabs;

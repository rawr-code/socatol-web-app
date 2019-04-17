import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { AppBar, Tabs, Tab, withStyles } from '@material-ui/core';

import styles from './styles';

const FeatureBarTabs = props => {
  const { classes, tabs, value = 0, onChange } = props;
  return (
    <AppBar
      component="div"
      className={classes.root}
      color="primary"
      position="static"
      elevation={0}>
      <Tabs textColor="inherit" value={value} onChange={onChange}>
        {tabs.map(item => (
          <Tab
            textColor="inherit"
            label={item.label}
            className={classes.root}
            key={item.label}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

FeatureBarTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.array.isRequired
};

// Apply styles
const _FeatureBarTabs = withStyles(styles)(FeatureBarTabs);

export default _FeatureBarTabs;

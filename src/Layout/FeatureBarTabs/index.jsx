import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { AppBar, Tabs, Tab, withStyles } from '@material-ui/core';

import styles from './styles';

const FeatureBarTabs = props => {
  const [value, setValue] = useState(0);

  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };

  const { classes, tabs } = props;
  const TabComponent = tabs[value].component;
  return (
    <>
      <AppBar
        component="div"
        className={classes.root}
        color="primary"
        position="static"
        elevation={0}>
        <Tabs textColor="inherit" value={value} onChange={handleOnChange}>
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
      <TabComponent {...tabs[value].props} />
    </>
  );
};

FeatureBarTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.array.isRequired
};

export default withStyles(styles)(FeatureBarTabs);

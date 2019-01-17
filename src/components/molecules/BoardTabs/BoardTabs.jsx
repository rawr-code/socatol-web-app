import React from 'react';

// MaterialUI Components
import { Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const BoardTabs = props => {
  const { classes, value, handleChange, data } = props;
  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      classes={{
        root: classes.root,
        indicator: classes.indicator,
      }}
    >
      {data &&
        data.length > 0 &&
        data.map(item => {
          const { title, disabled } = item;
          return (
            <Tab
              key={`${title}_key`}
              label={title}
              disabled={disabled}
              disableRipple
              classes={{
                root: classes.tabRoot,
                labelContainer: classes.labelContainer,
              }}
            />
          );
        })}
    </Tabs>
  );
};

export default withStyles(styles)(BoardTabs);

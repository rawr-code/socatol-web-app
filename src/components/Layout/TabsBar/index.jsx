import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const TabsBar = ({ value, handleChange, labels }) => {
  return (
    <AppBar component="div" color="primary" position="static" elevation={0}>
      <Tabs value={value} onChange={handleChange} textColor="inherit">
        {labels.map(label => (
          <Tab key={label} textColor="inherit" label={label} />
        ))}
      </Tabs>
    </AppBar>
  );
};

TabsBar.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TabsBar;

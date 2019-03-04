import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const TabsBar = () => {
  return (
    <AppBar component="div" color="primary" position="static" elevation={0}>
      <Tabs value={0} textColor="inherit">
        <Tab textColor="inherit" label="Almacenes" />
        <Tab textColor="inherit" label="Productos" />
      </Tabs>
    </AppBar>
  );
};

export default TabsBar;

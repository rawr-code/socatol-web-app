import React from "react";

// Material UI
import { AppBar, Typography, Tab, Tabs } from "@material-ui/core";

// Styles
import Styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";

const TabsHeader = ({ classes, title, tabs, selectedIndex, handleChange }) => {
  return (
    <AppBar position="static" classes={{ root: classes.root }}>
      <Typography variant="h3" component="h1" className={classes.title}>
        {title}
      </Typography>
      {tabs && (
        <Tabs
          value={selectedIndex}
          onChange={handleChange}
          scrollable
          scrollButtons="off"
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            label="Almacenes"
            classes={{
              root: classes.tabButtonRoot,
              labelContainer: classes.labelContainer
            }}
          />
          <Tab
            disableRipple
            label="Productos"
            classes={{
              root: classes.tabButtonRoot,
              labelContainer: classes.labelContainer
            }}
          />
          <Tab
            disableRipple
            label="Proveedores"
            classes={{
              root: classes.tabButtonRoot,
              labelContainer: classes.labelContainer
            }}
          />
        </Tabs>
      )}
    </AppBar>
  );
};

export default withStyles(Styles)(TabsHeader);

import React from "react";

// Material UI
import { AppBar, Typography, Tab, Tabs, IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import classNames from "classnames";
// Styles
import Styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";

const TabsHeader = ({
  classes,
  title,
  tabs,
  selectedIndex,
  handleChange,
  arrowBack,
  history
}) => {
  return (
    <AppBar position="static" classes={{ root: classes.root }}>
      <div
        className={classNames(
          classes.titleContainer,
          arrowBack && classes.arrow
        )}
      >
        {arrowBack && (
          <IconButton color="secondary" onClick={() => history.goBack()}>
            <ArrowBack className={classes.icon} />
          </IconButton>
        )}
        <Typography variant="h3" component="h1" className={classes.title}>
          {title}
        </Typography>
      </div>
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

import React from "react";
import styles from "./styles";

// MaterialUI Components
import { Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const BoardTabs = props => {
  const { classes, value, handleChange, data } = props;
  return (
    <Tabs
      value={value}
      indicatorColor="secondary"
      textColor="secondary"
      onChange={handleChange}
      classes={{
        flexContainer: classes.flexContainer,
        indicator: classes.indicator
      }}
    >
      {data &&
        data.length > 0 &&
        data.map((item, key) => {
          const { title, disabled } = item;
          return (
            <Tab
              key={key}
              label={title}
              disabled={disabled}
              disableRipple
              classes={{
                root: classes.root,
                labelContainer: classes.labelContainer
              }}
            />
          );
        })}
    </Tabs>
  );
};

export default withStyles(styles)(BoardTabs);

import React from "react";
import styles from "./styles";

// Material UI
import { Paper, withStyles } from "@material-ui/core";

const CardContainer = ({ classes, children }) => {
  return <Paper className={classes.root}>{children}</Paper>;
};

export default withStyles(styles)(CardContainer);

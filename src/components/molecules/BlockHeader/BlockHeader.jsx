import React from "react";

// MaterialUI Components
import { Typography } from "@material-ui/core";
// import { Add, MoreVert, More } from "@material-ui/icons";

import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const BlockHeader = props => {
  const { classes, title } = props;
  return (
    <header className={classes.root}>
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
    </header>
  );
};

export default withStyles(styles)(BlockHeader);

import React from "react";

// MaterialUI Components
import { ListItem, ListItemText } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const BlockListItem = props => {
  const { classes, img, title, description } = props;
  return (
    <ListItem className={classes.root}>
      <div className={classes.container}>
        {img && <img src={img} className={classes.img} alt="img" />}
        <ListItemText primary={title} secondary={description} />
      </div>
      <MoreVert className={classes.icon} />
    </ListItem>
  );
};

export default withStyles(styles)(BlockListItem);

import React from "react";
import styles from "./styles";

// MaterialUI Components
import { Card, CardHeader, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const MiniCard = props => {
  const {
    classes,
    avatar,
    title = "Shrimp and Chorizo Paella",
    description = "September 14, 2016"
  } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ root: classes.cardHeader }}
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={title}
        subheader={description}
      />
    </Card>
  );
};

export default withStyles(styles)(MiniCard);

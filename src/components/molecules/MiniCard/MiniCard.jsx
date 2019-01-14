import React from "react";
import styles from "./styles";

// MaterialUI Components
import { Card, CardHeader, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// Icons
import { User, Box, AlertOctagon } from "react-feather";

const variantIcon = {
  box: Box,
  user: User,
  alert: AlertOctagon
};

const MiniCard = props => {
  const {
    classes,
    avatar = "box",
    title = "Shrimp and Chorizo Paella",
    description = "September 14, 2016"
  } = props;

  const Icon = variantIcon[avatar];
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ root: classes.cardHeader }}
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            <Icon />
          </Avatar>
        }
        title={title}
        subheader={description}
      />
    </Card>
  );
};

export default withStyles(styles)(MiniCard);

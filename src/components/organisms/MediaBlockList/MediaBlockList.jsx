import React from "react";

// MaterialUI Components
import { List } from "@material-ui/core";

import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

// Molecules
import { MediaBlock } from "../../molecules";

const MediaBlockList = props => {
  const { classes, data, img } = props;
  return (
    <List className={classes.root}>
      {data.length > 0 &&
        data.map((item, key) => {
          const { title, description } = item;
          return (
            <MediaBlock
              key={key}
              img={img}
              title={title}
              description={description}
            />
          );
        })}
    </List>
  );
};

export default withStyles(styles)(MediaBlockList);

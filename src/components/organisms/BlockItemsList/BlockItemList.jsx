import React from "react";

// MaterialUI Components
import { List } from "@material-ui/core";

import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

// Molecules
import { BlockListItem } from "../../molecules";

const BlockItemList = props => {
  const { classes, data, img } = props;
  return (
    <List className={classes.root}>
      {data.length > 0 &&
        data.map((item, key) => {
          const { title, description } = item;
          return (
            <BlockListItem
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

export default withStyles(styles)(BlockItemList);

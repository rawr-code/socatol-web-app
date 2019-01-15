import React from "react";
import styles from "./styles";

import { MiniCard } from "Molecules";

// MaterialUI Components
import { withStyles } from "@material-ui/core/styles";

const MiniCardBoard = props => {
  const { classes, data, avatar, onClick } = props;
  return (
    <section className={classes.root}>
      {data && data.length > 0 ? (
        data.map((item, key) => {
          const { name, description } = item;
          return (
            <MiniCard
              key={key}
              onClick={onClick}
              avatar={avatar}
              title={name}
              description={description}
            />
          );
        })
      ) : (
        <MiniCard avatar="alert" title="No data" description="Empty" />
      )}
    </section>
  );
};

export default withStyles(styles)(MiniCardBoard);

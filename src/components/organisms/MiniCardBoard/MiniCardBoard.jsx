import React from "react";
import styles from "./styles";

import { MiniCard } from "Molecules";

// MaterialUI Components
import { withStyles } from "@material-ui/core/styles";

const MiniCardBoard = props => {
  const { classes, data } = props;
  return (
    <section className={classes.root}>
      {data && data.length > 0 ? (
        data.map((item, key) => {
          const { title, description } = item;
          return <MiniCard key={key} title={title} description={description} />;
        })
      ) : (
        <MiniCard title="No data" description="Empty" />
      )}
    </section>
  );
};

export default withStyles(styles)(MiniCardBoard);

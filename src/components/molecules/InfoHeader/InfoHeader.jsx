import React from "react";

// MaterialUI Components
import { Typography } from "@material-ui/core";

import styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";

const InfoHeader = props => {
  const { classes, img, title, description } = props;
  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <img
          src="https://img.icons8.com/dusk/2x/warehouse.png"
          className={classes.img}
        />
        <div className={classes.titleContainer}>
          <Typography component="h1" variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.item}>
          <Typography variant="body2" className={classes.itemTitle}>
            Almacenes
          </Typography>
          <Typography component="p" variant="h4" className={classes.number}>
            3
          </Typography>
          <after className={classes.after} />
        </div>
        <div className={classes.item}>
          <Typography variant="body2" className={classes.itemTitle}>
            Productos
          </Typography>
          <Typography component="p" variant="h4" className={classes.number}>
            795
          </Typography>
          <after className={classes.after} />
        </div>
        <div className={classes.item}>
          <Typography variant="body2" className={classes.itemTitle}>
            Proveedores
          </Typography>
          <Typography component="p" variant="h4" className={classes.number}>
            32
          </Typography>
        </div>
      </div>
    </header>
  );
};

export default withStyles(styles)(InfoHeader);

import React from "react";
import styles from "./styles";

// MaterialUI Components
import { Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const NEW = withStyles(styles)(props => {
  const { classes, data } = props;
  return (
    <form noValidate autoComplete="off" className={classes.flexColumn}>
      <TextField
        className={classes.textField}
        id="outlined-name"
        label="Nombre"
        name="name"
        margin="dense"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        id="outlined-code"
        label="Codigo"
        name="code"
        margin="dense"
        variant="outlined"
      />
    </form>
  );
});

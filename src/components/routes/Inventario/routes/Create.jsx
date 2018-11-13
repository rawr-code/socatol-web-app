import React, { Fragment } from "react";

// Material UI
import { Paper, TextField, Typography, Button } from "@material-ui/core";

// Styles
import Styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";

// Components
import { TabsHeader } from "../../../molecules";

const Create = ({ classes, title, formTitle, arrowBack, history }) => {
  return (
    <Fragment>
      <TabsHeader title={title} arrowBack={arrowBack} history={history} />
      <div className={classes.root}>
        <Paper classes={{ root: classes.paper }}>
          <div className={classes.imgContainer}>
            <img
              alt="Almacén icon"
              src="https://img.icons8.com/dusk/2x/warehouse.png"
              style={{ height: 128, width: 128 }}
            />
          </div>
          <form className={classes.formContainer}>
            <Typography
              variant="h4"
              component="h2"
              className={classes.formTitle}
            >
              {formTitle}
            </Typography>
            <div className={classes.textFieldContainer}>
              <TextField
                id="standard-name"
                label="Nombre"
                placeholder="Nombre del almacén"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange("name")}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Codigo"
                placeholder="Codigo del almacén"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange("name")}
                margin="normal"
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={event => event.preventDefault()}
            >
              Registrar
            </Button>
          </form>
        </Paper>
      </div>
    </Fragment>
  );
};

export default withStyles(Styles)(Create);

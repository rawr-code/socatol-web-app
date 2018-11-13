import React, { Component, Fragment } from "react";

// Material UI
import { Paper, TextField, Typography, Button } from "@material-ui/core";

// Styles
import Styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";

// Components
import { TabsHeader } from "../../../molecules";

class Create extends Component {
  state = {
    name: "",
    code: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  addAlmacen = event => {
    event.preventDefault();
    let data = this.state;
    this.props.handleCreate(data);
  };

  render() {
    const { classes, title, formTitle, arrowBack, history } = this.props;
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
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Codigo"
                  placeholder="Codigo del almacén"
                  className={classes.textField}
                  value={this.state.code}
                  onChange={this.handleChange("code")}
                  margin="normal"
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.addAlmacen}
              >
                Registrar
              </Button>
            </form>
          </Paper>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(Styles)(Create);

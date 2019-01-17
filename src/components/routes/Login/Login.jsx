import React, { Component } from 'react';

// Material UI
import {
  Paper,
  Typography,
  FormControl,
  Button,
  Input,
  InputLabel,
} from '@material-ui/core';

// Styles
import { withStyles } from '@material-ui/core/styles';
import Styles from './Styles';

class Login extends Component {
  handleSubmit = event => {
    const { loggedIn, history } = this.props;
    event.preventDefault();
    loggedIn();
    history.push('/');
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <form className={classes.form}>
          <Typography variant="h6" component="h1" className={classes.title}>
            SocatolWebApp
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            className={classes.titleLogin}
          >
            Iniciar Sesión
          </Typography>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="user">Usuario</InputLabel>
            <Input
              id="user"
              name="user"
              autoComplete="user"
              autoFocus
              required
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              required
            />
          </FormControl>
          <Button
            onClick={this.handleSubmit}
            className={classes.button}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            value="holamundo"
          >
            Ingresar
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(Styles)(Login);

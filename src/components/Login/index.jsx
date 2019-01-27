import React from 'react';
import styles from './styles';
import { Field, reduxForm } from 'redux-form';

// Material UI
import {
  CssBaseline,
  withStyles,
  Paper,
  Typography,
  Button
} from '@material-ui/core';

import classNames from 'classnames';
import { FieldMaterialUI } from '../../utils/FieldsMaterialUI';

const Login = props => {
  const { classes, handleSubmit, pristine, submitting } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center">
          Acceder
        </Typography>
        <Typography variant="body1" align="center">
          Sistema Adminsitrativo
        </Typography>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Field
            component={FieldMaterialUI}
            id="inputEmail"
            name="email"
            label="Correo electronico"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            fullWidth
            type="text"
          />
          <Field
            component={FieldMaterialUI}
            id="inputPassword"
            name="password"
            label="Contraseña"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            fullWidth
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={pristine || submitting}
          >
            iniciar sesión
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default reduxForm({ form: 'LoginForm' })(withStyles(styles)(Login));

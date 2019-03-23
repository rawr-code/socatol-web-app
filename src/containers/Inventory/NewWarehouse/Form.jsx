import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styles from './styles';

// Material UI
import { Grid, Button, Typography, withStyles } from '@material-ui/core';

// Components
import { TextField } from '../../../components/MuiInputsRedux';

let Form = props => {
  const { classes, handleSubmit } = props;

  return (
    <form autoComplete="off" onSubmit={handleSubmit} style={{ padding: 24 }}>
      <Typography variant="h6">Datos del almacén</Typography>
      <Grid container spacing={24} direction="column">
        <Grid item xs={12}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="Name"
            label="Nombre"
            margin="dense"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="lastname"
            label="Descripción"
            margin="dense"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={24} justify="flex-end">
        <Grid item>
          {/* <Button color="primary">Limpiar campos</Button> */}
          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default reduxForm({ form: 'NewIncome' })(withStyles(styles)(Form));

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styles from './styles';

// Material UI
import {
  Grid,
  Button,
  Typography,
  Divider,
  withStyles
} from '@material-ui/core';

// Components
import { TextField } from '../../../components/MuiInputsRedux';

let Form = props => {
  const { classes, handleSubmit } = props;

  return (
    <form autoComplete="off" onSubmit={handleSubmit} style={{ padding: 24 }}>
      <Typography variant="h6">Información basica</Typography>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="cedula"
            label="Cedula"
            margin="dense"
            type="number"
            fullWidth
            nombre="ramon"
          />
        </Grid>
        <Grid item xs={3}>
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
        <Grid item xs={3}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="lastname"
            label="Apellido"
            margin="dense"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
      <Divider style={{ margin: '24px 0' }} />
      <Typography variant="h6">Información de contacto</Typography>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="telefono"
            label="Telefono"
            margin="dense"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="movil"
            label="Movil"
            margin="dense"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="correo"
            label="Correo"
            margin="dense"
            type="email"
            fullWidth
          />
        </Grid>
      </Grid>
      <Divider style={{ margin: '24px 0' }} />
      <Typography variant="h6">Detalles de ubicación</Typography>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="estado"
            label="Estado"
            margin="dense"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="municipio"
            label="Municipio"
            margin="dense"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Field
            className={classes.field}
            component={TextField}
            id="inputName"
            name="direccion"
            label="Dirección"
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

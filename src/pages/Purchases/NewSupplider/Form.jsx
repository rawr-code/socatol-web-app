import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { CardContent, CardActions, Button, Grid } from '@material-ui/core';

// Atoms
import CardContainer from '../../../components/Atoms/CardContainer';
import ReduxInputField from '../../../components/Atoms/ReduxInputField';
import ReduxSelectField from '../../../components/Atoms/ReduxSelectField';

// Molecules
import DataTableHeader from '../../../components/Molecules/DataTableHeader';

const Form = props => {
  const { handleSubmit, pristine, submitting } = props;
  const headerProps = {
    img: 'https://img.icons8.com/dusk/64/000000/conference.png',
    title: 'Proveedor',
    subtitle: 'Detalles del proveedor'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardContainer style={{ width: 650 }}>
        <DataTableHeader {...headerProps} />
        <CardContent>
          <Grid container spacing={24}>
            <Grid item md={6}>
              <Field
                component={ReduxSelectField}
                label="Tipo de proveedor"
                name="type"
                options={['Persona natural', 'Persona juridica']}
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="Cedula"
                name="dni"
                variant="outlined"
                placeholder="0"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="Nombres"
                name="firstname"
                variant="outlined"
                placeholder="Nombres"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="Apellidos"
                name="lastname"
                variant="outlined"
                placeholder="Apellidos"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxSelectField}
                label="Sexo"
                name="gender"
                options={['Masculino', 'Femenino']}
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="Telefono"
                name="phone"
                variant="outlined"
                placeholder="0"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="Correo Electronico"
                name="email"
                variant="outlined"
                placeholder="correo@correo.com"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={12}>
              <Field
                component={ReduxInputField}
                label="Dirección"
                name="address"
                variant="outlined"
                placeholder="Dirección"
                fullWidth
                dense
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 12
            // paddingTop: 8
          }}>
          <Button color="primary">Limpiar campos</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={pristine || submitting}>
            Guardar
          </Button>
        </CardActions>
      </CardContainer>
    </form>
  );
};

export default reduxForm({
  form: 'NewSupplider'
})(Form);

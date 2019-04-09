import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, Button, MenuItem } from '@material-ui/core';

// Atoms
import ReduxInputField from '../../../components/Atoms/ReduxInputField';

import validate from './formValidations';

let ClientForm = props => {
  const { handleSubmit, invalid, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={24}>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Tipo de cliente"
            name="entity.type"
            variant="outlined"
            select
            fullWidth
            dense>
            <MenuItem value="natural">Persona natural</MenuItem>
            <MenuItem value="juridico">Persona juridica</MenuItem>
          </Field>
        </Grid>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Cedula"
            name="entity.dni"
            variant="outlined"
            placeholder="0"
            fullWidth
            dense
          />
        </Grid>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Primer Nombre*"
            name="entity.firstname"
            variant="outlined"
            fullWidth
            dense
          />
        </Grid>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Segundo Nombre"
            name="entity.secondname"
            variant="outlined"
            fullWidth
            dense
          />
        </Grid>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Primer Apellido*"
            name="entity.lastname"
            variant="outlined"
            fullWidth
            dense
          />
        </Grid>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Segundo Apellido"
            name="entity.secondlastname"
            variant="outlined"
            fullWidth
            dense
          />
        </Grid>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Telefono"
            name="entity.phone"
            variant="outlined"
            fullWidth
            dense
          />
        </Grid>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Correo"
            name="entity.email"
            variant="outlined"
            fullWidth
            dense
          />
        </Grid>
        <Grid item md={12}>
          <Field
            component={ReduxInputField}
            label="Dirección"
            name="entity.address"
            variant="outlined"
            fullWidth
            dense
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: 12 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={invalid || pristine || submitting}>
          Siguiente
        </Button>
      </div>
    </form>
  );
};

ClientForm = reduxForm({
  form: 'NewSalesInvoice', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  initialValues: { products: [{}] },
  validate
})(ClientForm);

// Decorate with connect to read form values
const selector = formValueSelector('NewSalesInvoice'); // <- same as form name

ClientForm = connect(state => {
  const products = selector(state, 'products');
  return {
    state: {
      products
    }
  };
})(ClientForm);

export default ClientForm;

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Button, MenuItem } from '@material-ui/core';

// Atoms
import ReduxInputField from '../../../components/Atoms/ReduxInputField';

import validate from './formValidations';

const DetailsForm = props => {
  const { handleSubmit, invalid, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={24}>
        <Grid item md={6}>
          <Field
            component={ReduxInputField}
            label="Tipo de pago"
            name="typePaid"
            variant="outlined"
            select
            fullWidth
            dense>
            <MenuItem value="efectivo">Efectivo</MenuItem>
            <MenuItem value="transferencia">Transferencia</MenuItem>
          </Field>
        </Grid>
        <Grid item md={12}>
          <Field
            component={ReduxInputField}
            label="Notas de la factura"
            name="notes"
            variant="outlined"
            fullWidth
            multiline
            rows="4"
            rowsMax="2"
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

export default reduxForm({
  form: 'NewSalesInvoice', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(DetailsForm);

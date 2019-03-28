import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { CardContent, CardActions, Button, Grid } from '@material-ui/core';

// Atoms
import CardContainer from '../../../components/Atoms/CardContainer';
import ReduxInputField from '../../../components/Atoms/ReduxInputField';

// Molecules
import DataTableHeader from '../../../components/Molecules/DataTableHeader';

const Form = props => {
  const { handleSubmit, pristine, submitting } = props;
  const headerProps = {
    img: 'https://img.icons8.com/dusk/64/000000/supplier.png',
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
                component={ReduxInputField}
                label="Nombres"
                name="name"
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
                component={ReduxInputField}
                label="Cedula"
                name="price"
                variant="outlined"
                placeholder="0"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="Telefono"
                name="quantity"
                variant="outlined"
                placeholder="0"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={12}>
              <Field
                component={ReduxInputField}
                label="Dirección"
                name="warehouse"
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
  form: 'NewSaleInvoice',
  initialValues: { products: [{}] }
})(Form);

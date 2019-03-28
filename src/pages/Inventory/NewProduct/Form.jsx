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
    img: 'https://img.icons8.com/dusk/64/000000/product.png',
    title: 'Producto',
    subtitle: 'Detalles del producto'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardContainer style={{ width: 350 }}>
        <DataTableHeader {...headerProps} />
        <CardContent>
          <Grid container spacing={24}>
            <Grid item md={12}>
              <Field
                component={ReduxInputField}
                label="Nombre"
                name="name"
                variant="outlined"
                placeholder="Nombre del producto"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={12}>
              <Field
                component={ReduxInputField}
                label="Precio"
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
                label="Cantidad"
                name="quantity"
                variant="outlined"
                placeholder="0"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="IVA%"
                name="iva"
                variant="outlined"
                placeholder="0"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={12}>
              <Field
                component={ReduxInputField}
                label="Almacén"
                name="warehouse"
                variant="outlined"
                placeholder="Almacén"
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

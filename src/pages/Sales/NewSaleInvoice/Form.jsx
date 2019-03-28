import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import { CardContent, Typography } from '@material-ui/core';

// Atoms
import CardContainer from '../../../components/Atoms/CardContainer';
import ReduxInputField from '../../../components/Atoms/ReduxInputField';

// Molecules
import DataTableHeader from '../../../components/Molecules/DataTableHeader';

import ProductsTable from './ProductsTable';

const Form = props => {
  const { handleSubmit } = props;
  const headerProps = {
    img: 'https://img.icons8.com/dusk/64/000000/planner.png',
    title: 'Factura',
    subtitle: 'Detalles de la factura'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DataTableHeader {...headerProps} noPaddingTop />
          <CardContent>
            <Field
              component={ReduxInputField}
              label="Fecha de emisión"
              name="emitted"
              variant="outlined"
              dense
            />
            <Field
              component={ReduxInputField}
              label="Fecha de expiración"
              name="expired"
              variant="outlined"
              dense
            />
          </CardContent>
        </div>
        <CardContent>
          <Typography variant="h6" component="h1" color="primary">
            Cliente
          </Typography>
          <Field
            component={ReduxInputField}
            name="client"
            label="Tipo de cliente"
            variant="outlined"
            style={{ width: 350 }}
            dense
          />
          <Field
            component={ReduxInputField}
            name="client1"
            label="DNI"
            variant="outlined"
            style={{ width: 350 }}
            dense
          />
        </CardContent>
      </CardContainer>
      <CardContainer>
        <FieldArray name="products" component={ProductsTable} />
      </CardContainer>
      <div style={{ marginBottom: 64 }} />
    </form>
  );
};

export default reduxForm({
  form: 'NewSaleInvoice',
  initialValues: { products: [{}] }
})(Form);

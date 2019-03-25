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
    img: 'https://img.icons8.com/dusk/64/000000/purchase-order.png',
    title: 'Nueva Factura',
    subtitle: 'Detalles de la factura'
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardContainer>
        <DataTableHeader {...headerProps} />
        <CardContent>
          {/* <Typography variant="h6" color="primary" component="h2">
            Detalles
          </Typography> */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Field
              component={ReduxInputField}
              name="client"
              label="Cliente"
              variant="outlined"
            />
            <div>
              <Field
                component={ReduxInputField}
                label="Fecha de emisión"
                name="expired"
                variant="outlined"
              />
              <Field
                component={ReduxInputField}
                label="Fecha de vencimiento"
                name="emitted"
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <Field
              component={ReduxInputField}
              label="Estado"
              name="state"
              variant="outlined"
            />
            <Field
              component={ReduxInputField}
              label="Municipio"
              name="municipality"
              variant="outlined"
            />
            <Field
              component={ReduxInputField}
              label="Localidad"
              name="address"
              variant="outlined"
            />
          </div>
        </CardContent>
      </CardContainer>
      <CardContainer>
        <DataTableHeader {...headerProps} />
        <FieldArray name="products" component={ProductsTable} />
      </CardContainer>
    </form>
  );
};

export default reduxForm({
  form: 'NewSaleInvoice',
  initialValues: { products: [{}] }
})(Form);

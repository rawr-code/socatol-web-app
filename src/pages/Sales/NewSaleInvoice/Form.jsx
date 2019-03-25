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
  const headerPropsDate = {
    img: 'https://img.icons8.com/dusk/64/000000/planner.png',
    title: 'Fechas',
    subtitle: 'Fechas de emisión y expiración'
  };
  const headerPropsAddress = {
    img: 'https://img.icons8.com/dusk/64/000000/address.png',
    title: 'Dirección',
    subtitle: 'Destino de los productos'
  };
  const headerPropsClient = {
    img: 'https://img.icons8.com/dusk/64/000000/user-group-man-woman.png',
    title: 'Cliente',
    subtitle: 'Persona natural'
  };
  const headerPropsProducts = {
    img: 'https://img.icons8.com/dusk/64/000000/sell.png',
    title: 'Productos',
    subtitle: 'Lista de productos a facturar'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardContainer>
        <DataTableHeader {...headerPropsDate} />
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
      </CardContainer>
      <CardContainer>
        <DataTableHeader {...headerPropsAddress} />
        <CardContent>
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
        </CardContent>
      </CardContainer>
      <CardContainer>
        <DataTableHeader {...headerPropsClient} />
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Field
              component={ReduxInputField}
              name="client"
              label="Cliente"
              variant="outlined"
              style={{ width: 350 }}
            />
          </div>
        </CardContent>
      </CardContainer>
      <CardContainer>
        <DataTableHeader {...headerPropsProducts} />
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

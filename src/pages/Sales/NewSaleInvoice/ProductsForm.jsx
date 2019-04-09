import React from 'react';
import { FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import ProductsTable from './ProductsTable';

import validate from './formValidations';

let ProductsForm = props => {
  const { handleSubmit, invalid, pristine, submitting, state } = props;
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FieldArray name="products" component={ProductsTable} data={state} />
      <div style={{ padding: '12px 24px' }}>
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

ProductsForm = reduxForm({
  form: 'NewSalesInvoice', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ProductsForm);

// Decorate with connect to read form values
const selector = formValueSelector('NewSalesInvoice'); // <- same as form name

ProductsForm = connect(state => {
  const products = selector(state, 'products');
  return {
    state: {
      products
    }
  };
})(ProductsForm);

export default ProductsForm;

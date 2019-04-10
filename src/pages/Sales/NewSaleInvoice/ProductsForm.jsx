import React, { Component } from 'react';
import { FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

// Actions
import { GET_ALL } from '../../../store/actions/Product';

import ProductsTable from './ProductsTable';

import validate from './formValidations';

class ProductsForm extends Component {
  componentDidMount = async () => {
    const { getProducts } = this.props.actions;
    await getProducts();
  };

  render() {
    const { handleSubmit, invalid, pristine, submitting, state } = this.props;
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
  }
}

ProductsForm = reduxForm({
  form: 'NewSalesInvoice', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ProductsForm);

// Decorate with connect to read form values
const selector = formValueSelector('NewSalesInvoice'); // <- same as form name

const mapStateToProps = state => {
  const { products } = state.Inventory.Product;
  const productArray = selector(state, 'products');
  return {
    state: {
      products,
      productArray
    }
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getProducts: () => dispatch(GET_ALL)
  }
});

ProductsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsForm);

export default ProductsForm;

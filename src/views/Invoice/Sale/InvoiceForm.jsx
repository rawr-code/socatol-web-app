import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
// Material UI
import { Stepper, Step, StepLabel } from '@material-ui/core';

// Mutations
import { NEW_INVOICE_MUTATION } from '../../../mutations/Invoice';

// Forms
import PersonForm from './PersonForm';
import ProductsListForm from './ProductsListForm';
import InvoiceDetailsForm from './InvoiceDetailsForm';

class InvoiceForm extends Component {
  state = {
    activeStep: 0,
    steps: ['Cliente', 'Productos', 'Detalles'],
    errors: {
      person: {},
      products: {},
      invoice: {}
    },
    person: {
      personId: '',
      dni: '',
      name: '',
      state: '',
      municipality: '',
      address: '',
      phone: '',
      email: ''
    },
    products: [],
    invoice: {
      paymentType: '',
      note: '',
      dispatch: true,
      total: 0
    }
  };

  handleChange = stateName => e => {
    const { type, name, value, checked } = e.target;
    const data = this.state[stateName];
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [stateName]: { ...data, [name]: result } });
  };

  handleSelectPerson = value => {
    const { person } = this.state;
    this.setState({
      person: { ...person, personId: value }
    });
  };

  handleAddProducts = productsList => {
    const products = productsList.map(product => ({ ...product, quantity: 0 }));
    this.setState({
      products
    });
  };

  handleQuantityProduct = index => e => {
    let { products, invoice } = this.state;
    let product = products[index];
    let total = 0;
    const { value } = e.target;

    if (products.length === 0) {
      total = 0;
    }

    product.quantity = Number(value);
    product.total = product.price * value;
    products[index] = product;

    products.map(
      product => (total += Number(product.price) * Number(product.quantity))
    );

    this.setState({
      products,
      invoice: { ...invoice, total }
    });
  };

  handleRemoveProduct = id => () => {
    let { products } = this.state;
    products = products.filter(product => product.id !== id);

    this.setState({
      products
    });
  };

  handleNext = () => {
    const { activeStep, steps } = this.state;
    if (activeStep < steps.length - 1) {
      this.setState({
        activeStep: activeStep + 1
      });
    }
  };

  handleBack = () => {
    const { activeStep } = this.state;
    if (activeStep > 0) {
      this.setState({
        activeStep: activeStep - 1
      });
    }
  };

  handleValidate = () => {
    const { name, description } = this.state;
    const isValid = !name || !description;

    return isValid;
  };

  handleSubmit = onSubmit => async e => {
    e.preventDefault();
    const result = await onSubmit({
      variables: { input: this.generateInput(), type: 'SALE' }
    });
    console.log(result);
  };

  generateInput = () => {
    const {
      person: { personId, ...personInfo },
      products,
      invoice: { paymentType, note }
    } = this.state;

    const productsList = products.map(product => ({
      product: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity
    }));

    const input = {
      person:
        personId.id === 'new'
          ? { ...personInfo, dni: Number(personInfo.dni) }
          : { id: personId.id },
      products: productsList,
      paymentType,
      note
    };

    return input;
  };

  render() {
    const { activeStep, steps, person, products, invoice } = this.state;
    const { history } = this.props;
    return (
      <Mutation
        mutation={NEW_INVOICE_MUTATION}
        onCompleted={() => history.push('/ingresos/facturas/venta')}>
        {onSubmit => {
          return (
            <>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === 0 && (
                <PersonForm
                  handleSelect={this.handleSelectPerson}
                  handleChange={this.handleChange('person')}
                  data={person}
                  next={this.handleNext}
                />
              )}
              {activeStep === 1 && (
                <ProductsListForm
                  handleTest={this.handleTest}
                  handleNewProduct={this.handleNewProduct}
                  handleSelect={this.handleAddProducts}
                  handleQuantityProduct={this.handleQuantityProduct}
                  handleRemoveProduct={this.handleRemoveProduct}
                  data={products}
                  back={this.handleBack}
                  next={this.handleNext}
                />
              )}
              {activeStep === 2 && (
                <InvoiceDetailsForm
                  handleChange={this.handleChange('invoice')}
                  data={invoice}
                  back={this.handleBack}
                  next={this.handleNext}
                  onSubmit={this.handleSubmit(onSubmit)}
                />
              )}
            </>
          );
        }}
      </Mutation>
    );
  }
}

export default withRouter(InvoiceForm);

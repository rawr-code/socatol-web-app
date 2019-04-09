import React, { Component, Fragment } from 'react';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

class NewSaleInvoice extends Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleSubmit = values => {
    console.log(values);
  };
  render() {
    const { activeStep } = this.state;
    return (
      <Fragment>
        <FeatureBar title="Facturar Venta" backArrow />
        <Form
          activeStep={activeStep}
          previousPage={this.handleBack}
          nextPage={this.handleNext}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }
}

export default NewSaleInvoice;

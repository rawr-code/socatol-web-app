import React, { Component, Fragment } from 'react';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

class NewBankAccount extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <Fragment>
        <FeatureBar title="Nueva Cuenta" backArrow />
        <Form onSubmit={this.onSubmit} />
      </Fragment>
    );
  }
}

export default NewBankAccount;

import React, { Component, Fragment } from 'react';

// Form
import Form from './Form';

// Components
import FeatureBar from '../../../components/FeatureBar';
import CardContainer from '../../../components/CardContainer';

class NewIncome extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <Fragment>
        <FeatureBar title="Factura de compra" backArrow />
        <CardContainer>
          <Form
            onSubmit={this.onSubmit}
            initialValues={{ date: new Date(), date1: new Date() }}
          />
        </CardContainer>
      </Fragment>
    );
  }
}

export default NewIncome;

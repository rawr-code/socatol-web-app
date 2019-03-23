import React, { Component, Fragment } from 'react';

// Material UI
import { Paper } from '@material-ui/core';

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
        <FeatureBar title="Nuevo Almacén" backArrow />
        <Paper style={{ maxWidth: 300, margin: '0 auto', marginTop: 48 }}>
          <Form
            onSubmit={this.onSubmit}
            initialValues={{ date: new Date(), date1: new Date() }}
          />
        </Paper>
      </Fragment>
    );
  }
}

export default NewIncome;

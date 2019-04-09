import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

// Actions
import { NEW } from '../../../store/actions/Warehouse';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

class NewWarehouse extends Component {
  handleSubmit = async values => {
    const { newWarehouse } = this.props.actions;
    console.log(values);
    const result = await newWarehouse(values);
    console.log(result);
    if (result.error) {
      throw new SubmissionError(result.validation);
    }
  };

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.props);
    return (
      <>
        <FeatureBar title="Nuevo Almacén" backArrow />
        <Form
          onSubmit={this.handleSubmit}
          onSubmitSuccess={this.handleOnSubmitSuccess}
        />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    newWarehouse: payload => dispatch(NEW(payload))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewWarehouse);

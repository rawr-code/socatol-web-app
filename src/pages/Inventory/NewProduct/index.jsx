import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

// Actions
import { GET_ALL } from '../../../store/actions/Warehouse';
import { NEW } from '../../../store/actions/Product';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

class NewProduct extends Component {
  componentDidMount = () => {
    const { getWarehouses } = this.props.actions;
    getWarehouses();
  };

  handleSubmit = async values => {
    const { newProduct } = this.props.actions;
    console.log(values);
    const result = await newProduct(values);
    if (result.error) {
      throw new SubmissionError(result.validation);
    }
  };

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  };

  render() {
    const { warehouses } = this.props.state;
    return (
      <>
        <FeatureBar title="Nuevo Producto" backArrow />
        <Form
          onSubmit={this.handleSubmit}
          onSubmitSuccess={this.handleOnSubmitSuccess}
          warehouses={warehouses}
        />
      </>
    );
  }
}

const mapStateToProps = ({
  Inventory: {
    Warehouse: { warehouses }
  }
}) => ({
  state: {
    warehouses
  }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getWarehouses: () => dispatch(GET_ALL),
    newProduct: payload => dispatch(NEW(payload))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProduct);

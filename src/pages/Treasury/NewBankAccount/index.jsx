import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

// Actions
import { NEW } from '../../../store/actions/BankAccount';

import Form from './Form';

class NewBankAccount extends Component {
  onSubmit = async values => {
    console.log(values);
    const { newAccount } = this.props.actions;
    const result = await newAccount(values);
    console.log(result);
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

const mapDispatchToProps = dispatch => ({
  actions: {
    newAccount: payload => dispatch(NEW(payload))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewBankAccount);

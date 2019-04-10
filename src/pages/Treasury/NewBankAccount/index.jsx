import React, { Component, Fragment } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

// Actions
import { NEW } from '../../../store/actions/BankAccount';

import Form from './Form';

class NewBankAccount extends Component {
  handleSubmit = async values => {
    console.log(values);
    const { newAccount } = this.props.actions;
    const result = await newAccount(values);
    if (result.error) {
      throw new SubmissionError(result.validation);
    }
  };

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  };

  render() {
    const { banks } = this.props.state;
    return (
      <Fragment>
        <FeatureBar title="Nueva Cuenta" backArrow />
        <Form
          onSubmit={this.handleSubmit}
          onSubmitSuccess={this.handleOnSubmitSuccess}
          bankList={banks}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  Treasury: {
    BankAccount: { banks }
  }
}) => ({
  state: { banks }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    newAccount: payload => dispatch(NEW(payload))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBankAccount);

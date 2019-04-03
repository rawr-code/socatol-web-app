import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

// Actions
import { NEW } from '../../../store/actions/Client';

import Form from './Form';

class NewClient extends Component {
  onSubmit = async values => {
    console.log(values);
    const { newClient } = this.props.actions;
    const result = await newClient(values);
    console.log(result);
  };
  render() {
    return (
      <Fragment>
        <FeatureBar title="Nuevo Cliente" backArrow />
        <Form onSubmit={this.onSubmit} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    newClient: payload => dispatch(NEW(payload))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewClient);

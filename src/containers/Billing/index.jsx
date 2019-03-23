import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Containers
import Billing from './Billing';
import NewIncome from './NewIncome';

class BillingRouter extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <Route path={`${match.path}/compra/nuevo`} component={NewIncome} />
        <Route exact path={match.path} component={Billing} />
      </Fragment>
    );
  }
}

export default BillingRouter;

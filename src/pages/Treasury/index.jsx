import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Treasury from './Treasury';
import NewBankAccount from './NewBankAccount';

export default ({ match }) => (
  <Fragment>
    <Route
      exact
      path={`${match.path}/cuenta/nuevo`}
      component={NewBankAccount}
    />
    <Route exact path={match.path} component={Treasury} />
  </Fragment>
);

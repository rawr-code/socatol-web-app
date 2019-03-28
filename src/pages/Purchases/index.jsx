import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Purchases from './Purchases';
import NewSupplider from './NewSupplider';

export default ({ match }) => (
  <Fragment>
    <Route
      exact
      path={`${match.path}/proveedor/nuevo`}
      component={NewSupplider}
    />
    <Route exact path={match.path} component={Purchases} />
  </Fragment>
);

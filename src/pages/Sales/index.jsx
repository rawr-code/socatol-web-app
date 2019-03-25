import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Sales from './Sales';
import NewSaleInvoice from './NewSaleInvoice';

export default ({ match }) => (
  <Fragment>
    <Route
      exact
      path={`${match.path}/facturar/nuevo`}
      render={props => <NewSaleInvoice {...props} />}
    />
    <Route exact path={match.path} component={Sales} />
  </Fragment>
);

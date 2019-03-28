import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Sales from './Sales';
import NewSaleInvoice from './NewSaleInvoice';
import NewClient from './NewClient';

export default ({ match }) => (
  <Fragment>
    <Route exact path={`${match.path}/cliente/nuevo`} component={NewClient} />
    <Route
      exact
      path={`${match.path}/facturar/nuevo`}
      component={NewSaleInvoice}
    />
    <Route exact path={match.path} component={Sales} />
  </Fragment>
);

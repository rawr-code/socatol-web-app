import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Sales from './Sales';

export default ({ match }) => (
  <Fragment>
    <Route exact path={`${match.path}/facturar/nuevo`} component={Sales} />
    <Route exact path={match.path} component={Sales} />
  </Fragment>
);

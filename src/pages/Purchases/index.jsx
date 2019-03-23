import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Purchases from './Purchases';

export default ({ match }) => (
  <Fragment>
    <Route exact path={match.path} component={Purchases} />
  </Fragment>
);

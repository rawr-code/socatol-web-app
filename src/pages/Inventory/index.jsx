import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Inventory from './Inventory';

export default ({ match }) => (
  <Fragment>
    <Route exact path={match.path} component={Inventory} />
  </Fragment>
);

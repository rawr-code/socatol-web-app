import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Treasury from './Treasury';

export default ({ match }) => (
  <Fragment>
    <Route exact path={match.path} component={Treasury} />
  </Fragment>
);

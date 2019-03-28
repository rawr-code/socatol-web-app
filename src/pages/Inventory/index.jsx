import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Inventory from './Inventory';
import NewWarehouse from './NewWarehouse';
import NewProduct from './NewProduct';

export default ({ match }) => (
  <Fragment>
    <Route
      exact
      path={`${match.path}/almacen/nuevo`}
      component={NewWarehouse}
    />
    <Route exact path={`${match.path}/producto/nuevo`} component={NewProduct} />
    <Route exact path={match.path} component={Inventory} />
  </Fragment>
);

import React from 'react';
import { Route } from 'react-router-dom';

import Inventory from './Inventory';

const InventoryContainer = ({ match }) => (
  <>
    <Route exact path={`${match.path}/almacen/nuevo`} component={Inventory} />
    <Route exact path={match.path} component={Inventory} />
  </>
);

export default InventoryContainer;

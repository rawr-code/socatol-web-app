import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Containers
import Inventory from './Inventory';
import NewWarehouse from './NewWarehouse';

class InventoryRouter extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <Route path={`${match.path}/almacen/nuevo`} component={NewWarehouse} />
        <Route exact path={match.path} component={Inventory} />
      </Fragment>
    );
  }
}

export default InventoryRouter;

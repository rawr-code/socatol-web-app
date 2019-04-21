import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views

// Warehouse
import {
  AllWarehouses,
  NewWarehouse,
  DetailsWarehouse,
  UpdateWarehouse
} from './Warehouse';

// Product
import {
  AllProducts,
  NewProduct,
  DetailsProduct,
  UpdateProduct
} from './Product';

const Inventory = () => {
  const tabs = [
    {
      label: 'Almacenes',
      to: '/almacenes'
    },
    {
      label: 'Productos',
      to: '/productos'
    }
  ];

  return (
    <>
      <FeatureBar title="Inventario" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const InventoryContainer = ({ match: { path }, location: { pathname } }) => {
  const showHeader =
    pathname === `${path}/almacenes` || pathname === `${path}/productos`;

  return (
    <>
      {showHeader && <Route path={path} component={Inventory} />}
      <Switch>
        <Redirect from={path} to={`${path}/almacenes`} exact />

        {/* Warehouse Routes */}
        <Route exact path={`${path}/almacenes`} component={AllWarehouses} />
        <Route
          exact
          path={`${path}/almacenes/nuevo`}
          component={NewWarehouse}
        />
        <Route
          exact
          path={`${path}/almacenes/:id`}
          component={DetailsWarehouse}
        />
        <Route
          exact
          path={`${path}/almacenes/:id/editar`}
          component={UpdateWarehouse}
        />

        {/* Product Routes*/}
        <Route exact path={`${path}/productos`} component={AllProducts} />
        <Route exact path={`${path}/productos/nuevo`} component={NewProduct} />
        <Route
          exact
          path={`${path}/productos/:id`}
          component={DetailsProduct}
        />
        <Route
          exact
          path={`${path}/productos/:id/editar`}
          component={UpdateProduct}
        />
        <Route component={() => <div>404</div>} />
      </Switch>
    </>
  );
};

export default InventoryContainer;

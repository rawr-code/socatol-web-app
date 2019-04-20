import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views

// Warehouse
import {
  AllWarehouses,
  NewWarehouse,
  UpdateWarehouse,
  DetailsWarehouse
} from './Warehouse';

// Product
import {
  AllProducts,
  NewProduct,
  UpdateProduct,
  DetailsProduct
} from './Product';

const Inventory = () => {
  const tabs = [
    {
      label: 'Almacenes',
      component: AllWarehouses
    },
    {
      label: 'Productos',
      component: AllProducts
    }
  ];
  return (
    <>
      <FeatureBar title="Inventario" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const InventoryContainer = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Inventory} />
      <Route
        exact
        path={`${match.path}/almacen/nuevo`}
        component={NewWarehouse}
      />
      <Route
        exact
        path={`${match.path}/almacen/:id`}
        component={DetailsWarehouse}
      />
      <Route
        exact
        path={`${match.path}/almacen/:id/editar`}
        component={UpdateWarehouse}
      />
      <Route
        exact
        path={`${match.path}/producto/nuevo`}
        component={NewProduct}
      />
      <Route
        exact
        path={`${match.path}/producto/:id`}
        component={DetailsProduct}
      />
      <Route
        exact
        path={`${match.path}/producto/:id/editar`}
        component={UpdateProduct}
      />
      <Route component={() => <div>404</div>} />
    </Switch>
  );
};

export default InventoryContainer;

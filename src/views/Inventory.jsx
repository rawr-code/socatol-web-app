import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Layout
import FeatureBar from '../Layout/FeatureBar';
import FeatureBarTabs from '../Layout/FeatureBarTabs';

// Warehouse
import { AllWarehouses, DetailsWarehouse } from './Warehouse';

// Product
import { AllProducts, DetailsProduct } from './Product';

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

const InventoryContainer = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path} component={Inventory} />
      <Route
        exact
        path={`${path}/almacenes/:id`}
        component={DetailsWarehouse}
      />
      <Route exact path={`${path}/productos/:id`} component={DetailsProduct} />

      <Route component={() => <div>404</div>} />
    </Switch>
  );
};

export default InventoryContainer;

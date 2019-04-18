import React from 'react';
import { Route } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views
import { AllWarehouses } from './Warehouse';
import { AllProducts, NewProduct } from './Product';

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
    <>
      <Route exact path={match.path} component={Inventory} />
      <Route
        exact
        path={`${match.path}/productos/nuevo`}
        component={NewProduct}
      />
    </>
  );
};

export default InventoryContainer;

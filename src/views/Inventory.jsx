import React from 'react';
import { Route } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views
import { AllWarehouses } from './Warehouse';
import { AllProducts, NewProduct, UpdateProduct } from './Product';

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
      <Route
        exact
        path={`${match.path}/productos/:id/editar`}
        component={UpdateProduct}
      />
    </>
  );
};

export default InventoryContainer;

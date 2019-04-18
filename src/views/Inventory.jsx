import React from 'react';
import { Route } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views
import { AllWarehouses } from './Warehouse';
import { AllProducts } from './Product';

const Inventory = props => {
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
      <Route path={match.path} component={Inventory} />
    </>
  );
};

export default InventoryContainer;

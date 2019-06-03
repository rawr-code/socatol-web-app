import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Layout
import FeatureBar from '../Layout/FeatureBar';
import FeatureBarTabs from '../Layout/FeatureBarTabs';

// Warehouse
import { AllWarehouses, DetailsWarehouse } from './Warehouse';

// Product
import { AllProducts, DetailsProduct } from './Product';

const Inventory = ({ session }) => {
  const tabs = [
    {
      label: 'Almacenes',
      component: () => <AllWarehouses session={session} />
    },
    {
      label: 'Productos',
      component: () => <AllProducts session={session} />
    }
  ];

  return (
    <>
      <FeatureBar title="Inventario" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const InventoryContainer = ({ match: { path }, session }) => {
  console.log(session);
  return (
    <Switch>
      <Route
        exact
        path={path}
        render={props => <Inventory {...props} session={session} />}
      />
      <Route
        exact
        path={`${path}/almacenes/:id`}
        render={props => <DetailsWarehouse {...props} session={session} />}
      />
      <Route
        exact
        path={`${path}/productos/:id`}
        render={props => <DetailsProduct {...props} session={session} />}
      />

      <Route component={() => <div>404</div>} />
    </Switch>
  );
};

export default InventoryContainer;

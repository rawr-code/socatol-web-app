import React from 'react';
import { Route } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views
import AllSuppliders from './Supplier/AllSuppliders';

const Expenses = props => {
  const tabs = [
    {
      label: 'Facturas de compra'
    },
    {
      label: 'Proveedores',
      component: AllSuppliders
    }
  ];
  return (
    <>
      <FeatureBar title="Gastos" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const ExpensesContainer = ({ match }) => {
  return (
    <>
      <Route path={match.path} component={Expenses} />
    </>
  );
};

export default ExpensesContainer;

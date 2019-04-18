import React from 'react';
import { Route } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views
import AllClients from './Client/AllClients';

const Incomes = props => {
  const tabs = [
    {
      label: 'Facturas de venta'
    },
    {
      label: 'Clientes',
      component: AllClients
    }
  ];
  return (
    <>
      <FeatureBar title="Ingresos" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const IncomesContainer = ({ match }) => {
  return (
    <>
      <Route path={match.path} component={Incomes} />
    </>
  );
};

export default IncomesContainer;

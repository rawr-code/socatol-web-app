import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views

// Sales Invoice
import SalesInvoce from './Invoice/SalesInvoice';

// Client
import AllClients from './Client/AllClients';

const Incomes = () => {
  const tabs = [
    {
      label: 'Facturas de venta',
      to: '/facturas/venta'
    },
    {
      label: 'Clientes',
      to: '/clientes'
    }
  ];
  return (
    <>
      <FeatureBar title="Ingresos" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const IncomesContainer = ({ match: { path }, location: { pathname } }) => {
  const showHeader =
    pathname === `${path}/facturas/venta` || pathname === `${path}/clientes`;

  return (
    <>
      {showHeader && <Route path={path} component={Incomes} />}
      <Switch>
        <Redirect from={path} to={`${path}/facturas/venta`} exact />
        <Route exact path={`${path}/facturas/venta`} component={SalesInvoce} />
        <Route exact path={`${path}/clientes`} component={AllClients} />
      </Switch>
    </>
  );
};

export default IncomesContainer;

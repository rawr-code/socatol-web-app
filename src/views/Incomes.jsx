import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Layout
import FeatureBar from '../Layout/FeatureBar';
import FeatureBarTabs from '../Layout/FeatureBarTabs';

// Sales Invoice
import SalesInvoce from './Invoice/Sale/SalesInvoice';
import NewSalesInvoce from './Invoice/Sale/InvoiceForm';
import DetailsInvoice from './Invoice/DetailsInvoice';

// Client
import AllClients from './Client/AllClients';
import DetailsClient from './Client/DetailsClient';

const Incomes = ({ session }) => {
  const tabs = [
    {
      label: 'Facturas de venta',
      component: () => <SalesInvoce session={session} />
    },
    {
      label: 'Clientes',
      component: () => <AllClients session={session} />
    }
  ];

  return (
    <>
      <FeatureBar title="Ingresos" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const IncomesContainer = ({ match: { path }, session }) => {
  return (
    <Switch>
      <Route
        exact
        path={path}
        render={routeProps => <Incomes {...routeProps} session={session} />}
      />

      <Route
        exact
        path={`${path}/clientes/:id`}
        render={routeProps => (
          <DetailsClient {...routeProps} session={session} />
        )}
      />
      <Route
        exact
        path={`${path}/factura-venta/:id`}
        render={routeProps => (
          <DetailsInvoice {...routeProps} session={session} />
        )}
      />

      <Route
        exact
        path={`${path}/facturas/venta/nuevo`}
        render={routeProps => (
          <NewSalesInvoce {...routeProps} session={session} />
        )}
      />
    </Switch>
  );
};

export default IncomesContainer;

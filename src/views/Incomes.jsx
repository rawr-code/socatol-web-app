import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Layout
import FeatureBar from '../Layout/FeatureBar';
import FeatureBarTabs from '../Layout/FeatureBarTabs';

// Sales Invoice
import SalesInvoce from './Invoice/Sale/SalesInvoice';
import NewSalesInvoce from './Invoice/Sale/InvoiceForm';

// Client
import AllClients from './Client/AllClients';

const Incomes = () => {
  const tabs = [
    {
      label: 'Facturas de venta',
      component: SalesInvoce
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

const IncomesContainer = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path} component={Incomes} />

      <Route
        exact
        path={`${path}/facturas/venta/nuevo`}
        component={NewSalesInvoce}
      />
    </Switch>
  );
};

export default IncomesContainer;

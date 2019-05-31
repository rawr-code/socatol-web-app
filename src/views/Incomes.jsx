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

      <Route exact path={`${path}/clientes/:id`} component={DetailsClient} />
      <Route
        exact
        path={`${path}/factura-venta/:id`}
        component={DetailsInvoice}
      />

      <Route
        exact
        path={`${path}/facturas/venta/nuevo`}
        component={NewSalesInvoce}
      />
    </Switch>
  );
};

export default IncomesContainer;

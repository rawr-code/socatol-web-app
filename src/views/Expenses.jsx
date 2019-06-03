import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Layout
import FeatureBar from '../Layout/FeatureBar';
import FeatureBarTabs from '../Layout/FeatureBarTabs';

// Expenses Invoice
import PurchasesInvoce from './Invoice/Purchase/PurchasesInvoice';
import NewPurchaseInvoce from './Invoice/Purchase/InvoiceForm';
import DetailsInvoice from './Invoice/DetailsInvoice';

// Client
import AllSuppliders from './Supplier/AllSuppliders';
import DetailsSupplier from './Supplier/DetailsSupplier';

const Expenses = ({ session }) => {
  const tabs = [
    {
      label: 'Facturas de compra',
      component: () => <PurchasesInvoce session={session} />
    },
    {
      label: 'Proveedores',
      component: () => <AllSuppliders session={session} />
    }
  ];

  return (
    <>
      <FeatureBar title="Gastos" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const ExpensesContainer = ({ match: { path }, session }) => {
  return (
    <Switch>
      <Route
        exact
        path={path}
        render={routeProps => <Expenses {...routeProps} session={session} />}
      />
      <Route
        exact
        path={`${path}/proveedores/:id`}
        render={routeProps => (
          <DetailsSupplier {...routeProps} session={session} />
        )}
      />
      <Route
        exact
        path={`${path}/factura-compra/:id`}
        render={routeProps => (
          <DetailsInvoice {...routeProps} session={session} />
        )}
      />

      <Route
        exact
        path={`${path}/facturas/compra/nuevo`}
        render={routeProps => (
          <NewPurchaseInvoce {...routeProps} session={session} />
        )}
      />
    </Switch>
  );
};

export default ExpensesContainer;

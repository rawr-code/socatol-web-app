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

const Expenses = () => {
  const tabs = [
    {
      label: 'Facturas de compra',
      component: PurchasesInvoce
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

const ExpensesContainer = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path} component={Expenses} />
      <Route
        exact
        path={`${path}/proveedores/:id`}
        component={DetailsSupplier}
      />
      <Route
        exact
        path={`${path}/factura-compra/:id`}
        component={DetailsInvoice}
      />

      <Route
        exact
        path={`${path}/facturas/compra/nuevo`}
        component={NewPurchaseInvoce}
      />
    </Switch>
  );
};

export default ExpensesContainer;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views

// Sales Invoice
import PurchaseInvoce from './Invoice/PurchaseInvoice';

// Client
import AllSuppliders from './Supplier/AllSuppliders';

const Expenses = () => {
  const tabs = [
    {
      label: 'Facturas de compra',
      to: '/facturas/compra'
    },
    {
      label: 'Proveedores',
      to: '/proveedores'
    }
  ];
  return (
    <>
      <FeatureBar title="Gastos" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const ExpensesContainer = ({ match: { path }, location: { pathname } }) => {
  const showHeader =
    pathname === `${path}/facturas/compra` ||
    pathname === `${path}/proveedores`;

  return (
    <>
      {showHeader && <Route path={path} component={Expenses} />}
      <Switch>
        <Redirect from={path} to={`${path}/facturas/compra`} exact />
        <Route
          exact
          path={`${path}/facturas/compra`}
          component={PurchaseInvoce}
        />
        <Route exact path={`${path}/proveedores`} component={AllSuppliders} />
      </Switch>
    </>
  );
};

export default ExpensesContainer;

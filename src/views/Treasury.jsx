import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views

// BankAccount
import {
  AllBankAccounts,
  NewBankAccount,
  DetailsBankAccount,
  UpdateBankAccount
} from './BankAccount';

const Treasury = props => {
  const tabs = [
    {
      label: 'Cuentas bancarias',
      to: '/cuentas-bancarias'
    }
  ];
  return (
    <>
      <FeatureBar title="Tesorería" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const TreasuryContainer = ({ match: { path }, location: { pathname } }) => {
  const showHeader = pathname === `${path}/cuentas-bancarias`;

  return (
    <>
      {showHeader && <Route path={path} component={Treasury} />}
      <Switch>
        <Redirect from={path} to={`${path}/cuentas-bancarias`} exact />

        {/* Warehouse Routes */}
        <Route
          exact
          path={`${path}/cuentas-bancarias`}
          component={AllBankAccounts}
        />
        <Route
          exact
          path={`${path}/cuentas-bancarias/nuevo`}
          component={NewBankAccount}
        />
        <Route
          exact
          path={`${path}/cuentas-bancarias/:id`}
          component={DetailsBankAccount}
        />
        <Route
          exact
          path={`${path}/cuentas-bancarias/:id/editar`}
          component={UpdateBankAccount}
        />
        <Route component={() => <div>404</div>} />
      </Switch>
    </>
  );
};

export default TreasuryContainer;

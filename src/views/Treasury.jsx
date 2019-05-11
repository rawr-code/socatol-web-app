import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Layout
import FeatureBar from '../Layout/FeatureBar';
import FeatureBarTabs from '../Layout/FeatureBarTabs';

// BankAccount
import { AllBankAccounts, BankAccount } from './BankAccount';

const Treasury = props => {
  const tabs = [
    {
      label: 'Cuentas bancarias',
      component: AllBankAccounts
    }
  ];

  return (
    <>
      <FeatureBar title="Tesorería" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const TreasuryContainer = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path} component={Treasury} />
      <Route
        exact
        path={`${path}/cuentas-bancarias`}
        component={AllBankAccounts}
      />

      <Route
        exact
        path={`${path}/cuentas-bancarias/:id`}
        component={BankAccount}
      />

      <Route component={() => <div>404</div>} />
    </Switch>
  );
};

export default TreasuryContainer;

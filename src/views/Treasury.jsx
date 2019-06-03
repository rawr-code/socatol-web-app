import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Layout
import FeatureBar from '../Layout/FeatureBar';
import FeatureBarTabs from '../Layout/FeatureBarTabs';

// BankAccount
import { AllBankAccounts, BankAccount } from './BankAccount';

const Treasury = ({ session }) => {
  const tabs = [
    {
      label: 'Cuentas bancarias',
      component: () => <AllBankAccounts session={session} />
    }
  ];

  return (
    <>
      <FeatureBar title="Tesorería" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const TreasuryContainer = ({ match: { path }, session }) => {
  return (
    <Switch>
      <Route
        exact
        path={path}
        render={props => <Treasury {...props} session={session} />}
      />

      <Route
        exact
        path={`${path}/cuentas-bancarias/:id`}
        render={props => <BankAccount {...props} session={session} />}
      />

      <Route component={() => <div>404</div>} />
    </Switch>
  );
};

export default TreasuryContainer;

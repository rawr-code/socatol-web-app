import React from 'react';
import { Route } from 'react-router-dom';
import FeatureBar from '../components/Layout/FeatureBar';
import FeatureBarTabs from '../components/Layout/FeatureBarTabs';

// Tabs Views
import { AllWarehouses } from './Warehouse';

const Treasury = props => {
  const tabs = [
    {
      label: 'Cuentas bancarias',
      component: AllWarehouses
    }
  ];
  return (
    <>
      <FeatureBar title="Tesorería" />
      <FeatureBarTabs tabs={tabs} />
    </>
  );
};

const TreasuryContainer = ({ match }) => {
  return (
    <>
      <Route path={match.path} component={Treasury} />
    </>
  );
};

export default TreasuryContainer;

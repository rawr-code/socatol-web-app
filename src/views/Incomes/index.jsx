import React from 'react';
import { Route } from 'react-router-dom';

import Incomes from './Incomes';

const IncomesContainer = ({ match }) => {
  return (
    <>
      <Route path={match.path} component={Incomes} />
    </>
  );
};

export default IncomesContainer;

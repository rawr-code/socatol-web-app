import React from 'react';
import { Route } from 'react-router-dom';

import Expenses from './Expenses';

const ExpensesContainer = ({ match }) => {
  return (
    <>
      <Route path={match.path} component={Expenses} />
    </>
  );
};

export default ExpensesContainer;

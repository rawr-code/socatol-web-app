import React from 'react';

// Mutations
import { NEW_BANKACCOUNT_MUTATION } from '../../mutations/BankAccount';

import BankAccountForm from './BankAccountForm';

const NewWarehouse = () => {
  return <BankAccountForm mutation={NEW_BANKACCOUNT_MUTATION} />;
};

export default NewWarehouse;

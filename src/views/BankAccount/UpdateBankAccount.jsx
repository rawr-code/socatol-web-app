import React from 'react';
import { Query } from 'react-apollo';

// Queries
import { GET_BANKACCOUNT_QUERY } from '../../queries/BankAccount';

// Mutations
import { UPDATE_BANKACCOUNT_MUTATION } from '../../mutations/BankAccount';

import BankAccountForm from './BankAccountForm';

const UpdateBankAccount = props => {
  const { id } = props.match.params;
  return (
    <Query query={GET_BANKACCOUNT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'loading...';

        if (error) console.log(`Error: ${error.message}`);

        if (data && data.getBankAccount === null) return 'not found 404';

        return (
          <BankAccountForm
            mutation={UPDATE_BANKACCOUNT_MUTATION}
            data={data.getBankAccount}
          />
        );
      }}
    </Query>
  );
};

export default UpdateBankAccount;

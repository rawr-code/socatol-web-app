import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { FeatureBar } from '../../components/Layout';

// Queries
import { GET_BANKACCOUNT_QUERY } from '../../queries/BankAccount';

const DetailsBankAccount = props => {
  const { id } = props.match.params;
  return (
    <Query query={GET_BANKACCOUNT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';

        if (error) return `Error: ${error.message}`;

        const bankAccount = data.getBankAccount;
        console.log(bankAccount);

        return (
          <>
            <FeatureBar
              title={bankAccount.name}
              subtitle={bankAccount.bank}
              back
            />
            <p>Banco: {bankAccount.bank}</p>
            <p>Tipo de cuenta: {bankAccount.type}</p>
            <p>Número de cuenta: {bankAccount.number}</p>
            <p>Activo: {`${bankAccount.active}`}</p>
          </>
        );
      }}
    </Query>
  );
};

export default DetailsBankAccount;

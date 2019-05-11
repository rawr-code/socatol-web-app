import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { FeatureBar, FeatureBarTabs } from '../../Layout';

// Queries
import { GET_BANKACCOUNT_QUERY } from '../../queries/BankAccount';

import BankAccountDetails from './BankAccountDetails';
import BankAccountTransactions from './BankAccountTransactions';
import BankAccountConciliate from './BankAccountConciliate';

const BankAccount = props => {
  const { id } = props.match.params;

  return (
    <Query query={GET_BANKACCOUNT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';

        if (error) console.error(error.message);

        const bankAccount = data.getBankAccount;

        console.log(bankAccount);

        return (
          <>
            <FeatureBar
              title={bankAccount.name}
              // subtitle="Cuenta Bancaría"
              // help
              back
            />
            <FeatureBarTabs
              tabs={[
                {
                  label: 'Información',
                  component: BankAccountDetails,
                  props: { data: bankAccount }
                },
                {
                  label: 'Transacciones',
                  component: BankAccountTransactions,
                  props: { data: bankAccount }
                },
                {
                  label: 'Conciliar',
                  component: BankAccountConciliate,
                  props: { data: bankAccount }
                }
              ]}
            />
          </>
        );
      }}
    </Query>
  );
};

export default BankAccount;

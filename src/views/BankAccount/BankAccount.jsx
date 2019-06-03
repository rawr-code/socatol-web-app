import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { FeatureBar, FeatureBarTabs } from '../../Layout';

// Queries
import { GET_BANKACCOUNT_QUERY } from '../../queries/BankAccount';

import BankAccountDetails from './BankAccountDetails';
import BankAccountTransactions from './BankAccountTransactions';
// import BankAccountConciliate from './BankAccountConciliate';

const BankAccount = props => {
  const { id } = props.match.params;
  const { session } = props;

  return (
    <Query query={GET_BANKACCOUNT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.error(error.message);

        const { bankAccount } = data;

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
                  component: routeProps => (
                    <BankAccountDetails session={session} {...routeProps} />
                  ),
                  props: { data: bankAccount }
                },
                {
                  label: 'Extracto bancario',
                  component: routeProps => (
                    <BankAccountTransactions
                      session={session}
                      {...routeProps}
                    />
                  ),
                  props: { data: bankAccount }
                }
                // {
                //   label: 'Conciliar',
                //   component: BankAccountConciliate,
                //   props: { data: bankAccount }
                // }
              ]}
            />
          </>
        );
      }}
    </Query>
  );
};

export default BankAccount;

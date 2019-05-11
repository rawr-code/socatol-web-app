import React from 'react';
import { Query, Mutation } from 'react-apollo';

// Material UI
import { Grid } from '@material-ui/core';

// Layout
import { MainContainer } from '../../Layout';

// Atoms
import { UploadButton } from '../../components/Atoms';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../components/Molecules';

// Queries
import { GET_BANKACCOUNT_TRANSACTIONS_QUERY } from '../../queries/BankAccount';

// Mutations
import { NEW_BANKACCOUNT_TRANSACTION_MUTATION } from '../../mutations/BankAccount';
import { UPLOADFILE_MUTATION } from '../../mutations/UploadFile';

// Forms
import TransactionForm from './TransactionForm';

const BankAccountTransactions = props => {
  const { id } = props.data;

  const columns = [
    {
      name: 'date',
      title: 'Fecha'
    },
    {
      name: 'ref',
      title: 'Referencia'
    },
    {
      name: 'concept',
      title: 'Concepto'
    },
    {
      name: 'amount',
      title: 'Importe'
    }
  ];

  return (
    <MainContainer>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <ContentHeader title="Extracto Bancario">
            <Mutation mutation={UPLOADFILE_MUTATION}>
              {mutate => (
                <UploadButton
                  fileTypes=".csv"
                  title="Cargar extracto bancario"
                  onUpload={mutate}
                  id={id}
                />
              )}
            </Mutation>
            <ButtonDialogForm
              title="Añadir transacción"
              form={TransactionForm}
              mutation={NEW_BANKACCOUNT_TRANSACTION_MUTATION}
              style={{ marginLeft: 8 }}
              id={id}
            />
          </ContentHeader>
          <Query query={GET_BANKACCOUNT_TRANSACTIONS_QUERY} variables={{ id }}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) console.error(error.message);

              let rows = [];

              if (data && data.getBankAccountTransactions) {
                rows = data.getBankAccountTransactions;
              }

              return <DataTable columns={columns} rows={rows} />;
            }}
          </Query>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default BankAccountTransactions;

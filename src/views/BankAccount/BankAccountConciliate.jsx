import React from 'react';
import { Query } from 'react-apollo';

// Material UI
import { Grid } from '@material-ui/core';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import { ContentHeader, DataTable } from '../../components/Molecules';

// Queries
import { GET_BANKACCOUNT_TRANSACTIONS_QUERY } from '../../queries/BankAccount';

const BankAccount = props => {
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
        <Grid item xs={12} md={6}>
          <ContentHeader title="Extracto Bancario" />
          <Query query={GET_BANKACCOUNT_TRANSACTIONS_QUERY} variables={{ id }}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) console.error(error.message);

              let rows = [];

              if (data && data.getBankAccountTransactions) {
                rows = data.getBankAccountTransactions;
              }

              return (
                <DataTable
                  columns={columns}
                  rows={rows}
                  handleClick={value => console.log(value)}
                />
              );
            }}
          </Query>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentHeader title="Facturas" />
          <DataTable
            columns={[
              {
                name: 'name',
                title: 'Fecha'
              },
              {
                name: 'name1',
                title: 'Número'
              },
              {
                name: 'name2',
                title: 'Monto'
              }
            ]}
            rows={[]}
            pathTab="/inventario/productos"
            history={props.history ? null : null}
          />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default BankAccount;

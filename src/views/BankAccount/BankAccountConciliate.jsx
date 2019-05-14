import React from 'react';
import { Query } from 'react-apollo';

// Material UI
import { Grid, Tabs, Tab } from '@material-ui/core';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import { ContentHeader, DataTable } from '../../components/Molecules';

// Queries
import { GET_BANKACCOUNT_TRANSACTIONS_QUERY } from '../../queries/BankAccount';

import { GET_SALES_INVOICES_QUERY } from '../../queries/Invoice';

const BankAccount = props => {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function handleChange1(event, newValue) {
    setValue1(newValue);
  }

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
          {/* <ContentHeader title="Extracto Bancario" /> */}
          <Tabs value={value1} onChange={handleChange1}>
            <Tab label="Todas las transacciones" />
            <Tab label="Pendientes" />
            <Tab label="Conciliadas" />
          </Tabs>
          {value1 === 0 && (
            <Query
              query={GET_BANKACCOUNT_TRANSACTIONS_QUERY}
              variables={{ id }}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) console.error(error.message);

                let { bankAccountTransactions: rows } = data;

                return (
                  <DataTable
                    columns={columns}
                    rows={rows}
                    handleClick={e => console.log(e)}
                  />
                );
              }}
            </Query>
          )}
          {value1 === 1 && (
            <Query
              query={GET_BANKACCOUNT_TRANSACTIONS_QUERY}
              variables={{ id }}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) console.error(error.message);

                let { bankAccountTransactions: rows } = data;

                return (
                  <DataTable
                    columns={columns}
                    rows={[]}
                    handleClick={e => console.log(e)}
                  />
                );
              }}
            </Query>
          )}
          {value1 === 2 && (
            <Query
              query={GET_BANKACCOUNT_TRANSACTIONS_QUERY}
              variables={{ id }}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) console.error(error.message);

                let { bankAccountTransactions: rows } = data;

                return (
                  <DataTable
                    columns={columns}
                    rows={[]}
                    handleClick={e => console.log(e)}
                  />
                );
              }}
            </Query>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <ContentHeader title="Facturas" /> */}
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Todas las facturas" />
            <Tab label="Compra" />
            <Tab label="Venta" />
          </Tabs>
          {value === 0 && (
            <Query query={GET_SALES_INVOICES_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) console.error(error.message);

                let { invoices: rows } = data;

                return (
                  <DataTable
                    columns={[
                      {
                        name: 'dateEmit',
                        title: 'Fecha'
                      },
                      {
                        name: 'person',
                        title: 'Cliente'
                      },
                      {
                        name: 'number',
                        title: 'Número'
                      },
                      {
                        name: 'amount',
                        title: 'Monto'
                      }
                    ]}
                    rows={rows}
                    handleClick={e => console.log(e)}
                  />
                );
              }}
            </Query>
          )}
          {value === 1 && (
            <Query query={GET_SALES_INVOICES_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) console.error(error.message);

                let { invoices: rows } = data;

                return (
                  <DataTable
                    columns={[
                      {
                        name: 'dateEmit',
                        title: 'Fecha'
                      },
                      {
                        name: 'person',
                        title: 'Cliente'
                      },
                      {
                        name: 'number',
                        title: 'Número'
                      },
                      {
                        name: 'amount',
                        title: 'Monto'
                      }
                    ]}
                    rows={[]}
                    handleClick={e => console.log(e)}
                  />
                );
              }}
            </Query>
          )}
          {value === 2 && (
            <Query query={GET_SALES_INVOICES_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) console.error(error.message);

                let { invoices: rows } = data;

                return (
                  <DataTable
                    columns={[
                      {
                        name: 'dateEmit',
                        title: 'Fecha'
                      },
                      {
                        name: 'person',
                        title: 'Cliente'
                      },
                      {
                        name: 'number',
                        title: 'Número'
                      },
                      {
                        name: 'amount',
                        title: 'Monto'
                      }
                    ]}
                    rows={[]}
                    handleClick={e => console.log(e)}
                  />
                );
              }}
            </Query>
          )}
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default BankAccount;

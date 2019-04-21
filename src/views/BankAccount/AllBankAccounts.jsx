import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

// Material UI
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  Avatar,
  Button
} from '@material-ui/core';

// Icons
import { Home } from '@material-ui/icons';

// Layout
import { MainContainer } from '../../components/Layout';

// Molecules
import ContentHeader from '../../components/Molecules/ContentHeader';

// Queries
import { GET_BANKACCOUNTS_QUERY } from '../../queries/BankAccount';

const AllBankAccounts = props => {
  return (
    <MainContainer>
      <ContentHeader
        title="Todas las cuentas bancarias"
        button={{
          label: 'Añadir cuenta',
          to: '/tesoreria/cuentas-bancarias/nuevo'
        }}
      />
      <Query query={GET_BANKACCOUNTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error:${error.message}`;

          const bankAccounts = data.getBankAccounts;
          console.log(bankAccounts);
          if (bankAccounts.length < 1) return null;
          return (
            <Grid container spacing={24}>
              {bankAccounts.map(bankAccount => (
                <Grid item xs={12} md={3} key={bankAccount.id}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar style={{ backgroundColor: '#039be5' }}>
                          <Home />
                        </Avatar>
                      }
                      title={bankAccount.name}
                      subheader={bankAccount.bank}
                    />

                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        component={Link}
                        to={`/tesoreria/cuentas-bancarias/${bankAccount.id}`}
                        //
                      >
                        Administrar
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          );
        }}
      </Query>
    </MainContainer>
  );
};

export default AllBankAccounts;

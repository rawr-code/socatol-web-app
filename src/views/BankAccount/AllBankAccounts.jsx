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
import { MainContainer } from '../../Layout';

// Molecules
import { ContentHeader, ButtonDialogForm } from '../../components/Molecules';

// Queries
import { GET_BANKACCOUNTS_QUERY } from '../../queries/BankAccount';

// Mutations
import { NEW_BANKACCOUNT_MUTATION } from '../../mutations/BankAccount';

// Form
import BankAccountForm from './BankAccountForm';

const AllBankAccounts = props => {
  return (
    <MainContainer>
      <ContentHeader title="Todas las cuentas bancarias">
        <ButtonDialogForm
          title="Añadir cuenta"
          form={BankAccountForm}
          mutation={NEW_BANKACCOUNT_MUTATION}
        />
      </ContentHeader>
      <Query query={GET_BANKACCOUNTS_QUERY}>
        {({ loading, error, data }) => {
          if (error) {
            console.error(error.message);
            return null;
          }

          let bankAccounts = [];

          if (data && data.getBankAccounts) {
            bankAccounts = data.getBankAccounts;
          }

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

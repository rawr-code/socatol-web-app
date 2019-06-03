import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

// Material UI
import { Grid, Card, CardActions, Button, Typography } from '@material-ui/core';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import { ContentHeader, ButtonDialogForm } from '../../components/Molecules';

// Queries
import { GET_BANKACCOUNTS_QUERY } from '../../queries/BankAccount';

// Mutations
import { NEW_BANKACCOUNT_MUTATION } from '../../mutations/BankAccount';

// Subscriptions
import { BANKACCOUNT_ADDED_SUBSCRIPTION } from '../../subscriptions/BankAccount';

// Form
import BankAccountForm from './BankAccountForm';

import bankAccountImg from '../../images/bankAccount.png';

import Notification from '../../components/Notification';

class DataContainer extends Component {
  componentDidMount() {
    this.props.subscribe();
  }

  render() {
    const { loading, error, data } = this.props;
    if (loading) return null;
    if (error) console.error(error.message);

    const { bankAccounts } = data;

    return (
      <Grid container spacing={24}>
        {bankAccounts.map(bankAccount => (
          <Grid item xs={12} md={3} key={bankAccount.id}>
            <Card>
              <div
                style={{
                  padding: '24px 24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  alignItems: 'center'
                }}>
                <img src={bankAccountImg} alt="imagen" height={64} width={64} />
                <div>
                  <Typography variant="h6">{bankAccount.name}</Typography>
                  <Typography variant="body1">{bankAccount.bank}</Typography>
                </div>
              </div>

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
  }
}

const AllBankAccounts = ({ session }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <MainContainer>
      <ContentHeader title="Todas las cuentas bancarias">
        {session.role !== 'CONSULTOR' && (
          <ButtonDialogForm
            title="Añadir cuenta"
            form={BankAccountForm}
            mutation={NEW_BANKACCOUNT_MUTATION}
            success={setIsOpen}
          />
        )}
        <Notification
          open={isOpen}
          handleOpen={setIsOpen}
          message="Guardado con exito!"
        />
      </ContentHeader>
      <Query query={GET_BANKACCOUNTS_QUERY}>
        {({ subscribeToMore, ...rest }) => {
          return (
            <DataContainer
              {...rest}
              subscribe={() =>
                subscribeToMore({
                  document: BANKACCOUNT_ADDED_SUBSCRIPTION,
                  updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    console.log(subscriptionData);
                    const { bankAccountAdded } = subscriptionData.data;

                    return {
                      bankAccounts: [...prev.bankAccounts, bankAccountAdded]
                    };
                  }
                })
              }
            />
          );
        }}
      </Query>
    </MainContainer>
  );
};

export default AllBankAccounts;

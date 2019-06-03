import React from 'react';

// Material UI
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import { ContentHeader, ButtonDialogForm } from '../../components/Molecules';

// Mutations
import { UPDATE_BANKACCOUNT_MUTATION } from '../../mutations/BankAccount';

// Forms
import BankAccountForm from './BankAccountForm';

const BankAccount = props => {
  const { data, session } = props;

  return (
    <MainContainer>
      <ContentHeader title="Información de la cuenta">
        {session.role !== 'CONSULTOR' && (
          <ButtonDialogForm
            title="Editar información"
            form={BankAccountForm}
            mutation={UPDATE_BANKACCOUNT_MUTATION}
            data={data}
          />
        )}
      </ContentHeader>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                <b>Nombre:</b> {data.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <b>Banco:</b> {data.bank}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <b>Tipo:</b> {data.type}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <b>Número:</b> {data.number}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default BankAccount;

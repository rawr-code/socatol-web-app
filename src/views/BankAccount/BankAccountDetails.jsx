import React from 'react';

// Material UI
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../components/Molecules';

// Mutations
import { UPDATE_BANKACCOUNT_MUTATION } from '../../mutations/BankAccount';

// Forms
import BankAccountForm from './BankAccountForm';

const BankAccount = props => {
  const { data } = props;
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
      <ContentHeader title="Información de la cuenta">
        <ButtonDialogForm
          title="Editar cuenta"
          form={BankAccountForm}
          mutation={UPDATE_BANKACCOUNT_MUTATION}
          data={data}
        />
      </ContentHeader>
      <Grid container spacing={24}>
        <Grid item xs={12} md={4}>
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
        </Grid>
        <Grid item xs={12} md={8}>
          <DataTable
            columns={columns}
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

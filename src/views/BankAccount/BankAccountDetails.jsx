import React from 'react';

// Material UI
import { Grid, Typography, Card, CardContent, Paper } from '@material-ui/core';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import { ContentHeader, ButtonDialogForm } from '../../components/Molecules';

// Mutations
import { UPDATE_BANKACCOUNT_MUTATION } from '../../mutations/BankAccount';

// Forms
import BankAccountForm from './BankAccountForm';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const dataChart = [
  {
    name: 'Enero',
    Gastos: 4000,
    Ingresos: 2400,
    amt: 2400
  },
  {
    name: 'Febrero',
    Gastos: 3000,
    Ingresos: 1398,
    amt: 2210
  },
  {
    name: 'Marzo',
    Gastos: 2000,
    Ingresos: 9800,
    amt: 2290
  },
  {
    name: 'Abril',
    Gastos: 2780,
    Ingresos: 3908,
    amt: 2000
  },
  {
    name: 'Mayo',
    Gastos: 1890,
    Ingresos: 4800,
    amt: 2181
  },
  {
    name: 'Junio',
    Gastos: 2390,
    Ingresos: 3800,
    amt: 2500
  }
];

const BankAccount = props => {
  const { data } = props;

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
          <Paper style={{ padding: 24 }}>
            <LineChart
              width={650}
              height={300}
              data={dataChart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Ingresos"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="Gastos" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} md={8}>
          <DataTable
            columns={columns}
            rows={[]}
            pathTab="/inventario/productos"
            history={props.history ? null : null}
          />
        </Grid> */}
      </Grid>
    </MainContainer>
  );
};

export default BankAccount;

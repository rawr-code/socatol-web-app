import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
// Material UI
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

// Layout
import { MainContainer, FeatureBar } from '../../Layout';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../components/Molecules';

// Queries
import { GET_SUPPLIER_QUERY } from '../../queries/Person';

// Mutations
import { UPDATE_WAREHOUSE_MUTATION } from '../../mutations/Warehouse';

// Forms
import PersonForm from './PersonForm';

const DetailsWarehouse = props => {
  const { id } = props.match.params;
  const { history, session } = props;
  const columns = [
    {
      name: 'dateEmit',
      title: 'Fecha'
    },
    {
      name: 'number',
      title: 'Número'
    },
    {
      name: 'paymentType',
      title: 'Tipo de pago'
    },
    {
      name: 'amount',
      title: 'Monto'
    }
  ];
  return (
    <Query query={GET_SUPPLIER_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) console.error(error.message);
        console.log(data);

        let { person } = data;

        return (
          <>
            <FeatureBar title={person.name} back subtitle="Proveedor" />
            <MainContainer>
              <ContentHeader title="Información del proveedor">
                {session.role !== 'CONSULTOR' && (
                  <ButtonDialogForm
                    title="Editar ínformación"
                    form={PersonForm}
                    mutation={UPDATE_WAREHOUSE_MUTATION}
                    data={person}
                  />
                )}
              </ContentHeader>
              <Grid container spacing={24}>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Nombre:</b> {person.name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Cedula:</b> {person.dni}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Telefono:</b> {person.phone}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Estado:</b> {person.state}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Municipio:</b> {person.municipality}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Dirección:</b> {person.address}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <DataTable
                    columns={columns}
                    rows={person.invoices.purchase}
                    handleClick={({ id }) =>
                      history.push(`/gastos/factura-compra/${id}`)
                    }
                  />
                </Grid>
              </Grid>
            </MainContainer>
          </>
        );
      }}
    </Query>
  );
};

export default withRouter(DetailsWarehouse);

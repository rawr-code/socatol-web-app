import React from 'react';
import { Query } from 'react-apollo';

// Material UI
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

// Layout
import { MainContainer, FeatureBar } from '../../Layout';

// Molecules
import { ContentHeader, DataTable } from '../../components/Molecules';

// Queries
import { GET_INVOICE_QUERY } from '../../queries/Invoice';

const DetailsWarehouse = props => {
  const { id } = props.match.params;
  const columns = [
    {
      name: 'name',
      title: 'Nombre'
    },
    {
      name: 'quantity',
      title: 'Cantidad'
    },
    {
      name: 'price',
      title: 'Precio unitario'
    }
  ];
  return (
    <Query query={GET_INVOICE_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) console.error(error.message);
        console.log(data);

        let { invoice } = data;

        return (
          <>
            <FeatureBar
              title={`${invoice.number}`}
              back
              subtitle={
                invoice.type === 'COMPRA'
                  ? 'Factura de compra'
                  : 'Factura de venta'
              }
            />
            <MainContainer>
              <Grid container spacing={24}>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <ContentHeader title="Información de la factura" />
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Número de factura:</b> {invoice.number}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Fecha de emision:</b> {invoice.dateEmit}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Tipo de pago:</b> {invoice.paymentType}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Monto Total:</b> {invoice.amount} Bs. S
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Estado:</b>{' '}
                            {invoice.status === 'CONCILIADO' ? (
                              <b style={{ color: '#27c24c' }}>
                                {invoice.status}
                              </b>
                            ) : (
                              <b style={{ color: 'red' }}>{invoice.status}</b>
                            )}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <ContentHeader
                        title={
                          invoice.type === 'COMPRA' ? 'Proveedor' : 'Cliente'
                        }
                      />
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Nombre:</b> {invoice.person.name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Telefono:</b> {invoice.person.phone}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Estado:</b> {invoice.person.state}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Municipio:</b> {invoice.person.municipality}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Dirección:</b> {invoice.person.address}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <ContentHeader title="Productos" />
                  <DataTable columns={columns} rows={invoice.products} />
                </Grid>
              </Grid>
            </MainContainer>
          </>
        );
      }}
    </Query>
  );
};

export default DetailsWarehouse;

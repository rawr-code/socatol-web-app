import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
// Layout
import { FeatureBar, MainContainer } from '../../Layout';

// Material UI
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

// Queries
import { GET_PRODUCT_OTHER_QUERY } from '../../queries/Product';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../components/Molecules';

// Mutations
import { UPDATE_WAREHOUSE_MUTATION } from '../../mutations/Warehouse';

// Forms
import ProductForm from './ProductForm';

const DetailsProduct = props => {
  const { id } = props.match.params;
  const { history, session } = props;
  const columnsPersons = [
    {
      name: 'name',
      title: 'Nombre'
    },
    {
      name: 'state',
      title: 'Estado'
    },
    {
      name: 'municipality',
      title: 'Municipio'
    },
    {
      name: 'datee',
      title: 'Fecha de ultima compra'
    },
    {
      name: 'ultima',
      title: 'Ultima compra'
    },
    {
      name: 'total',
      title: 'Total comprado'
    },
    {
      name: 'amount',
      title: 'Monto'
    }
  ];
  const columnsClients = [
    {
      name: 'name',
      title: 'Nombre'
    },
    {
      name: 'state',
      title: 'Estado'
    },
    {
      name: 'municipality',
      title: 'Municipio'
    },
    {
      name: 'datee',
      title: 'Fecha de ultima venta'
    },
    {
      name: 'ultima',
      title: 'Ultima venta'
    },
    {
      name: 'total',
      title: 'Total vendido'
    }
  ];
  return (
    <Query query={GET_PRODUCT_OTHER_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;

        if (error) console.error(error);

        console.log(data);
        const { productsOther: product } = data;

        let clientsData = [];
        let supplidersData = [];

        product.clients.forEach(item => {
          const { name, state, municipality, id } = item.person;
          let total = 0;
          let datee = '';
          let ultima = '';
          item.quantitys.forEach((i, index) => {
            total += i.quantity;
            if (index === item.quantitys.length - 1) {
              datee = i.date;
              ultima = i.quantity;
            }
          });

          clientsData.push({
            id,
            name,
            state,
            municipality,
            total,
            datee,
            ultima
          });
        });

        product.suppliders.forEach(item => {
          const { name, state, municipality, id } = item.person;
          let amount = 0;
          let datee = '';
          let ultima = '';
          let total = 0;
          item.prices.forEach((i, index) => {
            total += i.quantity;
            if (index === item.prices.length - 1) {
              ultima = i.quantity;
              datee = i.date;
              amount = i.amount;
            }
          });

          supplidersData.push({
            id,
            name,
            state,
            municipality,
            datee,
            amount,
            total,
            ultima
          });
        });

        return (
          <>
            <FeatureBar title={product.name} subtitle="Producto" back />
            <MainContainer>
              <ContentHeader title="Información del producto">
                {session.role !== 'CONSULTOR' && (
                  <ButtonDialogForm
                    title="Editar información"
                    form={ProductForm}
                    mutation={UPDATE_WAREHOUSE_MUTATION}
                    data={product}
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
                            <b>Nombre:</b> {product.name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Precio:</b> {product.price}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <b>Disponible:</b> {product.stock}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={8}>
                    <Grid item xs={12}>
                      <ContentHeader title="Proveedores" />
                      <DataTable
                        columns={columnsPersons}
                        rows={supplidersData}
                        handleClick={({ id }) =>
                          history.push(`/gastos/proveedores/${id}`)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ContentHeader title="Clientes" />
                      <DataTable
                        columns={columnsClients}
                        rows={clientsData}
                        handleClick={({ id }) =>
                          history.push(`/ingresos/clientes/${id}`)
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </MainContainer>
          </>
        );
      }}
    </Query>
  );
};

export default withRouter(DetailsProduct);

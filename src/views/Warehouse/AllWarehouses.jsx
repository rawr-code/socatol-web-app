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
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

// Mutations
import { NEW_WAREHOUSE_MUTATION } from '../../mutations/Warehouse';

// Subscriptions
import { WAREHOUSE_ADDED_SUBSCRIPTION } from '../../subscriptions/Warehouse';

// Form
import WarehouseForm from './WarehouseForm';

import warehouseImg from '../../images/warehouse.png';

class DataContainer extends Component {
  componentDidMount() {
    this.props.subscribe();
  }

  render() {
    const { loading, error, data } = this.props;

    if (loading) return null;
    if (error) console.error(error.message);

    const { warehouses } = data;

    return (
      <Grid container spacing={24}>
        {warehouses.map(warehouse => (
          <Grid item xs={12} md={3} key={warehouse.id}>
            <Card>
              <div
                style={{
                  padding: '24px 24px 0',
                  display: 'flex'
                  // justifyContent: 'center'
                }}>
                <img src={warehouseImg} alt="imagen" height={64} width={64} />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="h6">{warehouse.name}</Typography>
                  <Typography variant="body1">
                    {warehouse.description}
                  </Typography>
                </div>
              </div>

              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  component={Link}
                  to={`/inventario/almacenes/${warehouse.id}`}
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

const AllWarehouses = ({ session }) => {
  return (
    <MainContainer>
      <ContentHeader title="Todos los almacenes">
        {session.role !== 'CONSULTOR' && (
          <ButtonDialogForm
            title="Añadir almacén"
            form={WarehouseForm}
            mutation={NEW_WAREHOUSE_MUTATION}
          />
        )}
      </ContentHeader>
      <Query query={GET_WAREHOUSES_QUERY}>
        {({ subscribeToMore, ...rest }) => {
          return (
            <DataContainer
              {...rest}
              subscribe={() =>
                subscribeToMore({
                  document: WAREHOUSE_ADDED_SUBSCRIPTION,
                  updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    const { warehouseAdded } = subscriptionData.data;

                    return { warehouses: [...prev.warehouses, warehouseAdded] };
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

export default AllWarehouses;

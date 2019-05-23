import React, { Component } from 'react';
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
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

// Mutations
import { NEW_WAREHOUSE_MUTATION } from '../../mutations/Warehouse';

// Subscriptions
import { WAREHOUSE_ADDED_SUBSCRIPTION } from '../../subscriptions/Warehouse';

// Form
import WarehouseForm from './WarehouseForm';

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
              <CardHeader
                avatar={
                  <Avatar style={{ backgroundColor: '#27c24c' }}>
                    <Home />
                  </Avatar>
                }
                title={warehouse.name}
                // subheader="Productos"
              />

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

const AllWarehouses = () => {
  return (
    <MainContainer>
      <ContentHeader title="Todos los almacenes">
        <ButtonDialogForm
          title="Añadir almacén"
          form={WarehouseForm}
          mutation={NEW_WAREHOUSE_MUTATION}
        />
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

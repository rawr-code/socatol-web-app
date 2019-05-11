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
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

// Mutations
import { NEW_WAREHOUSE_MUTATION } from '../../mutations/Warehouse';

// Form
import WarehouseForm from './WarehouseForm';

const AllWarehouses = props => {
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
        {({ loading, error, data }) => {
          if (error) {
            console.error(error.message);
            return null;
          }

          let warehouses = [];

          if (data && data.getWarehouses) {
            warehouses = data.getWarehouses;
          }

          return (
            <Grid container spacing={24}>
              {warehouses.map(warehouse => (
                <Grid item xs={12} md={3} key={warehouse.id}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar style={{ backgroundColor: '#039be5' }}>
                          <Home />
                        </Avatar>
                      }
                      title={warehouse.name}
                      subheader="Productos"
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
        }}
      </Query>
    </MainContainer>
  );
};

export default AllWarehouses;

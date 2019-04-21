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
import { MainContainer } from '../../components/Layout';

// Molecules
import ContentHeader from '../../components/Molecules/ContentHeader';

// Queries
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

const AllWarehouses = props => {
  return (
    <MainContainer>
      <ContentHeader
        title="Todos los almacenes"
        button={{
          label: 'Añadir almacén',
          to: '/inventario/almacenes/nuevo'
        }}
      />
      <Query query={GET_WAREHOUSES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error:${error.message}`;

          const warehouses = data.getWarehouses;
          console.log(warehouses);
          if (warehouses.length < 1) return null;
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
                      subheader={warehouse.active ? 'Activo' : 'Inactivo'}
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

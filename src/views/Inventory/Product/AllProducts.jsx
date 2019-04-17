import React from 'react';
import { Query } from 'react-apollo';

// Queries
import { GET_PRODUCTS_QUERY } from '../../../queries/Product';

// Molecules
import DataTable from '../../../components/Molecules/DataTable';

import { Button } from '@material-ui/core';

const AllProducts = props => {
  const columns = [
    {
      name: 'name',
      title: 'Nombre'
    },
    {
      name: 'price',
      title: 'Precio'
    },
    {
      name: 'stock',
      title: 'Almacenado'
    }
  ];
  return (
    <Query query={GET_PRODUCTS_QUERY}>
      {({ loading, error, data }) => {
        let isLoading = false;
        let rows = [];

        if (loading) isLoading = true;

        if (error) {
          isLoading = false;
          return `Error: ${error.message}`;
        }

        if (Object.keys(data).length > 0) {
          console.log(data);
          rows = data.getProducts;
        }

        return (
          <>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: 4 }}>
              adasd
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: 6 }}>
              adasd
            </Button>
            <Button variant="contained" color="primary">
              adasd
            </Button>
            <DataTable columns={columns} rows={rows} isLoading={isLoading} />
          </>
        );
      }}
    </Query>
  );
};

export default AllProducts;

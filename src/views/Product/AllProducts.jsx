import React from 'react';
import { Query } from 'react-apollo';

// Queries
import { GET_PRODUCTS_QUERY } from '../../queries/Product';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import DataTableHeader from '../../components/Molecules/DataTableHeader';

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
          isLoading = false;
          rows = data.getProducts;
        }

        return (
          <>
            <DataTableHeader
              title="Lista de productos"
              button={{
                label: 'Añadir producto',
                to: '/inventario/productos/nuevo'
              }}
            />
            <DataTable columns={columns} rows={rows} isLoading={isLoading} />
          </>
        );
      }}
    </Query>
  );
};

export default AllProducts;

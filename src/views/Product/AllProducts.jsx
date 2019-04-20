import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer } from '../../components/Layout';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import ContentHeader from '../../components/Molecules/ContentHeader';

// Queries
import { GET_PRODUCTS_QUERY } from '../../queries/Product';

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
      name: 'quantity',
      title: 'Almacenado'
    },
    {
      name: 'quantity1',
      title: 'Disponible'
    }
  ];
  return (
    <Query query={GET_PRODUCTS_QUERY} pollInterval={3000}>
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

        console.log(data);
        return (
          <MainContainer>
            <ContentHeader
              title="Lista de productos"
              button={{
                label: 'Añadir producto',
                to: '/inventario/producto/nuevo'
              }}
            />
            <DataTable columns={columns} rows={rows} isLoading={isLoading} />
          </MainContainer>
        );
      }}
    </Query>
  );
};

export default AllProducts;

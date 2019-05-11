import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../components/Molecules';

// Queries
import { GET_PRODUCTS_QUERY } from '../../queries/Product';

// Mutations
import { NEW_PRODUCT_MUTATION } from '../../mutations/Product';

// Form
import ProductForm from './ProductForm';

const AllProducts = props => {
  const columns = [
    {
      name: 'name',
      title: 'Nombre'
    },
    {
      name: 'stock',
      title: 'Almacenado'
    },
    {
      name: 'price',
      title: 'Precio'
    }
  ];
  return (
    <MainContainer>
      <ContentHeader title="Lista de productos">
        <ButtonDialogForm
          title="Añadir producto"
          form={ProductForm}
          mutation={NEW_PRODUCT_MUTATION}
        />
      </ContentHeader>
      <Query query={GET_PRODUCTS_QUERY} pollInterval={3000}>
        {({ loading, error, data }) => {
          if (error) {
            console.error(error.message);
            return null;
          }

          let products = [];

          if (data && data.getProducts) {
            products = data.getProducts;
          }

          console.log(data);
          return (
            <DataTable
              columns={columns}
              rows={products}
              pathTab="/inventario/productos"
              history={props.history}
            />
          );
        }}
      </Query>
    </MainContainer>
  );
};

export default AllProducts;

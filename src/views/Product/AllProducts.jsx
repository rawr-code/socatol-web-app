import React, { Component } from 'react';
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

// Subscriptions
import { PRODUCT_ADDED_SUBSCRIPTION } from '../../subscriptions/Product';

// Form
import ProductForm from './ProductForm';

class DataContainer extends Component {
  componentDidMount() {
    this.props.subscribe();
  }

  render() {
    const { loading, error, data } = this.props;
    if (loading) return null;
    if (error) console.error(error.message);

    const { products } = data;

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
      <DataTable
        columns={columns}
        rows={products}
        handleClick={e => console.log(e)}
      />
    );
  }
}

const AllProducts = () => {
  return (
    <MainContainer>
      <ContentHeader title="Lista de productos">
        <ButtonDialogForm
          title="Añadir producto"
          form={ProductForm}
          mutation={NEW_PRODUCT_MUTATION}
        />
      </ContentHeader>

      <Query query={GET_PRODUCTS_QUERY}>
        {({ subscribeToMore, ...rest }) => {
          return (
            <DataContainer
              {...rest}
              subscribe={() =>
                subscribeToMore({
                  document: PRODUCT_ADDED_SUBSCRIPTION,
                  updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    const { productAdded } = subscriptionData.data;

                    return { products: [...prev.products, productAdded] };
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

export default AllProducts;

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';

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
    const { loading, error, data, onClick } = this.props;
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
        handleClick={({ id }) => onClick(`/inventario/productos/${id}`)}
      />
    );
  }
}

const AllProducts = ({ history, session }) => {
  return (
    <MainContainer>
      <ContentHeader title="Lista de productos">
        {session.role !== 'CONSULTOR' && (
          <ButtonDialogForm
            title="Añadir producto"
            form={ProductForm}
            mutation={NEW_PRODUCT_MUTATION}
          />
        )}
      </ContentHeader>

      <Query query={GET_PRODUCTS_QUERY}>
        {({ subscribeToMore, ...rest }) => {
          return (
            <DataContainer
              onClick={history.push}
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

export default withRouter(AllProducts);

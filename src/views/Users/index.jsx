import React, { Component } from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer, FeatureBar } from '../../Layout';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../components/Molecules';

// Queries
import { GET_USERS_QUERY } from '../../queries/User';

// Mutations
import { NEW_USER_MUTATION } from '../../mutations/User';

// Subscriptions
import { PRODUCT_ADDED_SUBSCRIPTION } from '../../subscriptions/Product';

// Form
import UserForm from './UserForm';

class DataContainer extends Component {
  componentDidMount() {
    this.props.subscribe();
  }

  render() {
    const { loading, error, data } = this.props;
    if (loading) return null;
    if (error) console.error(error.message);

    const { users } = data;

    const columns = [
      {
        name: 'username',
        title: 'Nombre de usuario'
      },
      {
        name: 'role',
        title: 'Permiso'
      }
    ];

    return (
      <DataTable
        columns={columns}
        rows={users}
        handleClick={e => console.log(e)}
      />
    );
  }
}

const AllProducts = () => {
  return (
    <>
      <FeatureBar title="Usuarios" />
      <MainContainer>
        <ContentHeader title="Lista de usuarios">
          <ButtonDialogForm
            title="Añadir Usuario"
            form={UserForm}
            mutation={NEW_USER_MUTATION}
          />
        </ContentHeader>

        <Query query={GET_USERS_QUERY}>
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
    </>
  );
};

export default AllProducts;

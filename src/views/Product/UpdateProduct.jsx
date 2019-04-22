import React from 'react';
import { Query } from 'react-apollo';

// Queries
import { GET_PRODUCT_QUERY } from '../../queries/Product';

// Mutations
import { UPDATE_PRODUCT_MUTATION } from '../../mutations/Product';

import ProductForm from './ProductForm';

const UpdateProduct = props => {
  const { id } = props.match.params;
  return (
    <Query query={GET_PRODUCT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'loading...';

        if (error) console.log(`Error: ${error.message}`);

        if (data && data.getProduct === null) return 'not found 404';

        return (
          <ProductForm
            mutation={UPDATE_PRODUCT_MUTATION}
            data={data.getProduct}
          />
        );
      }}
    </Query>
  );
};

export default UpdateProduct;
